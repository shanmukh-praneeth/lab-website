import "../styles/Patents.css";   // reuse same styling
import "../styles/Awards.css";
import awards from "../data/awards.json";

export default function Awards() {

  return (
    <div className="page-container awards-page">

      <div className="page-title-strip">
        <h1>Awards</h1>
      </div>

      <div className="patents-grid">

        {awards.map((award, index) => (

          <div className="patent-card" key={index}>

            <div className="patent-header">
              <h3>{award.title}</h3>
            </div>

            <p className="award-authors">
              <strong>Authors:</strong> {award.authors.join(", ")}
            </p>

            <p className="award-paper">
              <strong>Title:</strong> {award.paperTitle}
            </p>

            <div className="patent-meta">
              <span>
                <strong>Conference:</strong> {award.conference}
              </span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}