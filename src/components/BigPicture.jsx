import Movers from "../assets/Img/Movers.webp";
const BigPicture = () => {
  return (
    <div>
      <>
        <div
          className="relative mx-auto mt-[-1.75rem] flex content-center 
      justify-center lg:mt-[0rem]  "
        >
          {
            <div id="BigPicture" className="relative scroll-mt-[-4rem]">
              {/* Several images in one Hidden for large screens. */}

              {
                <div
                  className="Movers relative mt-[8.5rem] flex  w-fit
        min-w-[240px] -scroll-mt-80 md:block "
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
