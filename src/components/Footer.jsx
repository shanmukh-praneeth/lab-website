import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Networking and Communication Research Lab,
        </p>

        <p>
          <a
            href="https://www.iiitb.ac.in"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            International Institute of Information Technology Bangalore
          </a>
        </p>

        <p className="developer">
          Website designed and developed by
        </p>

        <p className="developer-name">
          <a
            href="https://www.linkedin.com/in/shanmukh-praneeth?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Shanmukh Praneeth
          </a>
          {" "} | {" "} iMTech ECE, IIIT Bangalore
        </p>
      </div>
    </footer>
  );
}