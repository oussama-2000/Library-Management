import "./aboutUs.css"
import Footer from "../components/footer"

import tem from "../images/bg-splat_4.png"

export default function AboutUs(){
    return(
      <>
        <div className="aboutUs">
      
      <p>
        Welcome to <strong>Your Library</strong>, a place where knowledge meets
        innovation. Our mission is to provide a vast collection of books,
        resources, and digital materials to fuel your passion for learning.
      </p><br/>
      <h3>Our Mission</h3>
      <p>Making knowledge accessible to everyone.</p><br/>
      <h3>Our Vision</h3>
      <p>To create a community of lifelong learners.</p>
    </div>
    <>
    <img src={tem} alt="" className="temb"/>
      <Footer/>
    </>
    </>
    )
}