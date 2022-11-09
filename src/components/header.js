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
    FaLinkedin
  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <nav className="navbar cursorPointer">
            <Link to="/" className='navBarLink'>
          <a>
            {" "}
            <i>
              {" "}
              <FaHome />{" "}
            </i>{" "}
            <span> Home </span>{" "}
          </a>
          </Link>
          <Link to="/about" className='navBarLink'>
          <a>
            {" "}
            <i>
              {" "}
              <FaUser />{" "}
            </i>{" "}
            <span> About </span>{" "}
          </a>
          </Link>
          <Link to="/portfolio" className='navBarLink'>
          <a>
            {" "}
            <i>
              {" "}
              <FaBriefcase />{" "}
            </i>{" "}
            <span> Portfolio </span>{" "}
          </a>
          </Link>
          <Link to="/blog" className='navBarLink'>
          <a>
            {" "}
            <i>
              {" "}
              <FaBlog />{" "}
            </i>{" "}
            <span> Blogs </span>{" "}
          </a>
          </Link>
          <Link to="/contact" className='navBarLink'>
          <a>
            {" "}
            <i>
              {" "}
              <FaAddressBook />{" "}
            </i>{" "}
            <span> Contact </span>{" "}
          </a>
          </Link>
        </nav>
      </div>
  )
}

export default Header