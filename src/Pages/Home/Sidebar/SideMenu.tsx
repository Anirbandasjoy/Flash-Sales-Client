import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <div className="list-none space-y-3">
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Woman’s Fashion</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Men’s Fashion</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Electronics</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Home & Lifestyle</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Medicine</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Sports & Outdoor</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Groceries & Pets</Link>
        </li>
        <li className="font-semibold">
          <Link to="/Womans-Fashion">Health & Beauty</Link>
        </li>
      </div>
    </div>
  );
};

export default SideMenu;
