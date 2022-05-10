import React from "react";

const Button = ({
  text,
  onSubmit,
  color,
  textColor,
  height,
  width,
  ...rest
}) => {
  return (
    <div>
      <button
        type="button"
        className="btn form-control  mb-3"
        onClick={onSubmit}
        style={{
          backgroundColor: color,
          color: textColor,
          height: height,
          width: width,
        }}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
