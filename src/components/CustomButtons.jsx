import React from "react";

function Button(props) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold";

  const varients = {
    border: `rounded-xl font-semibold ${props.bgClr} ${props.textClr} ${props.height} ${props.width} hover:underline`,
    unborder:
      "rounded-xl font-semibold bg-transparent text-white underline ${props.height} ${props.width} hover:text-[#8f8f8f]",
  };
  return (
    <>
      <div className="prose">
        <button
          onClick={props.click}
          className={`${baseStyle} ${varients[props.varient]} ${
            props.className //className for extra styling
          }`}
        >
          {props.text}
        </button>
      </div>
    </>
  );
}

export default Button;
