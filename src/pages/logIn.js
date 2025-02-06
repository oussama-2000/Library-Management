import "./logIn.css";
import { useState } from "react";
import logout from "../images/out.png";
import tem from "../images/bg-splat_4.png";

import Footer from "../components/footer";

export default function LogIn() {
  const [logIn, setLogIn] = useState(true);
  const [Fname, setFname] = useState("");
  const [submited, setSubmited] = useState(false);

  const submit = () => {
    Fname ? setSubmited(true) : setSubmited(false);
  };

  const logOut = () => {
    setSubmited(false);
  };

  return (
    <>
      <div className="logIn">
        {!submited ? (
          logIn ? (
            <form className="logInForm" style={{ zIndex: 1 }}>
              <div className="flex-column">
                <label>Email</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Email"
                  className="input"
                  type="email"
                />
              </div>

              <div className="flex-column">
                <label>Password</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Password"
                  className="input"
                  type="password"
                />
              </div>

              <div className="flex-row">
                <div>
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <span className="span">Forgot password?</span>
              </div>

              <button className="button-submit">Sign In</button>

              <p className="p">
                Don't have an account?{" "}
                <span
                  className="span"
                  onClick={() => {
                    setLogIn(false);
                  }}
                >
                  Sign Up
                </span>
              </p>

              <p className="p line">Or With</p>

              <div className="flex-row">
                <button className="btn google">Google</button>
                <button className="btn apple">Apple</button>
              </div>
            </form>
          ) : (
            <form className="signUpForm" style={{ zIndex: 1 }}>
              <div className="flex-column">
                <label>Full Name</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Full Name"
                  className="input"
                  type="text"
                  value={Fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                />
              </div>

              <div className="flex-column">
                <label>Email</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Email"
                  className="input"
                  type="email"
                />
              </div>

              <div className="flex-column">
                <label>Password</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Enter your Password"
                  className="input"
                  type="password"
                />
              </div>

              <div className="flex-column">
                <label>Confirm Password</label>
              </div>
              <div className="inputForm">
                <input
                  placeholder="Confirm your Password"
                  className="input"
                  type="password"
                />
              </div>

              <div className="flex-row">
                <div>
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms" className="agree">
                    I agree to the Terms & Conditions
                  </label>
                </div>
              </div>

              <button className="button-submit" onClick={submit}>
                Sign Up
              </button>

              <p className="p">
                Already have an account?{" "}
                <span
                  className="span"
                  onClick={() => {
                    setLogIn(true);
                  }}
                >
                  Sign In
                </span>
              </p>
            </form>
          )
        ) : (
          <div>
            <h1 className="message">
              Welcome <span>{Fname}</span>
            </h1>
            <button class="Btn" onClick={logOut}>
              <div class="sign">
                <img src={logout} alt="logout" width={"30px"} />
              </div>
              <div class="text">Logout</div>
            </button>
          </div>
        )}
      </div>
      <>
        <img src={tem} alt="" className="temg" />
        <Footer />
      </>
    </>
  );
}
