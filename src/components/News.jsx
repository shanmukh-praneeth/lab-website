import "../styles/News.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  return (
    <section className="home-news-wrapper">

      <div className="hero-image">
        <img src="/lab-hero.jpg" alt="Networking Lab" />
      </div>

      <div className="about-lab">
        <p>
          Networking and communication form the backbone of modern interconnected systems, enabling seamless exchange of information across 
          devices, applications, and users. In the context of advanced communication networks such as 5G and emerging 6G, effective networking 
          ensures reliable connectivity, while efficient communication mechanisms facilitate the timely and accurate transfer of data, which is 
          critical for meeting stringent Quality of Service (QoS) and Quality of Experience (QoE) requirements. They play a pivotal role in 
          supporting diverse applications ranging from real-time telehealth and autonomous systems to industrial automation and smart cities. 
          Strong networking frameworks allow for resource sharing, scalability, and resilience, while robust communication protocols ensure 
          coordination, adaptability, and low-latency interactions. Together, they enable intelligent decision-making, enhance system 
          performance, and are essential for realizing end-to-end service orchestration in complex, multi-domain network environments.
        </p>
      </div>

      <div
        className="research-cta"
        onClick={() => navigate("/research")}
      >
        Learn More About Our Research
      </div>

      {/* ✅ NEWS SECTION */}
      <div className="latest-news">
        <h2>Latest News</h2>

        <div className="news-item">
          <span className="news-date">March 2026</span>
          <Link to="https://link.springer.com/chapter/10.1007/978-3-032-05507-1_3" className="news-title">
            A Chapter Published in Implications of Generative AI on IoT Security: A Dual Perspective
          </Link>
          <p>
            A book chapter discussing novel approaches for secure communication
            in IoT ecosystems has been published in an international edited volume.
          </p>
        </div>

        <div className="news-item">
          <span className="news-date">February 2026</span>
          <Link to="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus" className="news-title">
            Patent Granted for Estimation and Optimization of Throughput in O-RAN Slicing Environments
          </Link>
          <p>
            The lab has been granted a patent for an innovative system and method to estimate and optimize throughput 
            in O-RAN slicing environments, enhancing network performance and efficiency.
          </p>
        </div>

        <div className="news-item">
          <span className="news-date">July 2025</span>
          <Link to="/news/toshiba-visit" className="news-title">
            Toshiba Team Visit: ZTN Demonstration and Research Discussion at IIIT-Bangalore
          </Link>
          <p>
            As part of Dr. Jyotsna Bapat’s research team at IIIT-Bangalore, a recent demonstration session was held on July 30th, 2025, 
            for representatives from Toshiba Corporation.
          </p>
        </div>

      </div>

    </section>
  );
}