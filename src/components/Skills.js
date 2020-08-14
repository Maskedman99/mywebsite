import React from 'react';

import '../css/Skills.css';

const Skills = ({skills}) => {
  return (
    <div className="Skills-Container">
      {skills.map(item => (
        <div className="Skills-Skill">{item}</div>
      ))}
    </div>
  );
};

export default Skills;
