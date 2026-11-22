const entries = [
  {
    period: "03/2023 – 08/2023",
    title: "Internship, Application Development",
    place: "enisyst GmbH, Reutlingen",
    text: "React and TypeScript front-end work, UI implementation and REST API integration."
  },
  {
    period: "09/2021 – 08/2023",
    title: "Fachinformatiker für Anwendungsentwicklung",
    place: "GFN GmbH, Stuttgart",
    text: "Training in software development, databases and web technologies."
  }
];

function Experience() {
  return (
    <section className="section container split" id="experience">
      <div className="section-head">
        <h2>Professional experience</h2>
      </div>

      <ol className="timeline">
        {entries.map((entry) => (
          <li key={entry.title}>
            <time>{entry.period}</time>
            <h3>{entry.title}</h3>
            <p className="place">{entry.place}</p>
            <p>{entry.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
