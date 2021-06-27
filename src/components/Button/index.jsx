import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const sizeArr = ["xs", "sm", "md", "lg", "xLg"];
const colorArr = [
  "normal",
  "outline",
  "disabled",
  "rounded",
  "success",
  "danger",
  "warning",
  "info",
];

function index({ label, onClick, size, color, disabled, tooltip }) {
  const checkButtonSize = sizeArr.includes(size) ? size : "";
  const checkButtonStyle = colorArr.includes(color) ? color : "";

  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${checkButtonSize} ${checkButtonStyle}`}
        color={color}
        tooltip={tooltip}
      >
        {label}
      </button>
    </div>
  );
}

index.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xLg"]),
  color: PropTypes.oneOf([
    "normal",
    "outline",
    "disabled",
    "rounded",
    "success",
    "danger",
    "warning",
    "info",
  ]),
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default index;
