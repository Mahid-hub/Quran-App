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
        <i className="fa-solid fa-microphone cursor-pointer text-white hover:bg-slate-500 hover:rounded-full hover:p-1"></i>
      </div>
    </>
  );
}

export default InputField;
