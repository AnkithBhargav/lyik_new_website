import React from "react";
import { useLocation } from "react-router-dom";
import BankFinancesServices from "../components/BankFinancesServices";
import TravelLogistics from "../components/TravelLogistics";
import PublicSectors from "../components/PublicSectors";

const VerticalsOption = () => {
  const location = useLocation();
  console.log("location", location.pathname.split("/"));
  const verticalName = location.pathname.split("/")[2];
  if (verticalName == "banking&financial-services")
    return <BankFinancesServices />;
  if (verticalName == "travel-logistics") return <TravelLogistics />;
  if (verticalName == "public-sectors") return <PublicSectors />;
};

export default VerticalsOption;
