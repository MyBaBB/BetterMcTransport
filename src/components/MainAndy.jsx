// eslint-disable-next-line no-unused-vars
import React from 'react'
 import Copyright from './Copyright.jsx'
import UpperLeftIcon from "../assets/Img/upperLeftIcon.webp"
import BigPicture from './BigPicture.jsx'
import Movericon2 from "../assets/Img/Movericon2.webp"
import DavesFlag from './DavesFlag.jsx'
 import AndysDogTag from './AndysDogTag.jsx'
import GoButtons from './GoButtons.jsx'
import WheresAndy from './WheresAndy.jsx'
import Accordion01Images from './Accordion01Images.jsx'
import Accordion03Reviews from './Accordion03Reviews.jsx'
const MainHands  = () => {
  return (
    <div>
       <>

<div className='bodyWrapper'>
  <div className='HeaderWrapper'>
 
           {/* the Animation */}
         
    

    <div className='RotateWheelsWrapper     
           bg-white
       top-[-3.5rem]   xxs:-top-[3rem] xs:-top-[2.75rem] sm:-top-[2.9rem]  md:-top-[2rem] lg:-top-[2rem] xl:-top-[1.5rem]
          left-[-4.6rem] xxs:left-[-4.1rem] sm:-left-[3rem] md:-left-[2.7rem] lg:-left-[1.7rem] xl:-left-[.5rem]
        
       >
          scale-[45%] sm:scale-[55%] md:scale-[65%] lg:scale-[80%] xl:scale-[90%] '>
               <div className=' relative w-fit p-4'>
               <img id='RotateWheels' src={UpperLeftIcon } alt="Helping Hands" />
               </div>
         </div>

         





         {/* <div id='RotateWheelsWords'></div> */}

  
       {/*  the Animated  */}

           {/*  Daves Heading 1 sm: hidden  */}
       <p className=' DaveTrimmHeading1  text-amber-50 
        hidden xxs:hidden  sm:hidden md:block lg:block xl:block   
          
            md:text-[1.75rem] lg:text-[1.75rem] xl:text-[2rem]
          
          translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
           <h1>Andy&apos;s 4x4 ATV-Transport</h1>
       </p>
       
       
       {/*  DaveTrimmHeading1 sm: hidden  */}

           {/*  DaveTrimmHeading2 lg: hidden */}
         <p className=' DaveTrimmHeading2 text-amber-100    
             md:hidden lg:hidden xl:hidden   
             text-[.6rem] xxs:text-[.85rem] xs:text-[1.2rem] sm:text-[1.2rem] 
             md:text-[1.55rem] lg:text-[1.75rem] xl:text-[2rem]
             mt-[-12px] sm:mt-[-10px]
             
           translate-y-[-.90rem] xs:translate-y-[-1.2rem] lg:translate-y-[-1rem]      '>
             <h1>Andy&apos;s <br /> 4x4 ATV-Transport</h1>
       </p>  
       
       
       
       {/* Dave's Heading 2 lg: hidden  */}

            {/* Dave Icon */}
       <div className='  UpperRightLogo fixed flex w-fit
           p-1 shadow-inner  bg-transparent rounded-full  hidden md:block

               md:-top-[1rem] lg:-top-[1rem] xl:-top-[.25rem]

           right-rem sm:right-[.25rem] md:right-[-.75rem] lg:right-[1rem]  >

           scale-[40%] md:scale-[45%] lg:scale-[60%] xl:scale-[60%] '>
         <div className=' relative w-[160px]'>
               <img src={Movericon2} alt="Mover Icon" />          
        </div>
      </div>{/* Mover Icon */}

    </div>
       {/*above is the HeaderWrapper */} 
          
    <GoButtons /> 
    <WheresAndy />  
    <DavesFlag />
  
<div className='Accordian2Wrapper relative  block  px-[10px]   sm:px-[.5rem]
        mt-[.5rem]   md:mt-[1rem] text-green-50' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}> 
          
            {/* TruckSmallScreen */}
         <div className='flex justify-center content-center mb-3'>
         </div>
            <div className='AboutUsParagraphWrapper relative flex justify-center content-center mx-auto   hidden md:block'>
       <p id='AboutUsh2' className='AboutUsh2 text-[1.45rem]
           lg:text-3xl      
           ' >
       </p>
   </div>
 </div>
   <BigPicture />
   <Accordion01Images/>
   <Accordion03Reviews/>

   <AndysDogTag />
   <Copyright />
  </div>
 
  </>
</div>
  )
}

export default MainHands 



