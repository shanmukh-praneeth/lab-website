import "../styles/PeopleCard.css";
import PeopleCard from "../components/PeopleCard";
import alumni from "../data/alumni.json";

export default function Alumni() {

  const phdAlumni = alumni
    .filter(
      student =>
        student.status === "graduated" &&
        student.program === "PhD"
    )
    .sort((a, b) => b.graduationYear - a.graduationYear);

  const msAlumni = alumni
    .filter(
      student =>
        student.status === "graduated" &&
        student.program === "MS"
    )
    .sort((a, b) => b.graduationYear - a.graduationYear);

  return (
    <div className="page-container people-page">

      <div className="page-title-strip">
        <h1>Alumni</h1>
      </div>

      <h2 className="section-heading">PhD</h2>
      <div className="people-grid">
        {phdAlumni.map((student, index) => (
          <PeopleCard
            key={index}
            name={student.name}
            role={student.role}
            image={student.image}
            supervisor={student.supervisor}
            graduationYear={student.graduationYear}
            profileLink={student.profileLink}
          />
        ))}
      </div>

      <h2 className="section-heading">MS Research</h2>
      <div className="people-grid">
        {msAlumni.map((student, index) => (
          <PeopleCard
            key={index}
            name={student.name}
            role={student.role}
            image={student.image}
            supervisor={student.supervisor}
            graduationYear={student.graduationYear}
            profileLink={student.profileLink}
          />
        ))}
      </div>

    </div>
  );
}