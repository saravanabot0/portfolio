import {React, useEffect} from 'react';
import {
    FaUser
  } from "react-icons/fa";
import profilePicture from "../assets/picture12.jpg";
import { Link } from "react-router-dom";


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <>
    {/* home section starts */}
    <section className="home">
    <div className="image">
      <img src={profilePicture} alt="profilePicture"/>
    </div>
    <div className="content">
      <h3> Hi, I Am Saravanan </h3>
      <span> Front-end developer </span>
      <p> I have one year of experience in real-time projects. And I have done functionality and API integration in Admin panel projects. Then 
      I learned many things on myself in front-end.  </p>
      <div className="aboutMeBtn">
      <Link to="/about" className='textNone'>
      <a href="#" className="btn"> About Me <span> <FaUser className="userBtnIcon"/> </span> </a>
      </Link>
      </div>
    </div>
  </section>
  {/* home section ends */}
  </>
  )
}

export default Home