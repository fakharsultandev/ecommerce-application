import PropTypes from 'prop-types';
import React from "react";

function Layer({ enable, className, style, ...restProps }) {
  if (enable) {
    return (
      <div {...restProps} className={`fixed top-0 bottom-0 left-0 right-0 bg-zinc-300 opacity-45 z-0 transition-all ${className}`} style={style}></div>
    );
  }
  return null;
}

Layer.propTypes = {
  enable: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Layer;
