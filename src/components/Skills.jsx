import React from 'react'

import skills from "../components/data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item my-3 mx-3"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills