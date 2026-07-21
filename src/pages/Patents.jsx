import "../styles/Patents.css";
import patents from "../data/patents.json";

export default function Patents() {

  const sortedPatents = [...patents].sort((a, b) => {
    const dateA = a.grantDate || a.filingDate;
    const dateB = b.grantDate || b.filingDate;
    return new Date(dateB) - new Date(dateA);
  });

  return (
    <div className="page-container patents-page">

      <div className="page-title-strip">
        <h1>Patents</h1>
      </div>

      <div className="patents-grid">

        {sortedPatents.map((patent, index) => {

          const isGranted = patent.status.toLowerCase() === "granted";

          const handleClick = () => {
            if (patent.link) {
              window.open(patent.link, "_blank", "noopener,noreferrer");
            }
          };

          return (
            <div
              key={index}
              className={`patent-card ${patent.link ? "clickable" : ""}`}
              onClick={handleClick}
            >

              {/* HEADER */}
              <div className="patent-header">
                <h3>{patent.title}</h3>
                <span className={`status ${patent.status.toLowerCase()}`}>
                  {patent.status}
                </span>
              </div>

              {/* INNOVATORS */}
              <p className="patent-innovators">
                <strong>Innovators:</strong> {patent.innovators.join(", ")}
              </p>

              {/* META */}
              <div className="patent-meta">

                {/* DATE */}
                <span>
                  <strong>{isGranted ? "Granted:" : "Filed:"}</strong>{" "}
                  {isGranted
                    ? patent.grantDate && new Date(patent.grantDate).toLocaleDateString()
                    : patent.filingDate && new Date(patent.filingDate).toLocaleDateString()}
                </span>

                {/* NUMBER */}
                <span>
                  {isGranted ? (
                    <>
                      <strong>Patent No:</strong> {patent.patentNumber}
                    </>
                  ) : (
                    <>
                      <strong>Application No:</strong> {patent.applicationNumber}
                    </>
                  )}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}