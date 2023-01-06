import React from "react";
import { clients } from "../lib/Index";
import { clientCompClass, imgDivClass } from "../lib/classes";

import PinkPatch from "../../Components/HomePage/PinkPatch";

const Client = () => {
  return (
    <>
      <div className={`${clientCompClass},  bg-[url('/Images/clientsbg.png')] bg-contain bg-no-repeat mb-[101px] ` }    >
        <div>
          <p className="text-3xl font-extrabold text-[#18256D] mb-[70px]">
            Our Clients
          </p>
        </div>
        <div className="grid grid-cols-6 items-center justify-center gap-5 overflow-hidden bg-[white] pb-[6px]">
          {clients.map((item) => (
            <div className={imgDivClass}>
              <img src={item.img} alt="" className="w-20" item={item} />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="border-2 border-[#C81E30] p-2 w-32">
            See More
          </button>
        </div>
      </div>
      <div className="max-w-full mb-[143px]">

     <PinkPatch />
      </div>
    </>
  );
};


export default Client
