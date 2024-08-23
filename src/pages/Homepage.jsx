import React from 'react'
import NavLinks from '../components/NavLinks'
import Header from '../components/Header'
import Slider from '../components/Slider'
import DOH1 from '../assets/doh1.jpg'
import DOH2 from '../assets/doh2.jpg'
import DOH3 from '../assets/doh3.jpg'
function Homepage() {
  const arrayImg = [
    {img: DOH1, title:'Title1'},
    {img: DOH2, title:'Title2'},
    {img: DOH3, title:'Title3'}
  ]
  return (
    <>
        <NavLinks />
        <Header 
          headerTitle='DOH PROGRAMS'
        />
        <div className='w-[80%] flex justify-center items-center h-96 mt-5 mx-auto'>
          <Slider images={arrayImg} />
        </div>
    </>
  )
}

export default Homepage