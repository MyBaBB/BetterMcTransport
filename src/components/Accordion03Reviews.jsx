// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Accordion03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion03Reviews = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
        <div className=' relative flex justify-center content-center w-full mx-auto   ' >
        <div onClick={toggleAccordion03Reviews} 
        className={`openMenu  relative flex justify-center items-center w-[80%] h-full  
      }`} 
    >
        <div className='Accordion03ReviewsWrapper  relative bg-gradient-to-b justify-center content-center from-[#4b5320] to-[#41301b]  
         rounded-3xl w-full  mt-2 md:mt-[-10rem]   cursor-pointer '>
        
          <div  className='flex justify-center mx-auto content-center 
          pb-[6px] pt-[4px]'>
            <button  className='text-amber-100  text-base sm:text-2xl font-extrabold '
                       style={{ textShadow: '1px 1px 2px black' }}>
             <div className='absolute left-[3px] top-[4px] sm:top-[9px] w-8  h-8  bg-gradient-to-b 
             from-amber-200 to-varDarkBrown shadow-sm  shadow-black  rounded-full pt-[7px] text-4xl ' 
             style={{ textShadow: '0px -1px 2px black' }}> <span className='triangle'></span></div>
       Reviews
            </button>
          </div>
          
          {isOpen &&
        <>

<div className='mt'>
<div   className=' flex-col justify-start content-center
 '>

<span className='ReviewsPersonName'>James West</span> <br/>
<span className='ReviewsPersonDate'>Nov. 2 1988</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;He moved My buggy from my friends swamp over to my swamp in a days notice, and my kids were back to catching Alligators right then.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Arnold Parker</span> <br/>
<span className='ReviewsPersonDate'>Sept. 14 1991</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;  I crashed my dirt bike and he had me another one delivered with no hesitation.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Marty Oneal</span> <br/>
<span className='ReviewsPersonDate'>June 19 2001</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;I had me a new Buggy in the Mud by the very next Day.  I will use Andy again for sure.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Neo </span> <br/>
<span className='ReviewsPersonDate'>Dec. 4 2023</span> <br/> 
<span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Andy is the best,  He made two trips.  I bought me a floater and  I needed and anchor for mine. He Kindly went to town for me and got one.  Thanks Andy, Maybe I will have a new Drivers License soon.  Keep on Truckin&apos;</p> 

  


  

</div>









{/* <div   className=' flex-col justify-start content-center  '>
  <span className='ReviewsPersonName'>name</span> <br/>
  <span className='ReviewsPersonDate'>date</span> <br/> 
  <span className="ReviewsPersonStarRating">⭐⭐⭐⭐⭐</span>
  <p className='ReviewsPersonParagraph'>&nbsp;&nbsp;review</p> 
  <hr className="ReviewsPersonHorizontalRule"/>
</div>
 */}
</div>
         </>
         }
       </div>
     </div>
    </div>
   </>
</div>
  );
};

export default Accordion03

