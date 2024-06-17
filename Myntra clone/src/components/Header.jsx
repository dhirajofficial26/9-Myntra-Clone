import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Header = () => {
  const bagItemIds = useSelector((store) => store.BagItemList);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
          <button className="material-symbols-outlined search_icon search">
            search
          </button>
        </div>
        <div className="action_bar">
          <div className="action_container">
            <CgProfile />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to={"/Bagitems"}>
            <FaShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItemIds.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
};
