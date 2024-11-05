import React from 'react'

const ContactMeButton = () => {
  return (
    <div>
       <a href="https://contact.mybabb.com">
              <button
               
                className="ContactMeButton m-auto hidden xs:flex

                  w-fit  rounded-2xl border-[1px] border-black p-2 text-3xl  bg-[#419aff] hover:scale-105 shadow-md "
              >
                <span className="ContactMeButtonText font-Itim-Regular text-blue-100 hover:text-green-400  ">
                  Contact Me
                </span>
              </button>
            </a>
    </div>
  )
}

export default ContactMeButton
