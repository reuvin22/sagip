import React from 'react';
import Lines from '../assets/lines.png'
function Icons({ bgColor, icon, name, borderColor, hoverBg, pageId, image }) {
  return (
    <>
      <a href={`#${pageId}`}>
        <div 
          className={`border ${borderColor} ${bgColor} w-40 h-40 sm:w-36 sm:h-36  
          rounded-[40%] cursor-pointer ${hoverBg} transition-transform duration-300 grid place-items-center overflow-hidden`}
        >
          <img src={Lines} alt="Lines" />
          <img src={image} alt="Widget Icon" className='sm:w-[80%] h-54 w-96 absolute'/>
          
          <h2 className='text-center mt-2'>{name}</h2>
        </div>
      </a>
    </>
  );
}

export default Icons;
