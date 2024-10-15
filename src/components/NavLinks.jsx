import React from 'react';

function NavLinks() {
  return (
    <div className="flex justify-end gap-5 items-center mr-[5%] mt-[3%]">
      <button className="py-2 px-4 border border-rose-300 bg-rose-300 hover:bg-gray-300 text-xl rounded-lg">
        Home
      </button>
      <button className="py-2 px-4 border border-rose-300 bg-rose-300 hover:bg-gray-300 text-xl rounded-lg">
        About Us
      </button>
    </div>  
  );
}

export default NavLinks;
