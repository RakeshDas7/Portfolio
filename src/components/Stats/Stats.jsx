import "./Stats.css";

function Stats() {

  const stats = [
    {
      title: "React",
      subtitle: "Learning"
    },
    {
      title: "Java",
      subtitle: "Backend"
    },
    {
      title: "Projects",
      subtitle: "Building"
    },
    {
      title: "GitHub",
      subtitle: "Growing"
    }
  ];

  return (

    <section className="stats">

      {stats.map((item) => (

        <div
          className="stat-card"
          key={item.title}
        >

          <h3>{item.title}</h3>

          <p>{item.subtitle}</p>

        </div>

      ))}

    </section>

  );
}

export default Stats;