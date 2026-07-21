import "../styles/NewsPage.css";
import toshibaImg from "../assets/toshiba_visit.jpeg";

export default function ToshibaVisit() {
  return (
    <div className="news-page">
      <div className="news-content">

        <h1 className="newsitem-title">
            ZTN Demonstration and Research Discussion at IIIT-Bangalore
        </h1>

        <div className="news-meta">
            July 30, 2025
        </div>

        <img
          src={toshibaImg}
          alt="Toshiba Team Visit"
          className="news-image"
        />

        <p>
          As part of Dr. Jyotsna Bapat’s research team at IIIT-Bangalore,
          a recent demonstration session was held on July 30th, 2025,
          for representatives from Toshiba Corporation. During their visit, ongoing work on Zero Touch Network (ZTN)
          was demonstrated, emphasizing its integration with
          Intent-Based Networking (IBN) and the innovative use of
          Digital Twin (DT)-assisted ZTN. A live demo was shown highlighting how ZTN principles are
          implemented within our test-bed environment, including
          real-time intent translation, automated policy enforcement,
          and proactive network adaptation through DT technology. The session 
          reflected the research lab team’s progress in
          building a proactive, intelligent network framework capable
          of meeting evolving 5G demands. Post-demo, the lab team had engaging discussions with the
          Toshiba team regarding future research directions,
          collaborative possibilities, and enhancements to
          ZTN-IBN-DT integration.
        </p>

      </div>
    </div>
  );
}