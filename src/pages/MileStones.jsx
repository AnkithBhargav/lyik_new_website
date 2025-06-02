import { Box, Typography } from "@mui/material";
import React from "react";
import SubMenu from "../components/navigation/SubMenu";

const MileStones = () => {
  const navLinks = {
    title: "About Us",
    options: [
      { label: "Who we are", path: "/about/who-we-are" },
      { label: "Milestones", path: "/about/milestones" },
      { label: "Join Our Team", path: "/about/join-our-team" },
      { label: "Events", path: "/about/events" },
      // { label: "Contact Us", path: "/contact-us" },
    ],
  };

  const lyikJourneyData = [
    {
      date: "00 Month, YYYY",
      title: "Visa with LYIK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "LYIK launches in Travel Logistics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-1.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "WealthTech with LYIK",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-2.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "LYIK launches in BFSI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-3.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "LYIK turns 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector132.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "LYIK reaches Netherlands",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-5.svg",
    },
    {
      date: "00 Month, YYYY",
      title: "LYIK is Now a DPIIT Recognised Startup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-123.svg",
    },
    {
      date: "10th Month, 2023",
      title: "LYIK turns 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/Vector 13-7.svg",
    },
    {
      date: "10th February, 2022",
      title: "LYIK Journey Starts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/lyik-logo2.png",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top Banner */}
      <Box
        sx={{
          height: {
            xs: "calc(90vh - 58px)", // Full height on mobile
            sm: "calc(90vh - 58px)", // Slightly smaller on tablets
            md: "calc(90vh - 58px)", // Original on desktop
          },
          width: "100%",
          backgroundImage: "url(/images/milestones.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
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
            pt: 2,
          }}
        >
          <SubMenu navLinks={navLinks} />
          <Box
            sx={{
              width: "100%",
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
              Milestones
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              A timeline of our key achievements, strategic growth, and industry
              impact.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Milestones */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 6,
        }}
      >
        {lyikJourneyData.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "90%", md: "70%" },
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              justifyContent: "center",
              alignItems: "center",
              py: 4,
            }}
          >
            <Box
              sx={{
                flex: 1.1,
                mb: { xs: 2, md: 0 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                width={index === lyikJourneyData.length - 1 ? "70%" : "100%"}
                height={{ xs: "200px", sm: "240px", md: "256px" }}
                style={{ objectFit: "cover", borderRadius: "8px" }}
                alt={item.title}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                px: { xs: 0, sm: 3, md: 4 },
                textAlign: {
                  xs: "center",
                  md: index % 2 === 0 ? "left" : "right",
                },
              }}
            >
              <Typography
                variant="h2"
                color="primary.main"
                fontSize={{ xs: "20px", sm: "24px", md: "28px" }}
                fontWeight={800}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Typography
                color="text.primary"
                fontSize={{ xs: "14px", sm: "15px", md: "16px" }}
                fontWeight={300}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MileStones;
