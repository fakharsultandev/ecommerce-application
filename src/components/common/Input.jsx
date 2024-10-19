import React from 'react';
import PropTypes from 'prop-types';

function Input({ name, type = "text", className = "", ...props }) {
  return (
    <input
      {...props}
      type={type}
      name={name}
      className={`border p-2 px-4 w-full rounded-full outline-none focus:border-black ${className}`}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;