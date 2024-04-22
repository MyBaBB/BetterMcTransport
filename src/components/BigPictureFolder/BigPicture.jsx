import Movers from "./Movers.jpg";
const BigPicture = () => {
  return (
    <div>
      <>
        <div
          className="relative  mx-auto hidden md:flex   content-center 
      justify-center    "
        >
          {
            <div id="BigPicture" className="relative  ">
              {/* Several images in one Hidden for large screens. */}

              {
                <div
                  className="Movers relative mt-4 flex  w-fit
        min-w-[240px] md:block "
                >
                  <img
                    src={Movers}
                    alt="Movers"
                    width={645}
                    height={322}
                    className="MoversImg z-5  rounded-[18px]"
                    loading="lazy"
                  />
                </div>
              }
            </div>
          }
        </div>
      </>
    </div>
  );
};

export default BigPicture;
