import ProjectPreview from "./ProjectPreview";

// `inactive` cards (everything except the centre card of a row) are skipped by keyboard and screen readers.
function ProjectCard({ project, inactive = false }) {
  const hasDemo = project.demo && project.demo !== "#";
  const tab = inactive ? -1 : undefined;

  return (
    <article className="card" aria-hidden={inactive || undefined}>
      <ProjectPreview project={project} />

      <div className="card-body">
        <h4>{project.title}</h4>
        <p>{project.description}</p>

        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>

        <div className="card-links">
          {hasDemo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" tabIndex={tab} className="btn primary small">
              Live demo
            </a>
          ) : (
            <span className="soon">Demo coming soon</span>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" tabIndex={tab} className="btn ghost small">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
