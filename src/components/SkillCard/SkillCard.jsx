import "./SkillCard.css";

function SkillCard(props) {

  return (
    <div className="skill-card">

      <h3>{props.skill}</h3>

    </div>
  );

}

export default SkillCard;