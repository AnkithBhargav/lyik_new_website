import { KeyboardArrowRight, LinkedIn } from "@mui/icons-material";
import { Typography, Box, Button, Card, Link, Grid } from "@mui/material";
import LocationMaps from "../components/LocationMaps";
import SubMenu from "../components/navigation/SubMenu";

const WhoWeAre = () => {
  const navLinks = {
    title: "About Us",
    options: [
      {
        label: "Who we are",
        path: "/about/who-we-are",
      },

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

  // {
  //       label: "Milestones",
  //       path: "/about/milestones",
  //     },
  //     {
  //       label: "Join Our Team",
  //       path: "/about/join-our-team",
  //     },

  const steps = [
    {
      title: "/images/iso.png",
      desc: "Information Security Management System",
      date: "DD/MM/YYYY",
    },
    {
      title: "/images/gdpr.png",
      desc: "General Data Protection Regulation ",
      date: "DD/MM/YYYY",
    },
    {
      title: "/images/privacy.png",
      desc: "California Consumer Privacy Act",
      date: "DD/MM/YYYY",
    },
    {
      title: "/images/aicpa.png",
      desc: "System & Organization Controls 2",
      date: "DD/MM/YYYY",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Top content */}
      <SubMenu navLinks={navLinks} />
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          justifyContent: "center",
          alignItems: "flex-start",
          // px: { xs: 2, sm: 4, md: 4 },
          pt: { xs: 8, sm: 10 },
          pb: 4,
          gap: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1.1 }}>
          <Typography
            color="text.primary"
            fontSize={{ xs: "1.5rem", sm: "2rem" }}
            fontWeight={900}
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            LYIK Technologies Private Limited
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography color="text.primary" fontSize={"14px"} fontWeight={300}>
            LYIK Technologies is a deep-tech company providing innovative and
            pioneering solutions for automatic form-filling, Digital Journeys of
            forms, real world data privacy, document validation and Web 3.0
            technologies using Verifiable Credentials based on blockchain
            technology to transform the worlds digital data transactions into a
            secure Trust Network.
          </Typography>
        </Box>
      </Box>
      {/* <Box
        sx={{
          height: "calc(100vh - 64px)",
          width: "100%",
          backgroundImage: "url(/images/who-we-are.svg)",
          backgroundSize: "cover", // or 'contain' if you want it all visible
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 64px)",

            background: "linear-gradient(to right, white, transparent)",
          }}
        ></Box>
      </Box> */}
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, sm: 4, md: 10 },
          pt: { xs: 4, sm: 8 },
          gap: { xs: 2, sm: 3 },
          pb: 4,
        }}
      >
        <Box>
          <Typography
            color="text.primary"
            fontSize={{ xs: "1.5rem", sm: "2rem" }}
            fontWeight={900}
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Meet the Founders
          </Typography>
        </Box>
        <Box>
          <Typography
            color="text.primary"
            fontSize={"14px"}
            fontWeight={300}
            textAlign="center"
          >
            At the helm of LYIK Technologies are business and technology leaders
            with deep expertise in digital transformation and emerging
            technologies. With a vision to solve Together, they drive the
            company’s mission to simplify secure, digital-first interactions
            across industries.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          px: { xs: 2, sm: 4, md: 10 },
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "30%" },
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box
            component="img"
            src={"/images/deepak.png"}
            sx={{
              height: { xs: 240, sm: 300 },
              width: { xs: 240, sm: 300 },
              objectFit: "cover",
              mr: 2,
              // borderRadius: 2,
              // boxShadow: 2,
            }}
          />

          <Link href="https://www.linkedin.com/in/kishanchand/" target="_blank">
            <Typography
              sx={{
                textDecoration: "underline",
                fontWeight: 900,
                fontSize: "18px",
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
                color: "primary.main",
                letterSpacing: "1.2px",
              }}
            >
              <LinkedIn sx={{ color: "#0a66c2" }} /> Deepak Kishanchand
            </Typography>
          </Link>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "1.2px",
            }}
          >
            CEO
          </Typography>
          {/* <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "1.2px",
            }}
          >
            deepak@lyik.com
          </Typography> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "30%" },
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box
            component="img"
            src={"/images/suveer.png"}
            sx={{
              height: { xs: 240, sm: 300 },
              width: { xs: 240, sm: 300 },
              objectFit: "cover",
              mr: 2,
              // borderRadius: 2,
              // boxShadow: 2,
            }}
          />
          <Link
            href="https://www.linkedin.com/in/suveer-nagendra-9571017/"
            target="_blank"
          >
            <Typography
              sx={{
                textDecoration: "underline",
                fontWeight: 900,
                fontSize: "18px",
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
                color: "primary.main",
                letterSpacing: "1.2px",
              }}
            >
              <LinkedIn sx={{ color: "#0a66c2" }} /> Suveer Nagendra
            </Typography>
          </Link>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "1.2px",
            }}
          >
            CTO
          </Typography>
          {/* <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "1.2px",
            }}
          >
            suveern@lyik.com
          </Typography> */}
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 10 },
          textAlign: "center",
          pt: { xs: 4, sm: 4, md: 8 },
          pb: { xs: 2, sm: 4, md: 4 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            gutterBottom
            color="text.primary"
            fontSize={{ xs: "1.5rem", sm: "2rem" }}
            fontWeight={900}
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Compliance Certification
          </Typography>
        </Box>
        {/* <Box sx={{ flex: 1.5 }}>
          <Typography
            gutterBottom
            color="text.primary"
            fontSize={"1rem"}
            fontWeight={300}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </Typography>
        </Box> */}
      </Box>
      {/* certificate & Cards */}

      {/* Cards under each step */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", sm: "space-between" },
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          px: { xs: 2, sm: 4, md: 10 },
          width: { xs: "100%", sm: "80%" },
          pt: { xs: 7, sm: 10 },
          gap: { xs: 2, sm: 2 },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {steps.map((step, index) => (
            <Grid
              size={{ xs: 6, sm: 6, md: 3 }}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                key={index}
                sx={{
                  maxWidth: { xs: "150px", sm: "223px" },
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  position: "relative",
                  mb: { xs: 8, sm: 0 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "-48px", sm: "-85px" },
                    zIndex: 99,
                    width: { xs: 75, sm: 169 },
                    height: { xs: 75, sm: 169 },
                  }}
                >
                  <img src={step.title} width="100%" height="100%" />
                </Box>
                <Card
                  key={index}
                  sx={{
                    px: 2,
                    pt: { xs: 4, sm: 8 },
                    pb: 1,

                    width: "100%",
                    textAlign: "center",
                    height: { xs: "130px", sm: "200px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: 2,
                    borderRight: "1px solid",
                    borderLeft: "1px solid",
                    borderBottom: "7px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontSize={{ xs: 14, sm: 16 }}
                    fontWeight={500}
                  >
                    {step.desc}
                  </Typography>
                  {/* <Typography variant="body2" fontSize={14} fontWeight={300}>
                    {step.date}
                  </Typography> */}
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* location & map */}

      <LocationMaps />
    </Box>
  );
};

export default WhoWeAre;
