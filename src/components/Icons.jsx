import React from 'react';

function Icons({ bgColor, icon, name, borderColor,hoverBg }) {
  return (
    <div className={`border ${borderColor} ${bgColor} w-36 h-36 sm:w-32 sm:h-32 flex items-center justify-center rounded-[30%] cursor-pointer ${hoverBg}`}>
      <h2>{name}</h2>
    </div>
  );
}

export default Icons;
