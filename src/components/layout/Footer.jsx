import { Email, PhoneInTalk } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const links = [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Cookie Preferences", href: "#" },
    { label: "Sitemap", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  // removed
  // "Travel logistics",
  //     "Public Sector",
  const footerContent = {
    Home: [{ label: "Onboarding Platform", path: "/" }],
    Verticals: [
      { label: "BFSI", path: "/verticals/banking&financial-services" },
    ],
    PlatformCapabilities: [
      "Personalised Forms & Journeys",
      "Real-Time Form Updation",
      "Omni-Channel Onboarding",
      "Smart Digital Branches",
      "Agile Deployment at Scale",
      "Straight Through Processing",
    ],
    AboutUs: [
      { label: "Company Overview", path: "/about/who-we-are" },
      { label: "Events", path: "/events" },
      { label: "Contact US", path: "/contact-us" },
    ],
  }; // "Milestones", "Join our team",
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",

        bgcolor: "background.paper",
        // borderTop: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          px: { xs: 0, sm: 2, md: 12 },
          pt: { xs: 3, sm: 0 },
          pb: 2.5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "flex-start",
          gap: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            width: "25%",
            minWidth: { xs: "100%", sm: "240px", md: "335px" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",

            gap: { xs: 2, sm: 12 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              gap: { xs: 3, md: 3 },
            }}
          >
            <img src="/images/lyik-logo.svg" height="30px" />
            {/* <Typography
              variant="body2"
              fontWeight={600}
              fontSize={".85rem"}
              color="primary.main"
            >
              Giving <span style={{ color: "#EA5089" }}>Privacy</span> Back to
              the People.
            </Typography> */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <img src="/images/iso.png" width="53px" height="53px" />
              <img src="/images/privacy.png" width="53px" height="53px" />
              <img src="/images/aicpa.png" width="53px" height="53px" />
              <img src="/images/gdpr.png" width="53px" height="53px" />
            </Box>
          </Box>
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                justifyContent: "center",
                gap: 1.5,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={500}
                fontSize={"14px"}
                color="text.primary"
              >
                Connect With Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link
                  href="https://www.facebook.com/lyiktechnologies"
                  target="_blank"
                >
                  <img src="/images/facebook.svg" width="36px" height="36px" />
                </Link>

                {/* <Link>
                <img src="/images/instagram.svg" width="36px" height="36px" />
              </Link> */}
                <Link href="https://x.com/lyik_privacy?s=11" target="_blank">
                  <img src="/images/twitter.svg" width="36px" height="36px" />
                </Link>
                <Link href="https://www.youtube.com/@LYIK_BFSI" target="_blank">
                  <img src="/images/youtube.svg" width="36px" height="36px" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/lyik-technologies/"
                  target="_blank"
                >
                  <img src="/images/linkedin.svg" width="36px" height="36px" />
                </Link>
              </Box>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "center", sm: "flex-start" },
            gap: { xs: 1, sm: 4, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              minWidth: { xs: "", sm: "180px", md: "120px" },
              maxWidth: { xs: "100%", sm: "180px", md: "182px" },
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },

              gap: { xs: 0.5, md: 1 },
              pt: { xs: 1, md: 6 },
            }}
          >
            <Link
              to="/onboarding"
              sx={{ textDecoration: "none" }}
              component={RouterLink}
            >
              <Typography
                color="primary.main"
                fontSize={"1rem"}
                mb={0.7}
                fontWeight={700}
              >
                Home
              </Typography>
            </Link>
            {footerContent.Home.map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                textAlign={{ xs: "center", sm: "left" }}
                to="/"
                color="text.primary"
                display="block"
                sx={{
                  mb: { xs: 0, md: 1 },
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          {/* 1st */}
          <Box
            sx={{
              display: "flex",
              minWidth: { xs: "", sm: "180px", md: "120px" },
              maxWidth: { xs: "100%", sm: "180px", md: "182px" },
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },

              gap: { xs: 0.5, md: 1 },
              pt: { xs: 1, md: 6 },
            }}
          >
            <Link
              to="/verticals/banking&financial-services"
              sx={{ textDecoration: "none" }}
              component={RouterLink}
            >
              <Typography
                color="primary.main"
                fontSize={"1rem"}
                mb={0.7}
                fontWeight={700}
              >
                Verticals
              </Typography>
            </Link>
            {footerContent.Verticals.map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                textAlign={{ xs: "center", sm: "left" }}
                to={item.path}
                color="text.primary"
                display="block"
                sx={{
                  mb: { xs: 0, md: 1 },
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
          {/* 2nd */}
          {/* <Box
            sx={{
              display: "flex",
              minWidth: { xs: "", sm: "180px", md: "192px" },
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },

              gap: { xs: 0.5, md: 1 },
              pt: { xs: 1, md: 6 },
            }}
          >
            <Typography
              color="primary.main"
              fontSize={"1rem"}
              mb={0.7}
              fontWeight={700}
            >
              Platform Capabilities
            </Typography>

            {footerContent.PlatformCapabilities.map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                textAlign={{ xs: "center", sm: "left" }}
                to="/"
                color="text.primary"
                display="block"
                sx={{
                  mb: { xs: 0, md: 1 },
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item}
              </Link>
            ))}
          </Box> */}
          {/* 3rd */}
          <Box
            sx={{
              display: "flex",
              minWidth: { xs: "", sm: "180px", md: "192px" },
              flexDirection: "column",
              alignItems: { xs: "center", sm: "flex-start" },

              gap: { xs: 0.5, md: 1 },
              pt: { xs: 1, md: 6 },
            }}
          >
            <Link
              to="/about/who-we-are"
              sx={{ textDecoration: "none" }}
              component={RouterLink}
            >
              <Typography
                color="primary.main"
                fontSize={"16px"}
                mb={0.7}
                fontWeight={700}
              >
                About Us
              </Typography>
            </Link>
            {footerContent.AboutUs.map((item, index) => (
              <Link
                key={index}
                component={RouterLink}
                textAlign={{ xs: "center", md: "left" }}
                to={item.path}
                color="text.primary"
                display="block"
                sx={{
                  mb: { xs: 0, md: 1 },
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "center",
              gap: 1.5,
            }}
          >
            <Typography
              color="primary.main"
              fontSize={"1rem"}
              mb={0.7}
              fontWeight={700}
            >
              Connect With Us
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
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: { xs: "flex-start", sm: "flex-start" },
            // border: "1px solid red",
            flexDirection: "column",
            width: "230px",

            pt: { xs: 1, md: 6 },

            mx: { xs: "auto", sm: 0 },
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: ".875rem", sm: "0.875rem" }}
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={{ xs: 0, sm: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "14px",
            }}
          >
            {" "}
            <PhoneInTalk sx={{ color: "primary.main", fontSize: "22px" }} />
            +91 9448184644 (CEO)
          </Typography>
          <Typography
            color="text.primary"
            fontWeight={500}
            letterSpacing={"1.2px"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: { xs: 0, sm: 1 },
              fontSize: "14px",
            }}
          >
            <Email sx={{ color: "primary.main", fontSize: "22px" }} />
            deepak@lyik.com (CEO)
          </Typography>
          <Typography
            color="text.primary"
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={{ xs: 0.5, sm: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "14px",
            }}
          >
            <Email sx={{ color: "primary.main", fontSize: "22px" }} />
            sales@lyik.com
          </Typography>
          <Typography
            color="text.primary"
            fontWeight={500}
            letterSpacing={"1.2px"}
            mb={{ xs: 0.5, sm: 1 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "14px",
            }}
          >
            <Email sx={{ color: "primary.main", fontSize: "22px" }} />
            contact@lyik.com
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: { xs: 1, md: 8 } }}>
        <Divider color="text.primary" />
        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems="left"
          flexWrap="wrap"
          pt={1}
          pb={4}
        >
          {links.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                underline="hover"
                color="text.primary"
                sx={{ fontSize: 14, fontWeight: 300, mx: 0.5 }}
              >
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <Typography
                  component="span"
                  sx={{ color: "#ccc", mx: 0.5, fontSize: 20, lineHeight: 1 }}
                >
                  •
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 1, md: 6 },
          py: 1,
          backgroundColor: "background.primary",
          mb: 1,
        }}
      >
        <Typography
          variant="body2"
          color="white"
          align="left"
          fontSize={"12px"}
          fontWeight={300}
        >
          {"© "}
          {new Date().getFullYear()}{" "}
          <Link color="inherit" href="https://modernui.com/">
            {/* ModernUI */}
          </Link>
          {"  Copyright 2025 LYIK Technologies All Rights Reserved"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
