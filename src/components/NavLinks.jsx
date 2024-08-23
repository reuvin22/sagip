import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
function NavLinks() {
  return (
    <>
        <div className="flex gap-5 items-center mt-5 ml-[5%]">
            <Link to='/'>
              <div>
                <img src={Logo} alt="Logo" className='max-h-60 max-w-60 min-h-20 min-w-20'/>
              </div>
            </Link>
            <div>
              <Link to='/'>
                <span className="text text-4xl text-green-700">S.A.G.I.P</span>
              </Link>
            </div>
        </div>
        <div className='flex place-items-center justify-center'>
            <div className='flex place-content-evenly gap-5 justify-center items-center'>
                <a href='essential' className="text text-2xl text-green-700">Essential</a>
                <a href='dietaryRecommendation' className="text text-2xl text-green-700">Dietary Recommendation</a>
                <a href='foodSupplement' className="text text-2xl text-green-700">Food Supplement</a>
                <a href='food' className="text text-2xl text-green-700">Food</a>
            </div>
        </div>
    </>
  )
}

export default NavLinks