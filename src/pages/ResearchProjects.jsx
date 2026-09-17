import { useParams } from "react-router-dom";
import researchProjects from "../data/researchProjects.json";
import "../styles/ResearchProjects.css";

const projectImages = import.meta.glob(
  "../assets/research_projects/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

export default function ResearchProjects() {
  const { area } = useParams();

  const areaData = researchProjects[area];

  if (!areaData) {
    return (
      <div className="page-container research-projects-page">
        <div className="page-title-strip">
          <h1>Research Projects</h1>
        </div>

        <p>No projects found for this research area.</p>
      </div>
    );
  }

  const getImage = (imageName) => {
    const imagePath = `../assets/research_projects/${area}/${imageName}`;

    return projectImages[imagePath];
  };

  return (
    <div className="page-container research-projects-page">

      <div className="page-title-strip">
        <h1>Projects — {areaData.title}</h1>
      </div>

      <div className="research-projects-list">

        {areaData.projects.map((project, index) => (
          <section
            className="research-project"
            key={index}
          >

            <h2>{project.title}</h2>

            {project.images?.length > 0 && (
              <div className="research-project-images">

                {project.images.map((imageName, imageIndex) => {
                  const image = getImage(imageName);

                  if (!image) {
                    return null;
                  }

                  return (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`${project.title} - Figure ${imageIndex + 1}`}
                    />
                  );
                })}

              </div>
            )}

            <div className="research-project-description">
              {project.description?.map(
                (paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {project.points?.length > 0 && (
              <div className="research-project-points">

                <h3>Advantages / Improvements</h3>

                <ul>
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            )}

          </section>
        ))}

      </div>

    </div>
  );
}