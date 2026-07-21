import "../styles/PeopleCard.css";

export default function PeopleCard({
  name,
  role,
  research,
  image,
  profileLink,
  graduationYear,
  supervisor,
  email
}) {
  return (
    <a href={profileLink} className="people-card" target="_blank" rel="noopener noreferrer">

      <img src={image} alt={name} className="people-photo"/>

      <div className="people-info">
        <h3>{name}</h3>
        <p>{role}</p>

        {supervisor && (
          <p className="supervisor">
            Supervisor: {supervisor}
          </p>
        )}

        {email && (
          <p className="email">
            <strong>Email:</strong> {email}
          </p>
        )}

        {graduationYear && (
          <p className="grad-year">
            Graduated: {graduationYear}
          </p>
        )}

        {research && (
          <span className="research-tag">
            {research}
          </span>
        )}
      </div>

    </a>
  );
}