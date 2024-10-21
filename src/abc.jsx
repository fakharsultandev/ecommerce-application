import React from "react";

const App = ({ children }) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type.name === "Item") {
      return React.cloneElement(child, { enabled: false });
    }
    return child;
  });
};

export default App;