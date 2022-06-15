import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{ color: "red" }}>{props.label} Cosmin badescu</button>;
};

export default Button;
