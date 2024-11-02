import React from "react";
import { FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skillsColumn1 = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
  ];

  const skillsColumn2 = [
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "CSS", icon: <FaReact /> },
    { name: "HTML", icon: <FaReact /> },
  ];

  return (
    <section className="skills" id="skills">
      <div className="card">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-table">
          <div className="skills-column">
            {skillsColumn1.map((skill, index) => (
              <div key={index} className="skill-boxx">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {skillsColumn2.map((skill, index) => (
              <div key={index} className="skill-boxx">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
