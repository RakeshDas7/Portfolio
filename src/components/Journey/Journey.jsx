import "./Journey.css";

function Journey() {

  const milestones = [
    {
      year: "2025",
      title: "Started Web Development",
      description:
        "Began learning HTML, CSS and JavaScript."
    },
    {
      year: "2026",
      title: "Learning React & Java",
      description:
        "Building frontend and backend development skills."
    },
    {
      year: "Current",
      title: "Building Portfolio & Projects",
      description:
        "Creating projects and strengthening problem-solving skills."
    },
    {
      year: "Future",
      title: "Java Backend Developer",
      description:
        "Working toward becoming a professional software developer."
    }
  ];

  return (
    <section id="journey" className="journey">

      <h2>Learning Journey</h2>

      <div className="timeline">

        {milestones.map((item) => (
          <div
            className="timeline-item"
            key={item.year}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Journey;