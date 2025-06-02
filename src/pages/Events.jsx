import { Avatar, Box, Button, Card, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SubMenu from "../components/navigation/SubMenu";

const Events = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/events/${id + 1}`);
  };

  // const navLinks = {
  //   title: "About Us",
  //   options: [
  //     {
  //       label: "Who we are",
  //       path: "/about/who-we-are",
  //     },
  //     // {
  //     //   label: "Milestones",
  //     //   path: "/about/milestones",
  //     // },
  //     // {
  //     //   label: "Join Our Team",
  //     //   path: "/about/join-our-team",
  //     // },
  //     {
  //       label: "Events",
  //       path: "/about/events",
  //     },
  //     // {
  //     //   label: "Contact Us",
  //     //   path: "/contact-us",
  //     // },
  //   ],
  // };

  const eventsData = [
    {
      imagePath: "/images/event2.png",
      title: "European Blockchain Convention",
      date: "25-26 September 2024",
      organization: "European Blockchain Convention",
      location: "Barcelona",
      venue: "Venue",
      description:
        "LYIK presented its cutting-edge solutions in self-sovereign identity and data interoperability at Europe’s leading blockchain gathering.",
      tags: ["tag1", "tag2", "tag3", "tag4", "tag5"],
    },
    {
      imagePath: "/images/event1.png",
      title: "W3BSI Event",
      date: "7th May 2024",
      organization: "EBSI",
      location: "Belgium",
      venue: "Venue",
      description:
        "LYIK attended in the W3BSI 2024 event in Belgium, a premier forum on Web3, digital identity, and blockchain infrastructure, showcasing its innovations in decentralised trust and verifiable credentials.",
      tags: ["web3", "blockchain", "EBSI", "SSID", "Decentralised ID"],
    },
    {
      imagePath: "/images/event3.png",
      title: "BFSI Insight Summit 2023",
      date: "30th-31st October 2023",
      organization: "Business Standard",
      location: "Mumbai",
      venue: "Jio World Convention Centre",
      description:
        "LYIK opened a booth in the BFSI Summit 2023 hosted by Business Standard, contributing insights on digital onboarding, compliance automation, and the future of customer journeys in banking and financial services.",
      tags: ["banking", "BFSI", "Finance", "booth", "tag5"],
    },
  ];

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
          backgroundImage: "url(/images/event_bg.png)",
          backgroundSize: "cover", // or 'contain' if you want it all visible
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            height: "100%",
            // background: "linear-gradient(to top, #7E2D8A99, transparent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            pt: 2,
            position: "relative",
          }}
        >
          {/* <SubMenu navLinks={navLinks} /> */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "40%", // or '50px' if you prefer fixed
              background:
                "linear-gradient(to top,rgba(126, 45, 138, 0.7), transparent)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              display: "flex",
              flexDirection: "column",
              py: { xs: 4, sm: 6, md: 5 },
              px: { xs: 2, sm: 4, md: 10 },
              zIndex: 99,
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
              Events
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              A glimpse into our keynotes, exhibitions, and global industry
              engagements.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Event Cards */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "90%", md: "85%" },
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "space-between" },
            gap: { xs: 4, sm: 3, md: 2 }, // Adjust gap for better spacing
          }}
        >
          {eventsData.map((event, idx) => (
            <Card
              key={idx}
              onClick={() => handleClick(idx)}
              sx={{
                width: { xs: "100%", sm: "48%", md: "49%" }, // Allow 2 cards on sm+
                maxWidth: "630px",
                // ✅ Only apply minWidth on large screens
                // minWidth: { md: "500px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: { xs: 1.5, sm: 3, md: 3 },
                borderRadius: 2,
                border: "0.5px solid #E6E4E4",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box sx={{ width: "100%", maxWidth: "574px", height: "244px" }}>
                <img
                  src={event.imagePath}
                  alt={`Event ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  pt: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                  px: 1.5,
                  gap: 2,
                }}
              >
                <Avatar sx={{ width: 63, height: 63 }} src={event.imagePath} />
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: {
                        xs: "1rem", // mobile
                        sm: "1.25rem", // tablets
                        md: "1.3rem", // desktop
                      },
                    }}
                    fontWeight={700}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "primary.main",

                      fontSize: {
                        xs: "0.8rem",
                        sm: ".875rem",
                        md: "1rem",
                      },
                    }}
                    fontWeight={600}
                  >
                    {event.date}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  pt: 2,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  px: 1.5,
                  gap: 1,
                }}
              >
                <Button
                  variant="contained"
                  color="text.primary"
                  sx={{
                    backgroundColor: "#F3EFFF",
                    // maxWidth: "350px",
                    borderRadius: 0.5,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      // md: "1rem",
                    },
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    px: 2,
                    py: { xs: 0.5, sm: 1 },
                  }}
                >
                  {event.organization}
                </Button>
                <Button
                  variant="contained"
                  color="text.primary"
                  sx={{
                    backgroundColor: "#F3EFFF",
                    // maxWidth: "200px",
                    borderRadius: 0.5,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      // md: "1rem",
                    },
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    px: 2,
                    py: { xs: 0.5, sm: 1 },
                  }}
                >
                  {event.location}
                </Button>
                <Button
                  variant="contained"
                  color="text.primary"
                  sx={{
                    backgroundColor: "#F3EFFF",
                    // maxWidth: "200px",
                    borderRadius: 0.5,
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      // md: "1rem",
                    },
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    px: 2,
                    py: { xs: 0.5, sm: 1 },
                  }}
                >
                  {event.venue}
                </Button>
              </Box>
              <Typography
                color="text.primary"
                sx={{
                  fontSize: {
                    xs: "0.8rem",
                    sm: "0.85rem",
                    md: "0.9rem",
                  },
                  py: { xs: 1.5, sm: 3 },
                  px: 1.5,
                }}
                fontWeight={400}
                textAlign={"left"}
              >
                {event.description}
              </Typography>
              <Box
                px={1.5}
                pb={{ xs: 2 }}
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {/* {event.tags.map((tag) => (
                  <Button
                    key={tag}
                    label={tag}
                    variant="contained"
                    sx={{
                      backgroundColor: "#F3EFFF",
                      fontSize: {
                        xs: "0.75rem",
                        sm: "0.8rem",
                        md: ".85rem",
                      },
                      borderRadius: 10,
                      px: 1,
                      py: 0.5,
                      color: "#252424",

                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </Button>
                ))} */}
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Events;
