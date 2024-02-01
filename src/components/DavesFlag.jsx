// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
 import AndysTruck from "../assets/Img/AndysTruck.webp"
 import VeteranLogo from "../assets/Img/VeteranLogo.webp"

 


const Instagram = () => {
  return (
    <div>
      <>
     
        <div
          className="DavesNewCard border-[3px] border-red-950 rounded-2xl relative flex-row justify-center m-auto
          w-fit 
          top-[6rem] md:top-[6rem] lg:top-[7.75rem] xl:top-[8.75rem] "
          style={{ aspectRatio: '1.75/1' }}  >
            
          <article className='RedFlagDiv rounded-t-xl m-auto'
           style={{ height: '33.33%', backgroundImage: 'linear-gradient(to bottom, rgba(250, 0, 0, 1) 90% , rgba(250, 250, 250, .9))', }} >

           <h2 className='RedTopWords
           text-[12px] xxs:text-[16px] xs:text-[20px] sm:text-[25px] md:text-[30px]  lg:text-[30px] xl:text-[37px]
           
           '><span className='whitespace-nowrap'>Transporting Motorcycles to </span><br /><span className='whitespace-nowrap'>Louisiana, Mississippi, Florida, Texas</span>
           </h2>
          </article>
 
 
        
          <article>
      <div className='WhiteFlagDiv relative flex justify-center items-center m-auto'
          style={{ height: '33.33%', backgroundColor: 'white' }}>
        <div className='relative block'>
                <img src={AndysTruck} alt="DavesBlankVan2" className=' scale-[130%] pl-[5rem] rotate-[-3deg]
                mb-[-1rem] xs:mb-[-1.55rem] sm:mb-[-1.55rem] md:mb-[-2.2rem] lg:mb-[-2.2rem] lg:mb-[-2rem] 
                mt-[-.7rem] xxs:mt-[-.75rem] xs:mt-[-.75rem] sm:mt-[-1.3rem] md:mt-[-1.55rem] lg:mt-[-1.55rem] xl:mt-[-1.7rem]'
                  /> 
                <div className='VanWords
                text-[16px] xxs:text-[20px] xs:text-[30px] sm:text-[30px] md:text-[50px]  lg:text-[53px] xl:text-[58px]  
                '><h2>4X4 ATV-Transport</h2>
                </div>
          </div>
      </div>
      </article>

          <article className='BlueFlagDiv relative flex block align-baseline   rounded-b-xl m-auto'
           style={{ height: '33.33%', backgroundImage: 'linear-gradient(to top, rgba(0, 0, 250, 1) 90% , rgba(250, 250, 250, .9))' }}>
                   
              <img src={VeteranLogo} alt="VeteranLogo" className='relative inline-block' />
           
            <div className='BlueBottomWords pt-4 ' >
              <h2 className='
                 mt-[-.1rem] xxs:mt-[0rem] xs:mt-[0rem] sm:mt-[.25rem] md:mt-[.5rem] lg:mt-[.5rem] xl:mt-[.5rem ]
                 text-[8px] xxs:text-[12px] xs:text-[20px] sm:text-[24px] md:text-[30px] lg:text-[30px] xl:text-[37px]
              '><span className='whitespace-nowrap'> We Move Power-Sports </span><br /><span className='whitespace-nowrap'>  To Your Location</span> </h2>
            </div>
            <div className='MilitaryDiscounts relative flex items-center text-amber-100  p-2 w-fit
            

            text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]}
             '>
              <p>Military <br /> Discounts <br /> Available</p>
            </div>
          </article>


        </div>
       
      </>
    </div>
  )
}


    


export default Instagram
