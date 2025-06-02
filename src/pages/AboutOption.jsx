import React from "react";
import { useLocation } from "react-router-dom";
import BankFinancesServices from "../components/BankFinancesServices";
import WhoWeAre from "./WhoWeAre";
import MileStones from "./MileStones";
import JoinOurTeam from "./JoinOurTeam";
import Events from "./Events";
import ContactUs from "./ContactUs";

const AboutOption = () => {
  const location = useLocation();
  // console.log("location", location.pathname);
  const verticalName = location.pathname.split("/")[2];
  if (verticalName == "who-we-are") return <WhoWeAre />;
  if (verticalName == "milestones") return <MileStones />;
  if (verticalName == "join-our-team") return <JoinOurTeam />;
  // if (verticalName == "events") return <Events />;
  // if (verticalName == "contact-us") return <ContactUs />;
};

export default AboutOption;
