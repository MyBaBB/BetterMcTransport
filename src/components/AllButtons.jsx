import React from 'react'
import WheresAndy from './WheresAndy/WheresAndy'
import GoButtons from './MediaButtonsFolder/MediaButtons'
import ContactUs from './ContactUsFolder/ContactUs'
import '../../src/App.css'
const AllButtons = () => {
  return (
    <div className='allButtonsWrapper mb-2 '>

      < ContactUs />
      < GoButtons /> 
      < WheresAndy />
    </div>
  )
}

export default AllButtons
