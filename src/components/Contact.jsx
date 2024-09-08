import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact my-5">
        <h1>Contact Me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/shoetabadani/`1 "
            target="blank"
            className="items"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/shoeta-badani-10a2b5235/"
            target="blank"
            className="items"
          >
            <CiLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/ShoetaBadani"
            target="blank"
            className="items"
          >
            <FaGithubSquare className="icon" />
          </a>
          <a
            href="mailto:shoetakumari@gmail.com"
            target="blank"
            className="items"
          >
            <BiLogoGmail className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact