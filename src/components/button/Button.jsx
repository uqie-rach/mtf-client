import React from "react";

const Button = ({ text, variant, onClick = () => {}}) => {
  return <button onClick={onClick} className={`btn-base font-body-1 uppercase font-semibold ${variant}`}>{text}</button>;
};

export default Button;
