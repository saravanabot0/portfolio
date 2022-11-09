import {React, useEffect} from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBlog,
  FaAddressBook,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaRedo,
  FaCalendar,
  FaLink,
  FaMapMarkedAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section className="contact">
        <h1 className="heading"> contact  <span> me </span></h1>
        <div className="row">
          <div className="info-container">
            <h1> Get In Touch </h1>
            <p> If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my 
            email regularly, and I'll get back to you as soon as possible. </p>
            <div className="box-container">

              <div className="box">
                <i> <FaMapMarkedAlt/> </i>
                <div className="info">
                  <h3> Address </h3>
                  <p> Guduvancheri, Kancheepuram District, Chennai - 603203, Tamil Nadu, India </p>
                </div>
              </div>

              <div className="box">
                <i> <FaEnvelope/> </i>
                <div className="info">
                  <h3> Email </h3>
                  <p> Saravana0@protonmail.com </p>
                </div>
              </div>

              <div className="box">
                <i> <FaPhone/> </i>
                <div className="info">
                  <h3> Number </h3>
                  <p> +91-866-762-8833 </p>
                </div>
              </div>

            </div>

            <div className="share">
              <a href="#"> <FaFacebook className="mediaIcons"/> </a>
              <a href="#"> <FaTwitter className="mediaIcons"/> </a>
              <a href="#"> <FaInstagram className="mediaIcons"/> </a>
              <a href="#"> <FaLinkedin className="mediaIcons"/> </a>
              <a href="https://github.com/saravanabot0" target="_blank"> <FaGithub className="mediaIcons"/> </a>
            </div>

          </div>
          
          <form action="">

            <div className="inputBox">
              <input type="text" placeholder="your name"/>
              <input type="number" placeholder="your number"/>
            </div>

            <div className="inputBox">
              <input type="email" placeholder="your email"/>
              <input type="text" placeholder="your subject"/>
            </div>

            <textarea name=""  placeholder="your message" id="" cols="30" rows="10" />

            <input type="submit" value="Send Message" className="btn" />

          </form>

        </div>

      </section>
    </>
  )
}

export default Contact