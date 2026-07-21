import "../styles/PeopleCard.css";
import PeopleCard from "../components/PeopleCard";

import phdStudents from "../data/phdStudents.json";
import msStudents from "../data/msResearch.json";

export default function ResearchScholars() {

  const phdOngoing = phdStudents.filter(s => s.status === "ongoing");
  const msOngoing = msStudents.filter(s => s.status === "ongoing");

  return (
    <div className="page-container people-page">

      <div className="page-title-strip">
        <h1>Research Scholars</h1>
      </div>

      {/* PhD Section */}
      <h2 className="section-heading">PhD Students</h2>
      <div className="people-grid">
        {phdOngoing.map((student, index) => (
          <PeopleCard
            key={index}
            name={student.name}
            role={student.role}
            image={student.image}
            supervisor={student.supervisor}
            email={student.email}
            profileLink={student.profileLink}
          />
        ))}
      </div>

      {/* MS Section */}
      <h2 className="section-heading">MS Research Students</h2>
      <div className="people-grid">
        {msOngoing.map((student, index) => (
          <PeopleCard
            key={index}
            name={student.name}
            role={student.role}
            image={student.image}
            supervisor={student.supervisor}
            email={student.email}
            profileLink={student.profileLink}
          />
        ))}
      </div>

    </div>
  );
}