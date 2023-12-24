/* eslint-disable no-unused-vars */
 
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail }
        from 'react-icons/ai';
import { FaCameraRetro } from "react-icons/fa";
const Sidenav = () => {
   const [nav, setNav] = useState(false)
       const handleNav = () => {
          setNav(!nav);
    };
  return (
    <div>
      <>
     <div className='outersideContainer '> 
       <AiOutlineMenu  size={50} onClick={handleNav} className='fixed top-4 sm:top-[1.5rem]  right-5 sm:right-4  z-[99] md:hidden
       
    ' style={{color:"#403121"}}  />
     {

              /* The hidden Mobile Screen  */    
      nav ? (
        <div className='hiddenMobile fixed  top-0 left-0 right-0 bottom-0 w-full h-full py-4 bg-white/90 flex flex-col justify-center items-center z-20 '>

          <a onClick={handleNav} href="#" className='w-[65%]
           mt-[5rem] md:mt-22 text-black flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}  />
            <span className='pl-4 '> Home</span>
          </a>
          <a onClick={handleNav} href=" https://www.instagram.com" className='scroll-m-10 text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <FaCameraRetro size={20}  />
            <span className='pl-4'>Instagram</span>
          </a>
          <a onClick={handleNav} href="https://facebook.com" className='scroll-m-10 text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <FaCameraRetro size={20}  />
            <span className='pl-4'>Facebook</span>
          </a>
          <a onClick={handleNav} href=" https://www.yelp.com" className='scroll-m-10 text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <FaCameraRetro size={20}  />
            <span className='pl-4'>Yelp</span>
          </a>
          <a onClick={handleNav} href="https://www.google.com/photos/about/" className='scroll-m-10 text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <FaCameraRetro size={20}  />
            <span className='pl-4'>GooglePhotos</span>
          </a>
          
          <button onClick={() => window.location.href = 'tel:559-679-9926'}  className='text-black w-[65%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}  />
            <span className='pl-4   '>Contact</span>
          </button>
        </div>

        )
        : (
        '' 
        )}
           {/*  The hidden Mobile Screen    */}


                 {/* sideButtons */}
   {/*    <div className='sideButtonsWrapper hidden md:fixed   z-10 
            
     '>
      <div className='flex flex-col '>
        <a href="#" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineHome size={20} />
        </a>
        <a href="#OurPhotos" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <FaCameraRetro size={20} />
        </a>
        <a href="#projects" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <div className='MovericonPingWrapper w-[22px]'>
          <img src={empty} alt="" />
         </div>
        </a>
        <a href="#contact" className='rounded-full text-black shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
         <AiOutlineMail size={20} />
       </a>
      </div>
     </div> */}
                 {/* sideButtons */}
    <div>

   </div>

 </div>
</> 
</div>    

          
    
        
     
  );
};

export default Sidenav;