import React from 'react'

function Header({headerTitle}) {
  return (
    <>
         <div className='grid gap-3 mt-5 place-items-center'>
          <hr className='w-[80%] border-black'/>
            <h1 className="text text-4xl text-green-700 place-self-start ml-[10%] font-bold">{headerTitle}</h1>
          <hr  className='w-[80%] border-black'/>
        </div>
    </>
  )
}

export default Header