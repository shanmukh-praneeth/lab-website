import PeopleCard from "../components/PeopleCard";
import "../styles/PeopleCard.css";

import debabrata from "../assets/debabrata.png";
import jyotsna from "../assets/jyotsna.png";
import amrita from "../assets/amrita.png";

export default function Faculty() {

  const faculty = [
    {
      name: "Prof. Debabrata Das",
      role: "Director, IIIT-B | Communications & Networking",
      research: "Building the Internet of the Future",
      image: debabrata,
      profileLink: "https://www.iiitb.ac.in/faculty/debabrata-das"
    },
    {
      name: "Prof. Jyotsna Bapat",
      role: "Professor | Communications, Networking & Security",
      research: "Secure, Reliable, Intelligent Networks",
      image: jyotsna,
      profileLink: "https://www.iiitb.ac.in/faculty/jyotsna-bapat"
    },
    {
        name: "Prof. Amrita Mishra",
        role: "Assistant Professor | Communications & Networking",
        research: "AI-Driven Network Systems",
        image: amrita,
        profileLink: "https://www.iiitb.ac.in/faculty/amrita-mishra"
    }
  ];

  return (
    <div className="page-container people-page">

      <div className="page-title-strip">
        <h1>Faculty</h1>
      </div>

      <div className="people-grid">
        {faculty.map((person, i) => (
          <PeopleCard key={i} {...person} />
        ))}
      </div>

    </div>
  );
}