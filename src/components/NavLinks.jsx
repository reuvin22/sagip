import React from 'react';

function NavLinks({pageId}) {
  return (
    <div className="flex justify-end gap-5 items-center mr-[5%] mb-10 sticky top-10 z-10 sm:hidden">
      <a href={`${pageId}`}>
        <button className="py-2 px-4 border border-[#DE638A] bg-[#DE638A] hover:bg-gray-300 text-xl rounded-lg">
          Home
        </button>
      </a>
      <button className="py-2 px-4 border border-[#DE638A] bg-[#DE638A] hover:bg-gray-300 text-xl rounded-lg">
        About Us
      </button>
    </div>  
  );
}

export default NavLinks;
