import { useNavigate } from "react-router-dom";
import publications from "../data/publications.json";
import "../styles/Publications.css";

export default function Publications() {

  const navigate = useNavigate();

  const years = Object.keys(publications)
    .filter(year => parseInt(year) >= 2020)
    .sort((a, b) => b - a);

  return (
    <div className="page-container publications-page">

      <h1>Publications</h1>

      <div className="year-grid">

        {years.map((year) => (
          <div
            key={year}
            className="year-card"
            onClick={() => navigate(`/publications/${year}`)}
          >
            {year}
          </div>
        ))}

        <div
          className="year-card archive-card"
          onClick={() => navigate("/publications/before-2020")}
        >
          <div style={{fontSize: "14px", marginTop: "6px"}}>
            Before 2020
          </div>
        </div>

      </div>

    </div>
  );
}