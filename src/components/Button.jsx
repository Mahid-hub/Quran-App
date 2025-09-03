import React from "react";

function Button({
  text,
  varient,
  bgClr,
  textClr,
  height,
  width,
  click,
  className,
}) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold";

  const varients = {
    border: `rounded-xl font-semibold ${bgClr} ${textClr} ${height} ${width} hover:underline`,
    unborder: `rounded-xl font-semibold bg-transparent ${textClr} underline ${height} ${width} hover:text-[#8f8f8f]`,
  };

  return (
    <>
      <div>
        <button
          onClick={click}
          className={`${baseStyle} ${varients[varient]} ${className}`}
        >
          {text}
        </button>
      </div>
    </>
  );
}

export default Button;
