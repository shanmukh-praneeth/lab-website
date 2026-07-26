import people from "../data/people.json";
import "../styles/Research.css";
import ibnztnimg from "../assets/ibn-ztn.png";
import iotimg from "../assets/iot.png";
import risimg from "../assets/ris.png";

function PeopleList({ area }) {
  const filtered = people.filter(p =>
    p.researchAreas.includes(area)
  );

  return (
    <div className="people-list">
      <h4>People working in this area</h4>
      {filtered.map((p, i) => (
        <div key={i} className="person">
          <a href={p.scholar} target="_blank" rel="noreferrer">
            {p.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function Research() {
  return (
    <div className="page-container research-page">

      <div className="page-title-strip">
        <h1>Research</h1>
      </div>

      <div className="research-intro">
        <p>
          The Networking and Communication Research Lab focuses on fundamental and applied
          research spanning 5G, 6G, IoT, RIS, Massive MIMO, Network Slicing, Zero-Touch
          Networks, and Network Security. The lab’s work contributes to building intelligent,
          efficient, and secure wireless systems that power next-generation connectivity
          across diverse application domains. Established in 2007, the lab has been actively supported by the Department of
          Science and Technology (Government of India) and industry partners such as
          Toshiba Software India. The research carried out here bridges theory,
          system design, and real deployments, ensuring that innovations translate into
          practical and scalable network solutions. The primary goal of the lab is to conduct translatable research that enhances
          Quality of Service (QoS), Quality of Experience (QoE), and overall user
          experience across all networking layers. The lab works towards designing
          intelligent, high-performance, and scalable communication systems for
          future wireless ecosystems.
        </p>

        <h2 className="current-research-title">Current Research</h2>
        <div className="research-nav">

          <a href="#ibn-ztn">IBN-ZTN</a>

          <a href="#scheduling">Scheduling & Network Slicing</a>

          <a href="#ris">RIS</a>

          <a href="#isac">ISAC</a>

          <a href="#iot">IoT</a>

          <a href="#uavs">UAVs</a>

          <a href="#massive-mimo">Massive MIMO</a>

          <a href="#network-security">Network Security</a>

        </div>
      </div>

      <section id="ibn-ztn" className="research-block">

        <h2>IBN-ZTN</h2>

        <img 
          src={ibnztnimg}
          alt="IBN-ZTN"
          className="research-image"
        />

        <p>
          Zero-Touch Networks and Intent-Based Networking (IBN) aim to create fully autonomous networks that can configure, 
          manage, optimize, and heal themselves with minimal human intervention. By combining AI/ML, telemetry, and closed-loop control, 
          operators specify high-level intent (e.g., performance, security, or QoS goals), and the network translates this into automated 
          policies and real-time actions. These paradigms are central to future 5G/6G infrastructures where scale, heterogeneity, and dynamic 
          demands make manual management infeasible, enabling self-driving networks that are adaptive, resilient, and operationally efficient.
        </p>

        <p>
          At networking and communication research lab, research aligned with Zero-Touch Networks (ZTN) and Intent-Based Networking focuses on 
          enabling autonomous, closed-loop network management for 5G/6G systems. Leveraging AI/ML models, these approaches translate high-level 
          service intents (e.g., SLA requirements) into dynamic network configurations across RAN, TN, and CN domains. The work integrates 
          orchestration frameworks, real-time KPI prediction, and optimization engines to automate provisioning, monitoring, and 
          reconfiguration, thereby minimizing human intervention while ensuring SLA compliance. This aligns with broader vision of 
          AI-driven network control and self-organizing systems for next-generation communication networks.
        </p>

        <PeopleList area="ibn-ztn" />
      </section>

      <section id="scheduling" className="research-block">
        <h2>Scheduling and Network Slicing</h2>

        <p>
          Scheduling and Network Slicing are fundamental to delivering differentiated services over shared 5G/6G infrastructure. 
          Advanced scheduling algorithms allocate radio, compute, and network resources dynamically to meet diverse QoS and QoE requirements 
          such as ultra-low latency, high throughput, or massive connectivity. Network slicing creates multiple virtual networks on a common 
          physical infrastructure, each tailored to specific application needs (eMBB, URLLC, mMTC). Together, they enable efficient resource 
          utilization, service isolation, and guaranteed performance for heterogeneous applications.
        </p>

        <p>
          Networking and Communication Lab’s research work in scheduling and network slicing primarily targets multi-domain resource 
          orchestration and SLA-aware scheduling. Research includes AI/ML-based MAC scheduling, combinatorial resource allocation across RAN, 
          TN and CN, prioritization-based scheduling and slice-aware optimization frameworks. The focus is on overcoming domain-centric 
          limitations by enabling end-to-end coordinated scheduling decisions, ensuring efficient utilization of radio, transport, and 
          compute resources. This is particularly relevant for CPS and 6G applications where heterogeneous services require strict QoS/QoE 
          guarantees, and aligns with ongoing efforts in O-RAN, RIC-based control, and intelligent schedulers.
        </p>

        <PeopleList area="SNs" />
      </section>

      <section id="ris" className="research-block">
        <h2>Reconfigurable Intelligent Surfaces (RIS)</h2>

        <img 
          src={risimg}
          alt="RIS"
          className="research-image"
        />

        <p>
          Reconfigurable Intelligent Surfaces (RIS) introduce programmable control over the wireless propagation environment by using smart 
          surfaces that can reflect, refract, or absorb signals in a controlled manner. By dynamically shaping radio waves, RIS can enhance 
          coverage, improve signal strength, reduce interference, and increase energy efficiency without requiring additional active 
          transmitters. This technology is a key enabler for smart radio environments in 6G, offering cost-effective ways to optimize wireless 
          communication in complex indoor and outdoor scenarios.
        </p>

        <p>
          RIS is a major research thrust in the networking and communication research lab, with active work spanning algorithm design, and 
          system integration. The lab is developing indigenous RIS prototypes capable of dynamically controlling electromagnetic wave 
          propagation to enhance coverage, capacity, and energy efficiency. Research includes beamforming and phase optimization, 
          RIS-assisted NOMA systems, and integration with MIMO and IoT use cases. A dedicated RIS testbed and anechoic chamber support 
          experimental validation, positioning IIITB at the forefront of smart radio environment development for 6G networks.
        </p>

        <PeopleList area="RIS" />
      </section>

      <section id="isac" className="research-block">
        <h2>Integrated Sensing and Communication (ISAC)</h2>

        <p>
          Integrated Sensing and Communication (ISAC) merges wireless communication and environmental sensing into a unified framework 
          where the same signals and hardware are used for both data transmission and sensing tasks such as localization, tracking, and 
          mapping. ISAC is a promising paradigm for 6G systems, enabling applications like smart transportation, autonomous systems, and 
          immersive environments. By leveraging communication waveforms for sensing, ISAC improves spectral efficiency while enabling networks 
          to become context-aware and environment-adaptive.
        </p>

        <p>
          Networking and Communication research lab work in ISAC is closely linked with RIS and next-generation wireless systems, focusing on 
          joint communication and sensing capabilities. Research is being done on how intelligent radio environments and advanced signal 
          processing can enable simultaneous data transmission and environmental sensing. This includes applications such as drone detection, 
          smart environments, and 6G sensing-enabled networks, where communication infrastructure doubles as a sensing platform, improving 
          spectrum efficiency and enabling new services.
        </p>

        <PeopleList area="ISAC" />
      </section>

      <section id="iot" className="research-block">
        <h2>Internet of Things (IoT)</h2>

        <img 
          src={iotimg}
          alt="IoT"
          className="research-image"
        />

        <p>
          The Internet of Things (IoT) connects billions of devices, sensors, and actuators to enable intelligent monitoring, automation, and 
          data-driven decision-making across domains such as smart cities, healthcare, agriculture, and industry. IoT networks require 
          lightweight protocols, scalable architectures, edge intelligence, and robust security mechanisms to handle massive device density 
          and intermittent connectivity. Efficient IoT communication focuses on energy efficiency, reliability, and seamless integration with 
          edge and cloud infrastructures.
        </p>

        <p>
          Networking and Communication lab conducts research on IoT within the context of massive machine-type communications (mMTC) and 
          smart environments. Efforts include enabling scalable and energy-efficient connectivity, and supporting CPS applications such as 
          industrial IoT and smart agriculture. The work emphasizes reliable, low-latency communication and efficient resource allocation, 
          leveraging advanced wireless technologies to support a massive number of heterogeneous devices in 5G/6G ecosystems.
        </p>

        <PeopleList area="IoT" />
      </section>

      <section id="uavs" className="research-block">
        <h2>Unmanned Armed Vehicles (UAVs)</h2>

        <p>
          Unmanned Aerial Vehicles (UAVs) are increasingly used as aerial communication platforms, mobile base stations, and data 
          collectors to enhance coverage, capacity, and resilience of wireless networks. UAV-assisted networks are particularly useful in 
          disaster recovery, temporary events, and remote areas where terrestrial infrastructure is limited. Research in this area includes 
          optimal UAV placement, trajectory planning, energy efficiency, and reliable air-to-ground communication for dynamic and flexible 
          network deployment.
        </p>

        <p>
          Research at Networking and Communication lab includes UAV/drone communication systems, focusing on reliable connectivity, 
          routing, and detection mechanisms. The integration of UAVs with advanced wireless technologies aims to enable adaptive, 
          high-throughput aerial networks, particularly in dynamic and coverage-constrained environments.
        </p>

        <PeopleList area="UAVs" />
      </section>

      <section id="massive-mimo" className="research-block">
        <h2>Massive MIMO</h2>

        <p>
          Massive Multiple-Input Multiple-Output (MIMO) systems employ a large number of antennas at the base station to serve multiple 
          users simultaneously, significantly improving spectral efficiency, capacity, and reliability. By exploiting spatial multiplexing 
          and beamforming, Massive MIMO enables precise signal focusing, reduced interference, and enhanced coverage. It is a cornerstone 
          technology in 5G and a critical component for achieving the high data rates and connectivity demands of 6G networks.
        </p>

        <p>
          Massive MIMO is a core research area at networking and communication research lab, particularly in the development of 5G-Advanced 
          O-RAN compliant base stations. A key goal here is to build indigenous massive MIMO systems that deliver high spectral efficiency 
          and support large-scale connectivity for 5G and beyond.
        </p>

        <PeopleList area="mMIMO" />
      </section>

      <section id="network-security" className="research-block">
        <h2>Network Security</h2>

        <p>
          Network Security in modern wireless systems focuses on protecting data, devices, and infrastructure against evolving cyber threats 
          while maintaining performance and scalability. With the rise of IoT, virtualization, and softwarized networks, security challenges 
          span authentication, intrusion detection, privacy preservation, and secure resource allocation. AI-driven threat detection, 
          zero-trust architectures, and secure network slicing are essential to ensure trustworthy communication in next-generation networks.
        </p>

        <p>
          Networking and Communication lab research in network security is embedded within its broader focus on advanced communication systems 
          and cyber-physical systems. The work emphasizes secure and resilient network architectures, particularly for critical infrastructure 
          enabled by 5G/6G technologies. This includes securing network slicing, ensuring data integrity across domains, and developing 
          trustworthy communication frameworks that can support national-scale deployments.
        </p>

        <PeopleList area="Network Security" />
      </section>

    </div>
  );
}