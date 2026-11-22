import { profile } from "../data/projects";

function About() {
  return (
    <section className="section container split" id="about">
      <div className="section-head">
        <h2>Developer with a practical mindset</h2>
      </div>

      <div className="prose">
        <p>
          I trained as a Fachinformatiker für Anwendungsentwicklung and have
          hands-on experience building web applications. I like turning a messy
          requirement into a clear, working interface and finding the cause of
          a bug rather than working around it.
        </p>
        <p>
          My interests cover React, JavaScript, TypeScript, Java with Spring
          Boot, PHP, Python and relational databases. I care about clean code,
          working well in a team and learning something new on every project.
        </p>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn ghost">
          See my code on GitHub
        </a>
      </div>
    </section>
  );
}

export default About;
