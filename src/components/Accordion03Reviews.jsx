// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { GrStarOutline } from "react-icons/gr";
const Accordion03 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion03Reviews = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div >
        <> 
        <div className=' relative flex justify-center content-center w-full mx-auto mt-8  ' >
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

<div className='mt-1'>
<div   className=' flex-col justify-start content-center
 '>

<span className='ReviewsPersonName'>James Westmore</span> <br/>
<span className='ReviewsPersonDate'>Nov. 2 2022</span> <br/> 
<span className="ReviewsPersonStarRating">
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;I recently used Andy&apos;s 4x4 Transport to move my vehicle from California to Texas, and I was extremely impressed with their service. The driver was professional, courteous, and very knowledgeable about the best routes to take. He kept me informed throughout the entire process, and I felt confident that my vehicle was in good hands..</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Arnold Parker</span> <br/>
<span className='ReviewsPersonDate'>Sept. 14 2022</span> <br/> 
<span className="ReviewsPersonStarRating">
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;The customer service representatives at Andy&apos;s 4x4 Transport were also very helpful and responsive. They answered all of my questions promptly and made sure that I had all of the information I needed to make an informed decision. They were also very patient with me when I had to change my pickup date at the last minute.</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Marty Oneal</span> <br/>
<span className='ReviewsPersonDate'>June 19 2021</span> <br/> 
<span className="ReviewsPersonStarRating">
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />  
</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;Overall, I would highly recommend Andy&apos;s 4x4 Transport to anyone who needs to transport their vehicle. They are a reliable, trustworthy, and professional company that truly cares about their customers. Thank you, Andy&apos;s 4x4 Transport, for providing such excellent service!</p> 
<hr className="ReviewsPersonHorizontalRule
"/>
<span className='ReviewsPersonName'>Neo Shoemaker</span> <br/>
<span className='ReviewsPersonDate'>Dec. 4 2023</span> <br/> 
<span className="ReviewsPersonStarRating">
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
<GrStarOutline className='text-varGold inline-block ' />
</span>
<p className='ReviewsPersonParagraph'>&nbsp;&nbsp;What a great and Honest guy,  I am glad I chose Andy.&apos;</p> 

  


  

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

