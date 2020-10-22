import '../css/Skills.css';

const Skills = ({skills}) => {
  return (
    <div className="Skills-Container">
      {skills.map(item => (
        <div key={item} className="Skills-Skill">{item}</div>
      ))}
    </div>
  );
};

export default Skills;
