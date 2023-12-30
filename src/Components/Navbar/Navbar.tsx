import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
const Navbar = () => {
  const navitems = (
    <>
      <li>
        <Link className="rounded-sm" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="rounded-sm" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="rounded-sm" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="rounded-sm" to="/signUp">
          Sign Up
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar px-0 mx-0 bg-base-300">
        <div className="mx-auto ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52"
            >
              {navitems}
            </ul>
          </div>
          <div className="bg-red-400">
            <a className="text-lg font-semibold">Exclusive</a>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-6 items-center">
            <IoIosHeartEmpty size={25} className="cursor-pointer" />
            <BsCart size={25} className="cursor-pointer" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
