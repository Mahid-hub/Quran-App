import React from "react";

function Button(props) {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold";

  const varients = {
    border: `rounded-xl font-semibold ${props.bgClr} ${props.textClr} h-10 w-40 hover:underline`,
    unborder:
      "rounded-xl font-semibold bg-transparent text-white underline h-10 w-40 hover:text-[#444]",
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
