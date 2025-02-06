import "./footer.css";
import { Link } from "react-router-dom";

import beams from "../images/beams.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <div className="leftSide">
          <div className="links">
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
          </div>
          <div className="socialMedia">
            <a href="https://www.facebook.com" target="__blank">
              Facebook
            </a>
            <a href="https://www.youtube.com" target="__blank">
              Youtube
            </a>
            <a href="https://www.instagram.com" target="__blank">
              Instagram
            </a>
            <a href="https://www.twitter.com" target="__blank">
              Twitter
            </a>
            <a href="https://www.linkedin.com" target="__blank">
              linkedin
            </a>
            <a href="https://www.github.com" target="__blank">
              Github
            </a>
          </div>
        </div>
        <div className="wipeWrapper">
          <div id="tower"></div>
          <img src={beams} alt="" id="beams" />
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Amkhou Oussama.
      </div>
    </div>
  );
}
