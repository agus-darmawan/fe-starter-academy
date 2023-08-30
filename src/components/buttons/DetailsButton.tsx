import React from 'react';

function DetailsButton({ onClick, isExpanded }) {
  return (
    <button
      className='bg-blue-backgraund text-blue-starter mx-auto rounded-full px-5 py-2 text-lg shadow-lg hover:bg-white'
      onClick={onClick}
    >
      {isExpanded ? 'Details' : 'Details'}
    </button>
  );
}

export default DetailsButton;
