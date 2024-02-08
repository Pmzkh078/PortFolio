import React from "react";
import "./Skill.css";
import Contactme from "./Contactme";
const Skills = () => {
  return (
    <div>
      <div id="Skill" className="Skill1">
        Skills
      </div>
      <div className="Skill">
        <div className="h2">Languages</div>
        <h3>Html</h3>
        <h3>Css</h3>
        <h3>Javascript</h3>
        <div className="h2">Libraries</div>
        <h3>React</h3>
        <div className="h2">Frameworks</div>
        <h3>Bootstrap</h3>
      </div>
      <Contactme />
    </div>
  );
};
export default Skills;
