import { useState } from "react";

// Live screenshot of the demo site. Set `image` on a project to use your own file instead.
const shot = (url) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=640&h=400`;

function hostOf(url) {
  try { return new URL(url).host; } catch { return "localhost:8080"; }
}

function Art({ kind }) {
  if (kind === "chart") {
    return (
      <div className="art art-chart">
        <div className="art-row"><i /><i /><i /></div>
        <div className="art-bars">
          {[46, 70, 38, 82, 58, 92, 64].map((h, n) => <b key={n} style={{ height: `${h}%` }} />)}
        </div>
      </div>
    );
  }
  if (kind === "list") {
    return (
      <div className="art art-list">
        {[0, 1, 2, 3].map((n) => <div key={n}><span /><i /><em /></div>)}
      </div>
    );
  }
  if (kind === "site") {
    return (
      <div className="art art-site">
        <i className="w70" /><i className="w50" /><i className="w30" />
        <div className="art-row"><em /><em /><em /></div>
      </div>
    );
  }
  return <div className="art art-grid">{[0, 1, 2, 3, 4, 5].map((n) => <i key={n} />)}</div>;
}

function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);
  const hasDemo = project.demo && project.demo !== "#";
  const src = project.image || (hasDemo ? shot(project.demo) : null);

  if (src && !failed) {
    return (
      <div className="preview">
        <img
          src={src}
          alt={`Preview of ${project.title}`}
          width="640"
          height="400"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="preview" aria-hidden="true">
      <div className="frame">
        <div className="frame-bar">
          <span /><span /><span />
          <p>{hasDemo ? hostOf(project.demo) : "localhost:8080"}</p>
        </div>
        <Art kind={project.art} />
      </div>
    </div>
  );
}

export default ProjectPreview;
