import { useParams } from "react-router-dom";
import publications from "../data/publications.json";
import "../styles/Publications.css";

export default function YearPublications() {

  const { year } = useParams();

  let pageTitle = year;
  let data;

  if (year === "before-2020") {

    pageTitle = "Before 2020";

    const conference = [];
    const journal = [];
    const bookChapter = [];

    Object.entries(publications).forEach(([pubYear, pubData]) => {

      if (parseInt(pubYear) < 2020) {

        pubData.conference?.forEach(pub => {
          conference.push({
            ...pub,
            year: pubYear
          });
        });

        pubData.journal?.forEach(pub => {
          journal.push({
            ...pub,
            year: pubYear
          });
        });

        pubData.bookChapter?.forEach(pub => {
          bookChapter.push({
            ...pub,
            year: pubYear
          });
        });

      }

    });

    conference.sort((a, b) => b.year - a.year);
    journal.sort((a, b) => b.year - a.year);
    bookChapter.sort((a, b) => b.year - a.year);

    data = {
      conference,
      journal,
      bookChapter
    };

  } else {

    pageTitle = year;
    data = publications[year];

  }

  if (!data)
    return <h2>No publications found for {year}</h2>;

  const renderSection = (title, items) => (
    <div className="pub-block">

      <h2 className="pub-section">
        {title} <span className="pub-count">({items.length})</span>
      </h2>

      {items.length === 0 ? (

        <p className="empty">No entries</p>

      ) : (

        items.map((item, index) => (

          <div key={index} className="pub-item">

            <p className="pub-title">
              {item.title || item.chapter}
            </p>

            <p className="pub-authors">
              {item.authors.join(", ")}
            </p>

            {(item.venue || item.book) && (
              <p className="pub-venue">
                {item.venue || item.book}
              </p>
            )}

            {item.year && (
              <p className="pub-year">
                {item.year}
              </p>
            )}

          </div>

        ))

      )}

    </div>
  );

  return (
    <div className="page-container publications-page">

      <div className="page-title-strip">
        <h1>Publications — {pageTitle}</h1>
      </div>

      {renderSection("Conference Papers", data.conference)}

      {renderSection("Journal Papers", data.journal)}

      {data.bookChapter?.length > 0 &&
        renderSection("Book Chapters", data.bookChapter)
      }

    </div>
  );
}