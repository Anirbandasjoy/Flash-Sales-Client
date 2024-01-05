import SideMenu from "../Sidebar/SideMenu";
import Banner from "../Banner/Banner";
import { AiFillFastForward } from "react-icons/ai";
import { useState } from "react";
const Hero = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="">
      <div className="mt-2 md:hidden">
        <div onClick={() => setOpen(!open)}>
          <AiFillFastForward />
        </div>
      </div>
      <div className="flex gap-10">
        <div
          className={`pr-16 md:border-r-2 ${
            open ? "-translate-x-full md:transform-none" : ""
          } md:block md:border-gray-200 pb-10 md:pb-0 duration-700 absolute md:static bg-white z-30`}
        >
          <div className="mt-7">
            <SideMenu />
          </div>
        </div>
        <div className="flex-1 bg-[#000] text-gray-200 mt-7">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
