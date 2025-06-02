import React from "react";
import { useLocation } from "react-router-dom";
import EventsOption from "./EventsOption";

const EventPage = () => {
  const location = useLocation();
  console.log("location", location.pathname.split("/"));
  const eventName = location.pathname.split("/")[2];
  const eventsData = [
    {
      title: "EBC",
      desc: "Our participation at the European Blockchain Convention 2024 in Barcelona—showcasing our innovations in decentralised identity and digital trust.",
      logo: "/images/event2.png",
      eventName: "European Blockchain Convention",
      date: "25th–26th September, 2024",
      venue: {
        name: "Fira Barcelona Montjuïc",
        city: "Barcelona",
        buttons: [
          { label: "Jio World Convention Centre" },
          { label: "Mumbai" },
          { label: "Venue" },
        ],
      },
      description: `LYIK had the privilege of attending The European Blockchain Convention (EBC) 2024 that took place on September 25–26 at Fira Barcelona Montjuïc, marking its 10th edition as one of Europe’s most influential blockchain events offering a comprehensive exploration of the blockchain and digital assets landscape.`,
      boothInfo: `LYIK set up an engaging booth, represented by our CEO, CTO, and several key colleagues. Our team
demonstrated cutting-edge products and services, connecting with industry experts and potential clients, and sharing our vision for the future of Verifiable Credentials.`,
      images: [
        "/images/euro1.jpg",
        "/images/euro2.jpg",
        "/images/euro3.jpg",
        "/images/euro4.jpg",
        "/images/euro5.jpg",
        "/images/euro6.jpg",
      ],
      aboutConvention: {
        heading: "About European Blockchain Convention",
        text: `The European Blockchain Convention (EBC) is one of Europe's leading blockchain events, founded by Daniel Salmerón and Victoria Gago in 2018. Held biannually in Barcelona, it brings together thousands of industry leaders, innovators, developers, and policymakers to explore the latest in blockchain, Web3, digital assets, and regulatory developments. The convention features keynote sessions, panels, startup competitions, and networking events, making it a central platform for shaping the future of blockchain technology across Europe.`,
        logo: "/images/event111.png", // Replace with actual path
        nextEvent: {
          date: "15-17 OCT 2025",
          location: "BARCELONA",
        },
      },
    },
    {
      title: "W3BSI Event ",
      desc: "advancing conversations on Web3, digital identity, and cross-border trust frameworks.",
      logo: "/images/event1.png",

      eventName: "W3BSI Event",
      date: "7th May, 2024",
      venue: {
        name: "SPARKS",
        address: "Rue Ravenstein 60, 1000 Bruxelles, Belgium",
        city: "Brussels",
        buttons: [{ label: "EBSI" }, { label: "Belgium" }, { label: "Venue" }],
      },
      description: `LYIK had the privilege of attending the W3BSI 2024 event held in Brussels, a premier gathering for blockchain and digital identity enthusiasts. The event was organised by the European Blockchain Services Infrastructure (EBSI), an initiative by the European Commission to leverage blockchain technology for public services across Europe.`,
      boothInfo: `Our CEO Deepak Kishanchand and CTO Suveer Nagendra represented LYIK as delegates, engaging with industry leaders and exploring new opportunities for innovation in blockchain technology and digital identity solutions. The event provided a platform for insightful discussions, networking, and showcasing our latest advancements in these fields.`,
      images: [
        "/images/wb1.png", // Replace with actual paths or imported assets
        "/images/wb2.png",
        "/images/wb3.png",
        "/images/wb4.png",
      ],
      aboutConvention: {
        heading: "About EBSI",
        text: `EBSI aims to enhance the efficiency and security of public services in the EU by integrating blockchain technology. Their efforts focus on cross-border services, digital identity, and data integrity, aligning with our vision at LYIK to drive digital transformation and secure, seamless digital experiences.`,
        logo: "/images/event222.png",
      },
    },
    {
      title: "BFSI Summit 2023",
      desc: "advancing conversations on Web3, digital identity, and cross-border trust frameworks.",
      logo: "/images/event3.png",
      eventName: "Business Standard BFSI Insight Summit",
      date: "30th-31st October, 2023",
      venue: {
        name: "Jio World Convention Centre",
        address: "Mumbai",
        city: "Mumbai",
        buttons: [
          { label: "Jio World Convention Centre" },
          { label: "Mumbai" },
          { label: "Venue" },
        ],
      },
      description: `LYIK showcased its innovative solutions at the Business Standard BFSI Insight Summit 2023 in Mumbai, a key event for the banking, financial services, and insurance sectors. The summit was organised by Business Standard, a leading Indian business news publication known for its insightful analysis and coverage of economic and financial matters.`,
      boothInfo: `LYIK set up an engaging booth at the summit, staffed by our CEO, CTO, and several key colleagues. Our team demonstrated cutting-edge products and services, connecting with industry experts and potential clients, and sharing our vision for the future of BFSI.`,
      images: [
        "/images/events6.png",
        "/images/events5.png",
        "/images/events1.png",
        "/images/events3.png",
        "/images/events4.png",
        "/images/events2.png",
      ],
      aboutConvention: {
        heading: "About Business Standard",
        text: `Business Standard is renowned for its comprehensive business news and analysis, providing valuable insights to professionals across various industries. Their BFSI Insight Summit serves as a crucial platform for industry leaders to discuss trends, challenges, and innovations in the BFSI sector.`,
        logo: "/images/event333.png",
      },
    },
  ];
  if (eventName == "1") return <EventsOption eventData={eventsData[0]} />;
  if (eventName == "2") return <EventsOption eventData={eventsData[1]} />;
  if (eventName == "3") return <EventsOption eventData={eventsData[2]} />;
};

export default EventPage;
