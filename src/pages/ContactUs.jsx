import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import QuestionForm from "../components/QuestionForm";
import ContactForm from "../components/Contactform";
import LocationMaps from "../components/LocationMaps";
import SubMenu from "../components/navigation/SubMenu";
import { Email, PhoneInTalk } from "@mui/icons-material";

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "999px",
  padding: "10px 24px",
  textTransform: "none",
  alignSelf: "flex-end",
  "&:hover": {
    backgroundColor: "#5a2474",
  },
}));

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinks = {
    title: "About Us",
    options: [
      {
        label: "Who we are",
        path: "/about/who-we-are",
      },
      // {
      //   label: "Milestones",
      //   path: "/about/milestones",
      // },
      // {
      //   label: "Join Our Team",
      //   path: "/about/join-our-team",
      // },
      // {
      //   label: "Events",
      //   path: "/about/events",
      // },
      // {
      //   label: "Contact Us",
      //   path: "/contact-us",
      // },
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
          backgroundImage: "url(/images/contact.jpg)",
          backgroundSize: "cover", // or 'contain' if you want it all visible
          backgroundPosition: "center",
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
                fontSize: {
                  xs: "24px", // Mobile
                  sm: "32px", // Tablet
                  md: "40px", // Desktop
                },
                fontWeight: 800,
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              Start the conversation—your innovation journey begins here.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* questions Content */}
      <Box
        sx={{
          //   height: "calc(100vh - 64px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "white",
          p: { xs: 2, sm: 4, md: 8 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            px: { xs: 0, sm: 2, md: 2 },
            justifyContent: { xs: "center", sm: "center", md: "space-evenly" },
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  py: { xs: 0, sm: 4 },
                  pl: { xs: 0, sm: 4, md: 6 },
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: 2,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  color="text.primary"
                  fontSize={{ xs: "1.5rem", sm: "2rem" }}
                  fontWeight={900}
                  lineHeight={1.4}
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Let’s Discuss Your <br /> Business Goals
                </Typography>
                {/* <Typography
                  color="text.primary"
                  fontSize={{ xs: "14px", sm: "16px", md: "16px" }}
                  letterSpacing={{ xs: "", sm: "", md: "1px" }}
                  lineHeight={{ xs: "", sm: "", md: "140%" }}
                  fontWeight={300}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex
                </Typography> */}
                {!isMobile && (
                  <>
                    <Typography
                      color="text.primary"
                      fontSize={"1rem"}
                      fontWeight={500}
                      letterSpacing={"1.2px"}
                    >
                      Connect With Us on our Socials
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Link
                        href="https://www.facebook.com/lyiktechnologies"
                        target="_blank"
                      >
                        <img
                          src="/images/facebook.svg"
                          width="36px"
                          height="36px"
                        />
                      </Link>

                      {/* <Link>
                <img src="/images/instagram.svg" width="36px" height="36px" />
              </Link> */}
                      <Link
                        href="https://x.com/lyik_privacy?s=11"
                        target="_blank"
                      >
                        <img
                          src="/images/twitter.svg"
                          width="36px"
                          height="36px"
                        />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@LYIK_BFSI"
                        target="_blank"
                      >
                        <img
                          src="/images/youtube.svg"
                          width="36px"
                          height="36px"
                        />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/lyik-technologies/"
                        target="_blank"
                      >
                        <img
                          src="/images/linkedin.svg"
                          width="36px"
                          height="36px"
                        />
                      </Link>
                    </Box>
                  </>
                )}
              </Box>
            </Box>

            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: { xs: "flex-start", sm: "flex-start" },
                  flexDirection: "column",
                  pl: { xs: 2, sm: 4, md: 6 },
                  py: { xs: 1, sm: 4, md: 0 },
                  // mx: { xs: "auto", sm: 0 },
                }}
              >
                <Typography
                  color="text.primary"
                  fontSize={{ xs: ".875rem", sm: "1rem" }}
                  fontWeight={500}
                  letterSpacing={"1.2px"}
                  mb={{ xs: 0.5, sm: 1 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {" "}
                  <PhoneInTalk sx={{ color: "primary.main" }} />
                  +91 9448184644 (CEO)
                </Typography>
                <Typography
                  color="text.primary"
                  fontSize={{ xs: ".875rem", sm: "1rem" }}
                  fontWeight={500}
                  letterSpacing={"1.2px"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Email sx={{ color: "primary.main" }} />
                  deepak@lyik.com (CEO)
                </Typography>
                <Typography
                  color="text.primary"
                  fontSize={{ xs: ".875rem", sm: "1rem" }}
                  fontWeight={500}
                  letterSpacing={"1.2px"}
                  mb={{ xs: 0.5, sm: 1 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Email sx={{ color: "primary.main" }} />
                  sales@lyik.com
                </Typography>
                <Typography
                  color="text.primary"
                  fontSize={{ xs: ".875rem", sm: "1rem" }}
                  fontWeight={500}
                  letterSpacing={"1.2px"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <Email sx={{ color: "primary.main" }} />
                  contact@lyik.com
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Form section */}
              <ContactForm />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ width: "100%", display: "flex", alignItems: "center", py: 2 }}> */}
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "flex-start", sm: "flex-start" },
            flexDirection: "column",
            pl: { xs: 2, sm: 4, md: 6 },
            py: { xs: 6, sm: 4, md: 0 },
            // mx: { xs: "auto", sm: 0 },
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: ".875rem", sm: "1rem" }}
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={{ xs: 0.5, sm: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {" "}
            <PhoneInTalk sx={{ color: "primary.main" }} />
            +91 9448184644 (CEO)
          </Typography>
          <Typography
            color="text.primary"
            fontSize={{ xs: ".875rem", sm: "1rem" }}
            fontWeight={500}
            letterSpacing={"1.2px"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <Email sx={{ color: "primary.main" }} />
            deepak@lyik.com (CEO)
          </Typography>
          <Typography
            color="text.primary"
            fontSize={{ xs: ".875rem", sm: "1rem" }}
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={{ xs: 0.5, sm: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Email sx={{ color: "primary.main" }} />
            sales@lyik.com
          </Typography>
          <Typography
            color="text.primary"
            fontSize={{ xs: ".875rem", sm: "1rem" }}
            fontWeight={500}
            letterSpacing={"1.2px"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Email sx={{ color: "primary.main" }} />
            contact@lyik.com
          </Typography>
        </Box>
      )}
      {/* </Box> */}

      {isMobile && (
        <>
          <Typography
            color="text.primary"
            fontSize={"1rem"}
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={2}
          >
            Connect With Us on our Socials
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="https://www.facebook.com/lyiktechnologies">
              <img src="/images/facebook.svg" width="36px" height="36px" />
            </Link>

            {/* <Link>
                <img src="/images/instagram.svg" width="36px" height="36px" />
              </Link> */}
            <Link href="https://x.com/lyik_privacy?s=11">
              <img src="/images/twitter.svg" width="36px" height="36px" />
            </Link>
            <Link href="https://www.youtube.com/@LYIK_BFSI">
              <img src="/images/youtube.svg" width="36px" height="36px" />
            </Link>
            <Link href="https://www.linkedin.com/company/lyik-technologies/">
              <img src="/images/linkedin.svg" width="36px" height="36px" />
            </Link>
          </Box>
        </>
      )}

      {/* location & map */}

      <LocationMaps />
    </Box>
  );
};

export default ContactUs;
