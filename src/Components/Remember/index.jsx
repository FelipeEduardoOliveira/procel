import React from "react";

const Rememberme = ({ value, label, onchange }) => {
  return (
    <div>
      <input
        type={"checkbox"}
        id="remember-me"
        value={value}
        onChange={(e) => onchange(e.target.checked)}
      />

      <label htmlFor="remember-me"> {label}</label>
    </div>
  );
};

export default Rememberme;
