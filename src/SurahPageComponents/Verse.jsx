import React from 'react';
import {
  DocumentDuplicateIcon,
  BookmarkIcon,
  PlayIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline';

const Verse = ({
  verseNumber,
  arabicText,
  translation,
  onPlay,
  onCopy,
  onBookmark,
  bgClr,
  textClr,
}) => {
  return (
    <div className={`${bgClr} ${textClr} px-6 py-6`}>
      <div className="flex items-start space-x-4 max-w-[1100px] mx-auto border-t-[1px] border-gray-500">
        {/* ICONS - LEFT SIDE */}
        <div className="flex-shrink-0">
          <div className="flex flex-col space-y-4 text-gray-500">
            <button
              onClick={() => onCopy(verseNumber)}
              className="p-2 hover:text-gray-300"
              title="Copy verse"
            >
              <DocumentDuplicateIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => onBookmark(verseNumber)}
              className="p-2 hover:text-gray-300"
              title="Bookmark verse"
            >
              <BookmarkIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => onPlay(verseNumber)}
              className="p-2 hover:text-gray-300"
              title="Play verse"
            >
              <PlayIcon className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:text-gray-300"
              title="Comment"
            >
              <ChatBubbleOvalLeftIcon className="h-5 w-5" />
            </button>

            <button
              className="p-2 hover:text-gray-300"
              title="More options"
            >
              <EllipsisVerticalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* VERSE CONTENT */}
        <div className="flex-1">
          {/* Arabic text */}
          <div className="text-right mb-6">
            <p className="text-2xl leading-relaxed mb-2">
              {arabicText}
            </p>
          </div>

          {/* Translation */}
          <div className="text-left">
            <p className="leading-relaxed mb-4">
              {translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verse;
