import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

function Skills() {

  return (

    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        <SkillCard skill="React" />

        <SkillCard skill="Java" />

        <SkillCard skill="Spring Boot" />

        <SkillCard skill="MySQL" />

        <SkillCard skill="Git" />

      </div>

    </section>

  );

}

export default Skills;