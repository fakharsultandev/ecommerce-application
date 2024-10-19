import React, { useState, useEffect, useRef, useCallback } from "react";
import { BiSort } from "react-icons/bi";

const Menu = ({ options }) => {
  const [visible, setVisible] = useState(false);
  const [currentSelect, setSelectedOption] = useState("Featured");
  const menuRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (visible && menuRef.current && !menuRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, [visible, menuRef]);

  useEffect(() => {
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, handleClickOutside]);

  const getClasses = useCallback(() => {
    let classes =
      "absolute shadow-lg w-60 border p-2 right-2 bg-white rounded-lg ";
    classes += "transition-all duration-300 ease-in-out ";
    if (visible) {
      classes += "opacity-100 translate-y-0";
    } else {
      classes += "opacity-0 -translate-y-2 pointer-events-none";
    }
    return classes;
  }, [visible]);

  const handleOptionClick = useCallback((option) => {
    setSelectedOption(option.title);
    setVisible(false);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setVisible(!visible)}
        className="border p-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-gray-100"
      >
        <BiSort />
        {currentSelect}
      </button>
      <ul className={getClasses()}>
        {options.map((option) => (
          <li
            onClick={() => handleOptionClick(option)}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded transition-all duration-200 ease-in-out"
            key={option.id}
          >
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;