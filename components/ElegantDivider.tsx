
import React from 'react';

const ElegantDivider: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-12 md:my-20" aria-hidden="true">
      <div className="w-24 h-px bg-blue-700/30"></div>
      <svg
        xmlns="http://www.w.org/2000/svg"
        className="h-6 w-6 text-blue-800 mx-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2.143 2.143 0 01-3.028 0l-1.4-1.4a2.143 2.143 0 00-3.028 0l-.7.7a2.143 2.143 0 01-3.028 0l-1.4-1.4a2.143 2.143 0 00-3.028 0L3.57 13.57m15.858 1.858a2.143 2.143 0 010-3.028l-1.4-1.4a2.143 2.143 0 00-3.028 0l-.7.7a2.143 2.143 0 01-3.028 0l-1.4-1.4a2.143 2.143 0 00-3.028 0L3.57 10.5m15.858 1.858L18 13.858m-2.142-2.142L12 8.142"
        />
      </svg>
      <div className="w-24 h-px bg-blue-700/30"></div>
    </div>
  );
};

export default ElegantDivider;
