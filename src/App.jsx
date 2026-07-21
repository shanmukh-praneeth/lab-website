import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Navbar.css";

import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Navbar from "./components/Navbar";
import ToshibaVisit from "./pages/ToshibaVisit";
import Publications from "./pages/Publications";
import YearPublications from "./pages/YearPublications";
import Patents from "./pages/Patents";
import Awards from "./pages/Awards";
import ResearchScholars from "./pages/ResearchScholars";
import Staff from "./pages/Staff";
import Alumni from "./pages/Alumni";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />

        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/toshiba-visit" element={<ToshibaVisit />} />
            <Route path="/people/faculty" element={<Faculty />} />
            <Route path="/people/research-scholars" element={<ResearchScholars />} />
            <Route path="/people/project-staff" element={<Staff />} />
            <Route path="/people/alumni" element={<Alumni />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/:year" element={<YearPublications />} />
            <Route path="/innovation/patents" element={<Patents />} />
            <Route path="/innovation/awards" element={<Awards />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </div>

        <Footer />
      </div>

    </Router>
  );
}

export default App;