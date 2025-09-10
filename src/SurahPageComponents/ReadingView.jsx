// components/ReadingView.jsx
import React from 'react';

const ReadingView = ({ verses, bgClr, textClr }) => {
  return (
    <div className={`${bgClr} ${textClr} px-6 py-6`}>
      <div className="space-y-6">
        {verses.map((verse, index) => (
          <p key={index} className="text-xl text-center leading-loose">
            {verse} <span className="text-base">{verse.verseNumber}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ReadingView;
