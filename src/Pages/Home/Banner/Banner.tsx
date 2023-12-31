import SideMenu from "../Sidebar/SideMenu";

const Banner = () => {
  return (
    <div className="mt-7">
      <div className="flex gap-6">
        <div className="">
          <SideMenu />
        </div>
        <div className="flex-1 bg-red-400">
          <h1>Banner</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
