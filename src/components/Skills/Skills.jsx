import "./Skills.css";
import SkillCard from "../SkillCard/SkillCard";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot"]
    },
    {
      title: "Database",
      skills: ["MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">

        {skillCategories.map((category) => (

          <div
            className="skill-category"
            key={category.title}
          >

            <h3>{category.title}</h3>

            <div className="category-skills">

              {category.skills.map((skill) => (

                <SkillCard
                  key={skill}
                  skill={skill}
                />

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;