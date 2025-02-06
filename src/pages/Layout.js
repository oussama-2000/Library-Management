import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import mainIcon from "../images/mainIcon.jpeg";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              <div>Home</div>
              <div>
                <img className="mainIcon" src={mainIcon} alt="icon" />
              </div>
            </Link>
          </li>
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

      <Outlet />
    </>
  );
};

export default Layout;
