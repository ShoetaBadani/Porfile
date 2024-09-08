import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Upd_resume.pdf'; // Example PDF in src directory
import imageData from '../components/data/hero.json'; // Importing JSON data
import Typed from 'typed.js';

const Home = () => {
  const imageUrl = `/assets/${imageData.imgSrc}`;
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings: ["welcome to my Profile", "My name is Shoeta Badani", "I am Web Developer"],
      typedSpeed: 50,
      backSpeed: 50,
      loop:true
    }
    const typed = new Typed(typedRef.current , options)
        
    return () => {
      typed.destroy()
    } 
  }, [])

  return (
    <div className="container home">
      <div
        className="left"
        data-aos="fadeup-right"
        data-aos-duration="1000"
      >
        <h1 ref={typedRef}></h1>
        <a
          href={pdf}
          download="Resume.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1"
        >
          <img src={imageUrl} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;
