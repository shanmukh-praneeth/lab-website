
import "../styles/PeopleCard.css";
import PeopleCard from "../components/PeopleCard";
import staff from "../data/staff.json";

export default function Staff() {
  const postdocs = staff.filter(p => p.category === "postdoc");
  const srfs = staff.filter(p => p.category === "srf");
  const projectAssociates = staff.filter(
    p => p.category === "projectAssociate"
  );

  const renderPeople = (people) => (
    <div className="people-grid">
      {people.map((person, index) => (
        <PeopleCard
          key={index}
          name={person.name}
          role={person.role}
          image={person.image}
          supervisor={person.supervisor}
          email={person.email}
          profileLink={person.profileLink}
        />
      ))}
    </div>
  );

  return (
    <div className="page-container people-page">
      <div className="page-title-strip">
        <h1>Project Staff</h1>
      </div>

      <h2 className="section-heading">Postdoctoral Researchers</h2>
      {renderPeople(postdocs)}

      <h2 className="section-heading">Senior Research Fellows</h2>
      {renderPeople(srfs)}

      <h2 className="section-heading">Project Associates</h2>
      {renderPeople(projectAssociates)}
    </div>
  );
}
