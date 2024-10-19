import React from "react";

function Layer({ enable }) {
  return (
    enable && <div className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-700 opacity-45 z-20"></div>
  );
}

export default Layer;
