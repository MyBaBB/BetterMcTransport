// eslint-disable-next-line no-unused-vars
import React from 'react'
import SwampBuggy from './SwampBuggy.webp'
import OctoArmy from './OctoArmy.jpg'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="headerWrapper">
            
           <div className='outerSwampBuggyWrapper hidden md:block'>
           
           <div
              className="swampBuggyWrapper">
                <div className='dataToolTip81 'data-tool-tip='To My Homepage' > 
               <div className=" relative ">
                <img
                  id="swampBuggy"
                  src={SwampBuggy}
                  alt="Helping Hands"
                  width={80}
                  height={80}
                />
              </div>
              </div>
            </div>
            </div>  
              <p
              className=" headerCenterTextBox  
         text-amber-50 w-fit   text-[.5rem] xs:text-[1rem] md:text-[1.9rem]   ">
              <h1>Andy&apos;s 4x4 ATV-Transport</h1>
            </p>

            
            <div className='outerOctoArmyWrapper'> 

           <div
              className="octoArmyWrapper hidden md:block"
            >
              <div className='dataToolTip82' data-tool-tip='To Kraken'>
              <div className=" relative">

                <img src={OctoArmy} alt="Army Octopus"
                width={80}
                height={80}
                className='rounded-full' />
              </div>
              </div>
            </div> 
            
          </div>
          </div>
    </div>
  )
}

export default Header
