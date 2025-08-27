import React from "react";

function InputField(props) {
  return (
    <>
      <div
        className={`flex items-center rounded-full px-4 py-3 w-full max-w-2xl mx-auto ${props.bgClr}`}
      >
        <i className={`fa-solid fa-magnifying-glass text-gray-400 mr-3`}></i>
        <input
          type="text"
          placeholder={props.placeHolder}
          className={`flex-grow bg-transparent outline-none ${props.textClr} ${props.placeholderClr} text-sm sm:text-base`}
        />
        <i className={`fa-solid fa-microphone text-gray-400`}></i>
      </div>
    </>
  );
}

export default InputField;
