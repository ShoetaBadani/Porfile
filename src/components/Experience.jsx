import React from 'react'
import experience from '../components/data/experience.json';

const Experience = () => {
  return (
    <>
      <div className="container ex">
        <h1>Experience</h1>
        {/* this is for including the multi[le experiences in the portfolio  we are using the map functon to display the experience line to line] */}
        {
          experience.map((data) => {
           return (
             <>
               <div
                 key={data.id}
                 className="ex-items text-center my-5"
                 data-aos="zoom-in"
                 data-aos-duration="1"
               >
                 {/* Left side - Image */}
                 <div className="left">
                   <img
                     src={`/assets/${data.imageSrc}`}
                     alt={`${data.role} at ${data.location}`}
                   />
                 </div>

                 {/* Right side - Text */}
                 <div className="right">
                   <h2>{data.role}</h2>
                   <h4>
                     <span style={{ color: "yellowgreen" }}>
                       {data.startDate} to {data.endDate}
                     </span>{" "}
                     <span style={{ color: "yellow" }}>{data.location}</span>
                   </h4>
                   <h5 style={{ color: "yellowgreen" }}>
                     {data.experiences[0]}
                   </h5>
                   <h5 style={{ color: "yellowgreen" }}>
                     {data.experiences[1]}
                   </h5>
                 </div>
               </div>
             </>
           );
          })
        }
    </div>
    </>
  )
}

export default Experience