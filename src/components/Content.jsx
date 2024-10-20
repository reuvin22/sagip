import React from 'react';

function Macronutrients({title, description1, description2, video, id, pdfName}) {
  return (
    <>
      <div id={id} className="mt-10 h-[100vh]">
        <div>
          <div className="border-2 border-[#473664] w-[50%] rounded-e-3xl bg-pink-300 flex justify-center py-5">
            <span className="text-4xl font-bold">{title}</span>
          </div>
          
          <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
            <div className='w-[50%] border-2 border-black py-3 px-4 rounded-lg bg-white'>
              {description1}
            </div>
            <div className="w-[50%] sm:w-[80%] md:w-full h-72 overflow-hidden rounded-2xl bg-black">
              {video}
            </div>
            <div className='w-[50%] border-2 border-black py-3 px-4 rounded-lg bg-white'>
              {description2}
            </div>

            <div className="flex justify-center items-center gap-10 mt-5 bg-[#FFF1B4] w-[50%] rounded-full py-2">
              <span className='font-bold'>PDF DOWNLOAD OF {pdfName} HERE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Macronutrients;
