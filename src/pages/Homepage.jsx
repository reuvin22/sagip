import React from 'react';
import NavLinks from '../components/NavLinks';
import Slider from '../components/Slider';
import DOH1 from '../assets/doh1.jpg';
import DOH2 from '../assets/doh2.jpg';
import DOH3 from '../assets/doh3.jpg';
import Icons from '../components/Icons';
import Macronutrients from './Macronutrients';
import { Link } from 'react-router-dom';
import Micronutrients from './Micronutrients';

function Homepage() {
  const arrayImg = [
    { img: DOH1, title: 'Title1' },
    { img: DOH2, title: 'Title2' },
    { img: DOH3, title: 'Title3' },
  ];

  return (
    <>
      <div id="/" className="grid sm:place-items-center md:place-items-center">
        <div className='flex justify-center items-center sm:w-[80%] md:w-[80%]'>
          <Slider images={arrayImg} />
        </div>
        <div className="text-center my-4">
            <span>Description: </span>
          </div>
        <div className="w-[100%] mt-[3%] h-auto flex justify-center items-center mb-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-10 justify-center items-center mx-auto">
            <Icons 
              bgColor="bg-[#DE638A]"
              borderColor="border-[#DE638A]"
              name="Macro"
              hoverBg="hover:bg-rose-500"
              pageId="macro"
            />
            <Icons 
              bgColor="bg-orange-300"
              borderColor="border-orange-300"
              name="Micro"
              hoverBg="hover:bg-orange-500"
              pageId="micro"
            />
            <Icons 
              bgColor="bg-cyan-300"
              borderColor="border-cyan-300"
              name="Nutri Recomm"
              hoverBg="hover:bg-cyan-500"
            />
            <Icons 
              bgColor="bg-pink-300"
              borderColor="border-pink-300"
              name="Food Safety"
              hoverBg="hover:bg-pink-500"
            />
            <div className="sm:col-span-2 lg:col-span-1 gap-10"></div>
            <Icons 
              bgColor="bg-pink-300"
              borderColor="border-pink-300"
              name="Food Supplement"
              hoverBg="hover:bg-pink-500"
            />
            <Icons 
              bgColor="bg-[#F3D9E5]"
              borderColor="border-[#F3D9E5]"
              name="Download Video"
              hoverBg="hover:bg-pink-500"
            />
          </div>
        </div>
      </div>
      <Macronutrients />
      <Micronutrients />
    </>
  );
}

export default Homepage;
