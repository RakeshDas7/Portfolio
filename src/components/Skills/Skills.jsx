import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

function Skills() {

  const skills = [
    "React",
    "Java",
    "Spring Boot",
    "MySQL",
    "Git"
  ];

  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <SkillCard
            key={skill}
            skill={skill}
          />
        ))}

      </div>

    </section>
  );
}

export default Skills;