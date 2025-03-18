import { Outlet, Link } from "react-router-dom";
import SearchBook from "./searchBook";
import "./layout.css";
import "./layoutMobile.css";
import mainIcon from "../images/mainIcon.jpeg";
import userIcon from "../images/login-icon.ico";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [open, isOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    isOpen(false)
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <nav>
        <ul>
          <li className="homeIcon">
            <Link className="link" to="/">
              <div>Home</div>
              <div>
                <img className="mainIcon" src={mainIcon} alt="icon" />
              </div>
            </Link>
          </li>
          <div className="menuBar-mobile">
            <input type="checkbox" id="checkbox" checked={open}/>
            <label
              htmlFor="checkbox"
              className="toggle"
               onClick={()=>isOpen(!open)}
            >
              <div className="bars" id="bar1" />
              <div className="bars" id="bar2" />
              <div className="bars" id="bar3" />
            </label>
          </div>

          <li>
            <Link to="/addbooks">Share My Book</Link>
          </li>
          <li>
            <Link to="/mybooks">My List</Link>
          </li>
          <li>
            <Link to="/login"> Account</Link>
          </li>
        </ul>
      </nav>


      <div className={`nav-mobile ${open ? "show-nav-mobile" : "nav-mobile"}`}>
        <div className="profile-mobile" >
          <Link to="/login">
            <img src={userIcon} alt="account" width={"60px"} title="Account" />
            <div>Sign In</div>
          </Link>
        </div>
        <h1>Your Library</h1>
        <div className="hr"></div>
        <div className="links-mobile">
          <Link to="/addbooks"  >
            <li>Share My Book</li>
          </Link>
          <Link to="/mybooks"  >
            <li>My List</li>
          </Link>
          <Link to="/contactus"  >
            <li>Contact Us</li>
          </Link>
          <Link to="/aboutUs"  >
            <li>About Us</li>
          </Link>
        </div>

        {open ? <SearchBook /> : null}
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
