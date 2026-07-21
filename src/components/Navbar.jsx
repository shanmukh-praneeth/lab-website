import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {

  const [open, setOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    setOpen(null);
    navigate(path);
  };

  return (
    <>

    <div
      className="institute-strip"
      onClick={() => window.open("https://www.iiitb.ac.in", "_blank")}
    >
      International Institute of Information Technology Bangalore
    </div>


    <nav className="navbar">

      {/* LEFT SIDE */}
      <div className="nav-left">


        <Link to = "/" className="lab-name">
            <div>Networking and Communication</div>
            <div>Research Lab</div>
        </Link>

      </div>

      <div
        className = "hamburger-menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>


      <ul className={'menu ' + (isMobileMenuOpen ? "mobile-open" : "")}>

        <li onClick={() => handleNavigation("/research")}>Research</li>

        <li
          onMouseEnter={() => setOpen("innovation")}
          onMouseLeave={() => setOpen(null)}
        >
          Innovation ▾

          {open === "innovation" && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation("/innovation/patents")}>Patents</li>
              <li onClick={() => handleNavigation("/innovation/awards")}>Awards</li>
            </ul>
          )}

        </li>


        <li
          onMouseEnter={() => setOpen("people")}
          onMouseLeave={() => setOpen(null)}
        >
          People ▾

          {open === "people" && (
            <ul className="dropdown">
              <li onClick={() => handleNavigation("/people/faculty")}>
                Faculty
              </li>
              <li onClick={() => handleNavigation("/people/research-scholars")}>
                Research Scholars
              </li>
              <li onClick={() => handleNavigation("/people/project-staff")}>
                Project Staff
              </li>
              <li onClick={() => handleNavigation("/people/alumni")}>
                Alumni
              </li>
            </ul>
          )}
        </li>

        <li onClick={() => handleNavigation("/projects")}>Projects</li>

        <li onClick={() => handleNavigation("/publications")}>Publications</li>

      </ul>

    </nav>
  </>

  );

}
