import "./contactUs.css"
import Footer from "../components/footer"
import tem from "../images/bg-splat_4.png"

export default function ContactUs(){
    return(
      <>
        <div className="contactUs">
      <h1>Contact Us</h1>
      <p>Have questions? Reach out to us!</p>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Library Street, City</p>
        <p><strong>Phone:</strong>  (212) 616646869</p>
        <p><strong>Email:</strong>  contact@yourlibrary.com</p>
        <p><strong>Hours:</strong>  Mon - Fri: 9 AM - 6 PM</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <>
    <img src={tem} alt="" className="temc"/>
      <Footer/>
    </>
      </>
    
    )
}
