import { Outlet } from "react-router-dom";
import TopNavbar from "../Components/Navbar/TopNavbar";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <TopNavbar />
      <div className="max-w-screen-xl mx-auto px-2 sm:px-0">
        <Navbar />
        {<Outlet />}
      </div>
    </div>
  );
};

export default MainLayout;
