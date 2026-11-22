import { categories, projects } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <h2>Selected projects</h2>
        <p>
          Applications I built, grouped by technology. Each one has its source
          code on GitHub, and most have a live demo.
        </p>
      </div>

      {categories.map((category, index) => (
        <ProjectCarousel
          key={category.id}
          category={category}
          number={index + 1}
          items={projects.filter((p) => p.categories.includes(category.id))}
        />
      ))}
    </section>
  );
}

export default Projects;
