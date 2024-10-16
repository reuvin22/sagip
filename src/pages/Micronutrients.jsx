import React from 'react'

function Micronutrients() {
  return (
    <div id="micro" className='h-screen flex flex-col justify-center items-center sm:mt-10'>
        <div className='flex float-start p-3 rounded-2xl bg-yellow-200'>
            <span className='text-xl font-bold'>Micronutrients</span>
        </div>
        <div className='mt-5'>
            DESCRIPTION
        </div>
        <div className='w-[50%] sm:w-[80%] md:w-full h-72 overflow-hidden rounded-2xl mt-5 bg-black'>
                
        </div>
        <div className='mt-5'>
            DESCRIPTION
        </div>
        <div className='flex w-full justify-center items-center gap-10 mt-5'>
            <button className='bg-rose-300 border-2 py-3 px-5 rounded-lg border-rose-300 hover:bg-rose-400'>PDF1</button>
            <button className='bg-rose-300 border-2 py-3 px-5 rounded-lg border-rose-300 hover:bg-rose-400'>PDF1</button>
        </div>
    </div>
  )
}

export default Micronutrients