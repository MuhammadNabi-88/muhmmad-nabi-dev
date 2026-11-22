const groups = [
  ["Front-end", ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"]],
  ["Styling", ["Tailwind CSS", "Responsive design"]],
  ["Back-end", ["Java", "Spring Boot", "Python", "PHP"]],
  ["Databases", ["MySQL", "PostgreSQL", "JPA / Hibernate"]],
  ["APIs", ["REST APIs", "API integration"]],
  ["Tools", ["Git", "GitHub", "Docker", "Maven", "IntelliJ IDEA"]]
];

function Skills() {
  return (
    <section className="section container split" id="expertise">
      <div className="section-head">
        <h2>Technical expertise</h2>
      </div>

      <dl className="skills">
        {groups.map(([name, items]) => (
          <div key={name}>
            <dt>{name}</dt>
            <dd>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default Skills;
