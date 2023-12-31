import SideMenu from "../Sidebar/SideMenu";

const Banner = () => {
  return (
    <div className="">
      <div className="flex gap-10">
        <div className=" pr-16 border-r-2 border-gray-200">
          <div className="mt-7">
            <SideMenu />
          </div>
        </div>
        <div className="flex-1 bg-red-400 mt-7">
          <h1>Banner</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
