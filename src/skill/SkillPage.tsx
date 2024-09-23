import { useState } from "react";
import "./Skill.css";
import { mockUpSkills } from "../data/MockUpSkills";

const SkillPage = () => {
  const [data] = useState(mockUpSkills);

  return (
    <div className="container-skills">
      <div className="wrap-container-skills">
        <h1>Skills</h1>
        <div className="line"></div>
        <div className="grid-card">
          {data.map((item, index) => {
            return (
              <div className="wrap-grid-card" key={index}>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
