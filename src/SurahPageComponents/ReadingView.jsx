import React from "react";

const ReadingView = ({ verses, bgClr, textClr, className, ...rest }) => {
  return (
    <div
      className={`${bgClr} ${textClr} px-6 py-6 ${className || ""}`}
      {...rest}
    >
      <div className={`${bgClr} ${textClr} px-6 py-6`}>
        <div className="space-y-6">
          {verses.map((v, index) => (
            <p
              key={v.globalNumber || index}
              className="text-xl text-right border-t py-1 leading-loose font-arabic verse-item"
              data-juz={v.juz}
              data-page={v.page}
              data-hizb={v.hizb}
            >
              {v.arabic}{" "}
              <span className="text-base">﴿{v.number || index + 1}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingView;
