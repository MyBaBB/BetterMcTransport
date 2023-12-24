// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
 

 import AndysRig1 from "../assets/Img/AndysRig1.webp"
 import AndysRig2 from "../assets/Img/AndysRig2.webp"
 import AndysRig3 from "../assets/Img/AndysRig3.webp"
 import AndysRig4 from "../assets/Img/AndysRig4.webp"
 import AndysRig5 from "../assets/Img/AndysRig5.webp"
 
 
 







const Accordion01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion01Images = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className='content-center w-full mx-auto'>
        <>
        
      <div onClick={toggleAccordion01Images} 
        className={`openMenu relative flex justify-center items-center
         mx-auto w-[80%] h-full mt-[8.5rem] 
      }`}
    >
        <div className='OurPhotosAccordion1  relative  justify-center content-center mx-auto md:hidden bg-gradient-to-b from-[#4b5320] to-[#41301b]  rounded-3xl w-full  cursor-pointer'>
        
          <div  className='relative flex justify-center content-center mx-auto '>
            <button  className='text-amber-100  text-base sm:text-2xl  font-extrabold'
                       style={{ textShadow: '1px 1px 2px black' }}>
            <div className='absolute left-[-5px]  top-[-4px] sm:top-[0px]    w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}>
               <span className='triangle'></span></div>
 Photos  
            </button>
          </div>
          {isOpen &&
            <>
            <div   className=' flex justify-center content-center  '>
            <div className='MoversSmallScreen  md:hidden relative flex w-fit mt-[.25rem] block'>
              <img src={AndysRig1} alt="AndysRig1" width={480} height={480} className=' rounded-[18px] z-1'
                    loading="lazy" />
            </div>
          </div>

            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]
                 block'>
                <img src={AndysRig2} alt="AndysRig2" width={480} height={480}  className=' rounded-[18px] z-1' 
                    loading="lazy"/>
              </div>
            </div>

            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={AndysRig3} alt="AndysRig3" width={480} height={480}   className=' rounded-[18px] z-1'loading="lazy" />
              </div>
            </div>
            
            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem] block'>
                <img src={AndysRig4} alt="AndysRig4"
                width={480} height={480}   className=' rounded-[18px]  z-1'loading="lazy" />
              </div>
            </div>
            
            <div className='flex justify-center content-center'>
              <div className='MoversSmallScreen md:hidden relative flex w-fit mt-[1.5rem]  block'>
                <img src={AndysRig5} alt="AndysRig5" width={480} height={480} 
                 className=' rounded-[18px] z-1'loading="lazy" />
              </div>
            </div>
  
   </>
            
            
            }
        </div>
      </div>
      
      </>
      </div>
  );
};

export default Accordion01

