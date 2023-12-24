// eslint-disable-next-line no-unused-vars
import React from 'react'

const WheresAndy = () => {
  return (
  <div>
    <div className='WheresAndyWrapper relative flex justify-center p-4 w-full h-fit  z-[3]
     top-[2rem] xxs:top-[3.2rem] xs:top-[4.65rem] sm:top-[5.5rem]  md:top-[5.89rem] lg:top-[7.15rem] xl:top-[9rem]
     text-[8px] xxs:text-[10px] xs:text-[16px] sm:text-[20px] md:text-[18px] lg:text-[25px] xl:text-[26px]
     '> 

      <a href="https://support.google.com/maps/answer/7326816?hl=en&co=GENIE.Platform%3DAndroid">    
          <div className=' whitespace-nowrap'>
              <p className='WheresAndy mr-1 '>
                <span className='Radar inline-block transform -scale-x-100'>📡</span>&nbsp;  
                <span className='Radar'></span>Find
                Andy<span className='Radar '>📡</span></p>
          </div>
      </a>
   

     <button onClick={() => window.location.href = 'tel:559-555-5555'}>
            <div className=' whitespace-nowrap '>
                <p className='WheresAndy
                        
                 ml-4   '>
                 <span className='Radar inline-block transform -scale-x-100'>📞</span>&nbsp;  
                 <span className='Radar'></span>Call 
                  Andy<span className='Radar '>📞</span></p>
            </div>
      </button>
        
       </div>
  </div>
  )
}

export default WheresAndy
