/**
 * Simple reusable Button component
 */

import React from 'react';

/**
 * @param {Function, string, boolean} props 
 */
function Button(props) {
  const { onClick, label } = props;
  return (
    <button
      onClick={onClick}
      className="btn btn-info mb-3">
      {label}
    </button>
  );
}

export default Button;