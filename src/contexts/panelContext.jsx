import { createContext, useState } from "react";

export const PanelContext = createContext(null);

const SearchPanelProvider = ({ children }) => {
  const [visible, setVisibility] = useState({
    searchPanel: false,
    filterPanel: false,
    checkoutPanel: false,
  });

  const value = { visible, setVisibility };

  return (
    <PanelContext.Provider value={value}>
      {children}
    </PanelContext.Provider>
  );
};

export default SearchPanelProvider;
