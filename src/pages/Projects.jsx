import "../styles/Projects.css";
import projects from "../data/projects.json";

export default function Projects() {

  const sortedProjects = [...projects].sort(
    (a, b) => b.year - a.year
  );

  return (
    <div className="page-container projects-page">

      <div className="page-title-strip">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">

        {sortedProjects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-year">
                {project.year}
              </span>
            </div>

            <p className="project-pi">
              <strong>PI:</strong> {project.pi}
            </p>

            {project.coPi && (
              <p className="project-copi">
                <strong>Co-PI:</strong> {project.coPi}
              </p>
            )}

            <p className="project-sponsor">
              <strong>Sponsor:</strong> {project.sponsor}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}