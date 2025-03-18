import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "./homeMobile.css"

import BookList from "../components/BookList";
import SearchBook from "./searchBook";
import Footer from "../components/footer";
import tem from "../images/bg-splat_4.png";

const Home = () => {
  //========== set typing animation event to repeat when document reloading ===========
  window.addEventListener("load", () => {
    const text = document.querySelector(".txt");
    text.style.animation = "none";
    setTimeout(() => {
      text.style.animation =
        "typing 4s steps(30, end) forwards, cursor 0.8s step-end infinite alternate";
    }, 10);
  });
  //===================================================================================
  return (
    <>
    <h1 className="txt-mobile">Welcome to Your Library ; A World of Knowledge</h1>
      <section className="homeMainSection">
        <section className="section1">
          <div className="slideMessage">
            <div>
              <p className="txt">
                Welcome to Your Library ; A World of Knowledge
              </p>
            </div>
            <div>Discover, Borrow, and Learn</div>
            <div>
              Explore our vast collection of books across genres, borrow them
              with ease, and dive into the world of endless knowledge.
            </div>
            <div>Sign up now and start exploring!</div>

            <Link to="/login">
              <div class="b-container">
                <a className="buttonn type--C">
                  <div className="button__line"></div>
                  <div className="button__line"></div>
                  <span className="button__text">JOIN</span>
                  <div className="button__drow1"></div>
                  <div className="button__drow2"></div>
                </a>
              </div>
            </Link>
          </div>

          <SearchBook />
          <BookList />
          <div className="footer">
            <img src={tem} alt="" className="temh" />
            <Footer />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
