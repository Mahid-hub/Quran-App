import React from "react";

function InputField({
  bgClr,
  placeHolder,
  textClr,
  placeholderClr,
  value,
  onChange,
}) {
  return (
    <div
      className={`flex items-center rounded-full px-4 py-3 w-[85%] max-w-2xl mx-auto ${bgClr}`}
    >
      <i className="fa-solid fa-magnifying-glass text-gray-400 mr-3"></i>

      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        className={`flex-grow bg-transparent outline-none ${textClr} ${placeholderClr} text-sm sm:text-base`}
      />

      <i className="fa-solid fa-microphone cursor-pointer text-white hover:bg-slate-500 hover:rounded-full hover:p-1"></i>
    </div>
  );
}

export default InputField;
