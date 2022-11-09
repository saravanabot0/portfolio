import {React, useEffect} from 'react';
import {
  FaDownload,
  FaGraduationCap,
  FaLaptopCode
} from "react-icons/fa";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import reactIcon from "../assets/react.png";
import sassIcon from "../assets/sass.png";
import javascriptIcon from "../assets/javascript.png";
import bootstrapIcon from "../assets/bootstrap.png";
import resume from "../assets/resume.pdf"; 

function About() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <>
    <section className="about">
    <h1 className="heading">
      {" "}
      about <span> me </span>{" "}
    </h1>
    <div className="row">
      <div className="info-container">
        <h1> personal info </h1>
        <div className="box-container">
          <div className="box">
            <h3> <span> Name : </span>  Saravanan </h3>
            <h3> <span> Age : </span> 23 </h3>
            <h3> <span> Email : </span> Saravana0@pm.me </h3>
            <h3>
              {" "}
              <span> Address : </span>
               Guduvancheri, Kanchipuram District, Chennai - 603203{" "}
            </h3>
          </div>
          <div className="box">
            <h3> <span> Freelance : </span> Available </h3>
            <h3> <span> Skill : </span> Front-End Developer </h3>
            <h3> <span> Experience : </span> 1 Year </h3>
            <h3> <span> Language : </span> Tamil, English </h3>
          </div>
        </div>
        <div className="aboutMeBtn">
          <a href={resume} download="saravananResume" target='_blank'  className="btnAbout" >
            {" "}
            Download CV{" "}
            <span>
              {" "}
              <FaDownload className="downloadBtnIcon" />{" "}
            </span>{" "}
          </a>
        </div>
      </div>
      <div className="count-container">
        <div className="box">
          <h3> 1 </h3>
          <p> Year Of Experience </p>
        </div>

        <div className="box">
          <h3> 2 </h3>
          <p> Months Of Internship </p>
        </div>

        <div className="box">
          <h3> 20+ </h3>
          <p> Projects Completed </p>
        </div>

        
      </div>
    </div>
  </section>

  <section className="skills">
        <h1 className="heading"> <span> My </span> Skills </h1>
        <div className="box-container">
          <div className="box">
            <img src={htmlIcon} alt="htmlIcon"/>
            <h3> html </h3>
          </div>
          <div className="box">
            <img src={cssIcon} alt="cssIcon"/>
            <h3> css </h3>
          </div>
          <div className="box">
            <img src={javascriptIcon} alt="javascriptIcon"/>
            <h3> javascript </h3>
          </div>
          <div className="box">
            <img src={bootstrapIcon} alt="bootstrapIcon"/>
            <h3> bootstrap </h3>
          </div>
          <div className="box">
            <img src={reactIcon} alt="reactIcon"/>
            <h3> React </h3>
          </div>
          <div className="box">
            <img src={sassIcon} alt="htmlIcon"/>
            <h3> sass </h3>
          </div>

        </div>
      </section>

      <section className="education">
        <h1 className="heading"><span> my </span> education </h1>
        <div className="box-container"> 
          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Mar 2014 - Apr 2017 </span>
            <h3> Higher Secondary 12TH </h3>
            <p> I scored 65% on the higher secondary board exam. And I am very much interested in electronics and computers, so I have 
              taken the b.sc computer degree at College. </p>
          </div>

          <div className="box">
            <i> <FaGraduationCap/> </i>
            <span> Mar 2018 - Apr 2021 </span>
            <h3> B.sc Computer Science </h3>
            <p> I completed my B.Sc computer science degree with 8.10 CGPA in Dr. M.G.R. Educational And Research Institute University, Maduravoyal, Chennai, 
              Tamil Nadu, India.</p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span> Aug 2021 - Sep 2021 </span>
            <h3> Front-End Developer (Trainee) </h3>
            <p> I designed some front-end templates. And I worked with CSS and Bootstrap for designing UI. Then I am also worked in front-end frameworks like 
              React Js. I have done some API integration in small projects </p>
          </div>

          <div className="box">
            <i> <FaLaptopCode/> </i>
            <span>Oct 2021 - Oct 2022 </span>
            <h3> Front-End Associate (Employee) </h3>
            <p> I worked on real-time projects. Projects like User Diet Panel and is controlled by Admin Panel. Than, I worked 
              on all my projects in the GitLab environment. I have done functionality and API integration in Admin Panel Projects. In real-time projects, 
              I worked in some npm packages like React-Router, Bootstrap, React-Icons, Sass and React-Player, etc... </p>
          </div>

        </div>

      </section>
  </>
  )
}

export default About