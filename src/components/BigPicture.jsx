 
import Movers from "../assets/Img/Movers.webp"
const BigPicture = () => {
  return (
<div>
      <>


           
   
   <div className='relative flex justify-center content-center mx-auto 
      mt-[-1.75rem] lg:mt-[0rem] '> 
     { <div id='BigPicture' className='relative scroll-mt-[-4rem]'>
         {/* Several images in one Hidden for large screens. */}

      { <div  className='Movers -scroll-mt-80 relative flex w-fit mt-[8.5rem]
        hidden md:block min-w-[240px] '>
        <img src={Movers} alt="Movers" width={645} height={322} className='MoversImg rounded-[18px]  z-5' loading="lazy" />
       </div>}
       </div>}
    </div>
    </>
</div>
     
  )
}

export default BigPicture
