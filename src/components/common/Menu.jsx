import PropTypes from "prop-types";
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  createContext,
} from "react";

const MenuContext = createContext();

const handleClickOutside = (event, menuRef, closeMenu) => {
  if (menuRef.current && !menuRef.current.contains(event.target)) closeMenu();
};

const Menu = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref to the menu element

  const toggleMenu = useCallback(
    () => setMenuOpen((prevState) => !prevState),
    []
  );
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  //Close menu on click outside
  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, menuRef, closeMenu)
    );
    return () =>
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, menuRef, closeMenu)
      );
  }, [closeMenu]);

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      <div ref={menuRef} className="relative">
        {children}
      </div>
    </MenuContext.Provider>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

const MenuButton = ({ children, className = " " }) => {
  const { toggleMenu, menuOpen } = useContext(MenuContext);
  return (
    <button
      onClick={toggleMenu}
      className={`menu-button ${className}`}
      aria-expanded={menuOpen}
    >
      {children}
    </button>
  );
};

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const MenuList = ({ children, className = " " }) => {
  const { menuOpen } = useContext(MenuContext);

  return (
    menuOpen && (
      <div className={`menu-list absolute z-30 ${className}`}>{children}</div>
    )
  );
};

MenuList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const MenuItem = ({ children, onClick, className = " " }) => {
  const { closeMenu } = useContext(MenuContext);

  const handleClick = () => {
    onClick && onClick();
    closeMenu();
  };

  return (
    <div
      onClick={handleClick}
      className={`menu-item cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export { Menu, MenuButton, MenuList, MenuItem };
