 
import { TbScubaMask } from "react-icons/tb";
import './ScubaMask.css' 
const ScubaMask = () => {
  return (
    <div>

          {/* xxxxxxxxxxxxxxxxxxxxxxxxxx Scuba Mask to Bottom xxxxxxxxxxxxxxxxxxxxxxx */}
        
            <div
             
              className="absolute top-[9.5rem] -left-[11rem]   text-varLIGHTBLUEFEATHER hover:text-varLIGHTWING
                  "
            >
                
              <div
                className="dataToolTip3 z-50 Libre_Baskerville"
                data-tool-tip="To The Bottom"
              >
                <a href="#bottomOfPage"> 
                <div
                  className="inline-block rounded-xl  
                             border-[1px] z-50 border-varLIGHTBLUEFEATHER"
                >
                   
                  <div className="rounded-xl   border-[1px]  border-black">
                    <div
                      className="rounded-xl  border-[1px]  border-varLIGHTBLUEFEATHER
                                 p-2 hover:bg-black xxs:bg-gray-700"
                    >
                      <span className="NavbarTitle4">
                        <div>
                          
                          <TbScubaMask
                            size={20}
                            className="z-[150] text-blue-200  "
                          />
                         
                        </div>
                      </span>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
             
            </div>
          
           
          {/* xxxxxxxxxxxxx  Scuba Mask to Bottom xxxxxxxxxxxxx */}
    </div>
  );
};

export default ScubaMask;
