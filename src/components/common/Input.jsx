/**
 * Reusable input component having button to submit data
 */


import React from "react";
import Button from './Button';

const Input = ({ name, label, onButtonClick, value, onChange }) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} value={value} onChange={onChange} className="form-control" />
      <div className="mt-3">
        <Button onClick={onButtonClick} label="Get"></Button>
      </div>
    </div>
  );
};

export default Input;
