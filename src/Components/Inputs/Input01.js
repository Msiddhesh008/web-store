import React, { useState } from "react";

const input01Style = {
  width: "100%",
  border: "1px solid #ADB3BD",
  outline: "none",
  height: 50,
  fontSize: "16px",
};

const focusedInputStyle = {
  border: "1px solid #3366FF", // Change border color for focused state
};

const Input01 = ({ type, placeholder, onChange, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      style={
        isFocused ? { ...input01Style, ...focusedInputStyle } : input01Style
      }
      type={type}
      name={name}
      className="rounded-4 ps-3 d-flex  align-items-center"
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
};

export default Input01;
