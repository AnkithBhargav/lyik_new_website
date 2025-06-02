import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import JobCards from "../components/JobCards";
import SubMenu from "../components/navigation/SubMenu";

const JoinOurTeam = () => {
  const navLinks = {
    title: "About Us",
    options: [
      { label: "Who we are", path: "/about/who-we-are" },
      { label: "Milestones", path: "/about/milestones" },
      { label: "Join Our Team", path: "/about/join-our-team" },
      // { label: "Events", path: "/about/events" },
      // { label: "Contact Us", path: "/contact-us" },
    ],
  };

  const sections = [
    {
      title: "Create",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud",
    },
    {
      title: "Collaborate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud",
    },
    {
      title: "Celebrate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud",
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
      {/* Top Content */}
      <Box
        sx={{
          height: {
            xs: "calc(90vh - 58px)", // Full height on mobile
            sm: "calc(90vh - 58px)", // Slightly smaller on tablets
            md: "calc(90vh - 58px)", // Original on desktop
          },
          width: "100%",
          backgroundImage: "url(/images/join-our-team.svg)",
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
              Join Our Team
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              Discover career opportunities with us and become part of a team
              shaping the future of digital innovation
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Milestones */}
      <Box
        sx={{
          width: "100%",
          py: 10,
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              color="text.primary"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                letterSpacing: "2px",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              00 Month, YYYY <br /> 00 Month, YYYY
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              color="text.primary"
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Life at LYIK */}
      <Box
        sx={{
          backgroundColor: "#F3EFFF",
          py: 8,
          width: "100%",
          px: { xs: 2, md: 10 },
        }}
      >
        <Typography
          sx={{ fontSize: "2rem", textAlign: "center", fontWeight: 600, mb: 8 }}
        >
          Life at LYIK
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {sections.map((section, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  textAlign: "center",
                  background: "transparent",
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{
                    height: { xs: 200, md: 300 },
                    borderRadius: 3,
                    backgroundImage:
                      "linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)",
                    backgroundSize: "40px 40px",
                    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <JobCards />

      {/* Employee Testimonials */}
      <Box
        sx={{
          width: "100%",
          py: 10,
          px: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "2rem", fontWeight: 600, textAlign: "center", mb: 5 }}
        >
          What Our Employees Have to Say
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
          {[1, 2, 3].map((item, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Box sx={{ px: 2 }}>
                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: "100px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    textAlign: "left",
                  }}
                >
                  "
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 300,
                    fontStyle: "italic",
                    mt: "-80px",
                    textAlign: "center",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                    mt: 3,
                  }}
                >
                  Name of Employee
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    textAlign: "center",
                    mt: 1,
                  }}
                >
                  Role
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default JoinOurTeam;
