import { Box, Typography } from "@mui/material";
import React from "react";
import EventShowcase from "../components/EventShowcase";
import SubMenu from "../components/navigation/SubMenu";

const EventsOption = ({ eventData }) => {
  const navLinks = {
    title: "Events",
    options: [
      {
        label: "European Blockchain Convention",
        path: "/events/1",
      },
      {
        label: "W3BSI Event",
        path: "/events/2",
      },
      {
        label: "BFSI Insight Summit 2023",
        path: "/events/3",
      },
    ],
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* top Content */}
      <Box
        sx={{
          height: {
            xs: "calc(90vh - 58px)", // Full height on mobile
            sm: "calc(90vh - 58px)", // Slightly smaller on tablets
            md: "calc(90vh - 58px)", // Original on desktop
          },
          width: "100%",
          backgroundImage: `url(${eventData.logo})`,
          backgroundSize: "cover", // or 'contain' if you want it all visible
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(to top, #7E2D8A99, transparent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <SubMenu navLinks={navLinks} />

          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              display: "flex",
              flexDirection: "column",
              py: { xs: 4, sm: 6, md: 5 },
              px: { xs: 2, sm: 4, md: 10 },
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              color="white"
              sx={{
                fontFamily: "'Inter'",
                fontSize: {
                  xs: "24px", // Mobile
                  sm: "32px", // Tablet
                  md: "40px", // Desktop
                },
                fontWeight: 800,
              }}
            >
              {eventData.title}
            </Typography>
            {/* <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              advancing conversations on Web3, digital identity, and
              cross-border trust frameworks.
            </Typography> */}
          </Box>
        </Box>
      </Box>

      <EventShowcase eventData={eventData} />
    </Box>
  );
};

export default EventsOption;
