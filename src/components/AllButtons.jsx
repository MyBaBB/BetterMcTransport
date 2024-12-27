import React from 'react'
import WheresAndy from './WheresAndy/WheresAndy'
import GoButtons from './MediaButtonsFolder/MediaButtons'
import ContactUs from './ContactUsFolder/ContactUs'

const AllButtons = () => {
  return (
    <div>
      < ContactUs />
      < GoButtons /> 
      < WheresAndy />
    </div>
  )
}

export default AllButtons
