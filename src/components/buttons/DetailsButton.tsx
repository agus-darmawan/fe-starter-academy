import React from 'react';

function DetailsButton({ onClick, isExpanded }) {
  return (
    <button
      className='bg-blue-backgraund text-blue-starter mx-auto rounded-full px-5 py-2 text-lg shadow-lg transition hover:scale-105 hover:bg-white'
      onClick={onClick}
    >
      {isExpanded ? 'Hide' : 'Show'}
    </button>
  );
}

export default DetailsButton;
