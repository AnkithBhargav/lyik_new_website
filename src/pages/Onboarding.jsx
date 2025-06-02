import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { East, KeyboardArrowRight } from "@mui/icons-material";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import CarouselWithProgress from "../components/CarouselWithProgress";
import SlidingCarousel from "../components/SlidingCarousel";
import VideoPlayer from "../components/VideoPlayer";
import OnboardingForm from "../components/OnboardingForm";
import { useNavigate } from "react-router-dom";

const imageUrls = [
  {
    url: "/images/bfsi_2.webp",
    text: "Banking, Financial Services & Insurance",
  },
  {
    url: "/images/travel_hero.webp",
    text: "Travel Logistics",
  },
  {
    url: "/images/public_hero.webp",
    text: "Public Sector",
  },
];

const carouselData = [
  {
    title: "Intelligent Fields, Smart Forms & Personalised Journeys",
    title2: "Personalised Forms & Journeys",
    title1: "Intelligent Fields, Smart Forms & Personalised Journeys",
    image: "/images/carousel1.webp",
    para1:
      "The LYIK Platform empowers Smart Digital Journeys through intelligent fields and adaptive smart forms. At its core lies the advanced FormBuilder module, driven by intelligent fields that enable the creation of dynamic, context-aware forms. These smart forms tailor themselves in real-time—displaying only the fields relevant to each user’s inputs, ensuring a seamless, efficient, and highly personalised experience.",
    para2:
      "By removing unnecessary steps and adapting instantly, the LYIK Platform simplifies complex processes into intuitive, user-friendly journeys for your customers.",
  },
  {
    title: "Real-Time Form Updation",
    title2: "Real-Time Form Updation",
    title1: "Update Forms in Real-Time",
    image: "/images/carousel5.webp",
    para1:
      "SmartForms are at the core of the LYIK Platform which allows for a unique dynamic form updation feature that empowers your organisation to quickly and seamlessly integrate custom fields and business rules in real-time without impacting the run-time infrastructure. ",
    para2:
      "This pioneering and innovative feature significantly reduces implementation time and costs, enabling your organisation to rapidly adapt to evolving Regulatory requirements. Additionally, this feature allows for instant updates to product and forms, with immediate deployment across your websites, mobile apps, and branch offices. By providing unparalleled agility and responsiveness, your organisation can efficiently meet regulatory mandates quickly and maintain a competitive edge in the industry.",
  },
  {
    title: "Omni-Channel Onboarding",
    title2: "Omni-Channel Onboarding",
    title1: "Drive Higher Conversion Through Seamless, Omni-Channel Onboarding",
    image: "/images/carousel4.webp",
    para1:
      "This core feature of the LYIK Platform enables your organisation to rapidly create Onboarding Forms which are Omni-Channel in nature, for instant deployment across your Website, Mobile App, and Branch Offices, allowing digital journeys to begin instantly. ",
    para2:
      "These End-to-End Journeys enable your customers to start, pause, and resume their onboarding process across different channels (Website, Mobile App, Branch Offices) without losing progress. This enhances customer experience, improves conversion rates, and minimises drop-offs, ensuring a smooth and highly efficient onboarding process.",
  },
  {
    title: "Smart Digital Branches",
    title2: "Smart Digital Branches",
    title1: "Transform Branches and Offices into Smart Digital Hubs",
    image: "/images/carousel6.webp",
    para1:
      "The LYIK Platform's unique QR-code and FormCentre powered digital journey concepts empower your organisation to provide digital services on web and mobile through both Self-Guided (DIY) and Assisted modes, converting your branch offices into paperless Digital Hubs for the next-gen customer experience in a significantly reduced timeframe. Achieve unlimited operational scale without increasing resources, with our QR-code and FormCentre-enabled digital journeys.",
    para2:
      "LYIK Platform offers an advanced technical architecture for differentiated business models to drive strategic growth. ",
  },
  {
    title: "Agile Deployment at Scale",
    title2: "Agile Deployment at Scale",
    title1: "Transform Time-to-Market with LYIK’s Agile Deployment Framework",
    para1:
      "The LYIK Platform is architected to address the critical challenge of implementing and deploying new product and service journeys which currently takes months/years with conventional means. With LYIK Platform, your organisation can now launch onboarding and service journeys in weeks rather than months or years. This accelerated deployment enables your organisation to rapidly implement products and service journeys across all business functions, providing a competitive edge. Additionally, the LYIK Platform allows you to manage all digital journeys seamlessly within a single, unified system, enhancing operational efficiency.",
    para2: "",
    image: "/images/carousel3.webp",
  },
  {
    title: "Straight Through Processing (STP)",
    title2: "Straight Through Processing",
    title1: "Enable 100% STP with LYIK’s Fully Digital Onboarding Platform",
    para1:
      "With LYIK’s fully digital onboarding solution, your organisation can aim for 100% Straight Through Processing (STP) across both onboarding and customer service journeys. The platform supports comprehensive end-to-end KYC processes, including Proof of Identity, Proof of Address, signature verification, and a wide range of other validations. Purpose-built for efficiency, the LYIK Platform is engineered to deliver seamless, 100% online journeys from start to finish.",
    para2: "",
    image: "/images/carousel2.webp",
  },
];

// removed
// {
//     title: "Know your Customer (KYC)",
//     title2: "Know your Customer (KYC)",
//     title1: "Streamline KYC Processes with LYIK’s Digital Onboarding Platform",
//     para1:
//       "The LYIK Platform is designed to streamline the KYC process, enabling your organisation to conduct comprehensive KYC checks and verifications in real-time. This ensures that your organisation can efficiently onboard customers while maintaining compliance with regulatory requirements. The platform's advanced features allow for seamless integration with various data sources, ensuring accurate and up-to-date information for KYC processes.",
//     para2:
//       "By leveraging the LYIK Platform, your organisation can enhance its KYC capabilities, reduce manual efforts, and improve overall efficiency in customer onboarding.",
//     image: "/images/carousel7.webp",
//   },

const steps = [
  {
    title: "Omni-Channel Onboarding",
    description: [
      "LYIK Platform offers flexible customer onboarding through Self-Guided ",
      { bold: "DIY" },
      " and ",
      { bold: "Assisted Journeys" },
      " across Web, Mobile & Branch Offices, enabling seamless access, anytime-anywhere.",
    ],
  },
  {
    title: "Realtime ID Verification",
    description: [
      "LYIK Platform features Integrations for online ",
      { bold: "KYC" },
      ", real-time ID Verification, and seamless systems connectivity, enhancing Efficiency and Data Security.",
    ],
  },
  {
    title: "Customisable Workflows",
    description: [
      "With ",
      { bold: "Maker–Checker workflows" },
      " and a ",
      { bold: "Business Rules Engine" },
      " (BRE), organisations can tailor onboarding processes while ensuring compliance.",
    ],
  },
  {
    title: "Scalable, GTM Architecture",
    description: [
      "LYIK’s scalable technology accelerates multiple product launches with quick ",
      { bold: "QR-Code" },
      " & ",
      { bold: "SmartForm Journeys" },
      " while reducing TAT to minutes and promoting cross-sell and upsell opportunities.",
    ],
  },
];

const cards = [
  {
    title: "End-to-End Journeys",
    imgPath: "card111.png",
    imgPath2: "1.png",
    data: [
      {
        title: "Omni-Channel Deployment",
        description: [
          "Empower customers to switch between web, mobile, and branch channels to start and resume their digital journey effortlessly.",
        ],
      },
      {
        title: "End-to-End Journeys",
        description: [
          "Smart Workflows with Trusted API’s, Business Rules Engine (BRE), KYC Integrations and Backend Integration",
        ],
      },
      {
        title: "Enterprise Platform",
        description: ["All Digital Journeys on a Single Unified Platform"],
      },
      {
        title: "Rapid Journey Deployments",
        description: [
          "Reduce Digital Journey implementation time by up to ",
          "75%",
        ],
      },
    ],
  },
  {
    title: "Smart Forms",
    imgPath: "card123.png",
    imgPath2: "2.png",
    data: [
      {
        title: "Omni-Channel Form Builder",
        description: ["Convert all Products/Forms into Smart Forms in minutes"],
      },
      {
        title: "Dynamic Form Updation",
        description: [
          "Dynamically update single or multiple forms without disturbing the runtime infrastructure",
        ],
      },
      {
        title: "Intelligent Forms",
        description: [
          "Dynamic, context-aware forms that tailor themselves in realtime to provide ",
          "Personalised Journeys",
        ],
      },
      {
        title: "Automated PDF Generation",
        description: [
          "Pre-filled PDF forms auto-generated for ",
          "Operations ",
          ", and ",
          "Audit Trails",
          ".",
        ],
      },
    ],
  },

  {
    title: "Superb Customer Experience",
    imgPath: "card333.png",
    imgPath2: "3.png",
    data: [
      {
        title: "FormCentre Journeys",
        description: [
          "DIY Digital Journeys initiated from the FormCentre on the Web & App",
        ],
      },
      {
        title: "QR Code Journeys",
        description: ["Paperless Branches (STP Journeys)"],
      },
      {
        title: "Trusted APIs & KYC Integration",
        description: [
          "Automated Form-Filling with pre-validated data, also leveraging AI/OCR technologies",
          { bold: "" },
          ".",
        ],
      },
      {
        title: "Omni-Channel Journeys",
        description: [
          "Empower customers to switch between web, mobile, and branch channels to start and resume their digital journey effortlessly.",
        ],
      },
    ],
  },
];

const Onboarding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "1600px", // or 1600px if needed
        mx: "auto", // centers horizontally
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: -1,
      }}
    >
      {/* Top content */}
      <Box
        sx={{
          height: { xs: "calc(95vh - 50px)", md: "calc(100vh - 56px)" },
          width: "100%",
          backgroundImage: {
            xs: "url(/images/mobile_1.png)",
            sm: "url(/images/heroBanner.svg)",
          },
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "50%" },
            height: "100%",
            background: {
              xs: "linear-gradient(to right,rgba(255, 255, 255, 0.76), transparent)",
              md: "linear-gradient(to right, white, transparent)",
            },
            // py: { xs: 1, md: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "left",
            py: { xs: 2, md: 6 },
            px: { xs: 2, md: 10 },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "90%", lg: "90%" },
              display: "flex",
              flexDirection: "column",
              pt: { xs: 1, sm: 4 },
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              color="primary.main"
              fontFamily={"'Inter', sans-serif"}
              fontSize={{ xs: "28px", sm: "32px", md: "32px", lg: "42px" }}
              fontWeight={700}
              lineHeight={"131%"}
            >
              Strengthen Client
              <br /> Relationships with <br />
              <span>
                <img src="/images/lyik-logo.svg" height="30px" />
              </span>
              's End-to-End <br />
              Customer Digital
              <br /> Onboarding Platform
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "90%", md: "90%", lg: "80%" },

              display: "flex",
              flexDirection: "column",
              // mt: { xs: 6, md: 12, lg: 20 },
            }}
          >
            <Typography
              color="text.primary"
              fontSize={{ xs: "16px", sm: "18px", md: "22px" }}
              fontWeight={{ xs: 600, sm: 400 }}
              letterSpacing={"1.3px"}
            >
              LYIK{" "}
              <span
                style={{
                  fontWeight: isMobile ? "800" : "600",
                  color: "#7E2D8A",
                }}
              >
                {" "}
                Omni-Channel
              </span>{" "}
              <br />
              Customer Digital <br /> Onboarding Platform
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
              <img src="/images/iso.png" width="55px" height="55px" />
              <img src="/images/privacy.png" width="55px" height="55px" />
              <img src="/images/aicpa.png" width="55px" height="55px" />
              <img src="/images/gdpr.png" width="55px" height="55px" />
            </Box>

            {/* <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid",
                  height: "54px",
                  display: "flex",
                  gap: 1,
                  borderRadius: 10,
                  px: { xs: 2, sm: 2.8 },
                  borderColor: "#252424",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "16px", sm: "18px", md: "24px" },
                    fontWeight: 600,
                  }}
                >
                  Read More
                </Typography>
                <ArrowForward sx={{ color: "primary.main" }} />
              </Button>
            </Box> */}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          // background:
          //   "radial-gradient(ellipse at center, #9c7aff1a 0%, white 70%)",
          backgroundImage: "url(/images/gird_gradient.svg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* steps & Cards */}
        <Box
          sx={{
            // height: { xs: "auto", md: "calc(100vh - 64px)" },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: { xs: 8, sm: 8 },
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "100%", lg: "100%" },
              display: "flex",
              flexDirection: "column",
              pb: { xs: 3, sm: 4, md: 5.5 },
              pt: { xs: 3, sm: 4, md: 4.5 },
            }}
          >
            <Typography
              color="text.primary"
              fontSize={{ xs: "24px", sm: "30px", md: "32px" }}
              fontWeight={600}
              textAlign={"center"}
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span
                style={{
                  marginLeft: isMobile ? "4px" : "10px",
                  marginRight: isMobile ? "4px" : "2px",
                  display: "inline-flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <img
                  src="/images/lyik-logo.svg"
                  style={{ height: isMobile ? "22px" : "30px" }}
                />
              </span>{" "}
              Omni-Channel Digital Onboarding Platform
            </Typography>
          </Box>

          <Box sx={{ mx: "auto", px: { xs: 1, sm: 20, md: 17 } }}>
            <Grid container spacing={3} sx={{ width: "100%" }}>
              {steps.map((step, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 3 }} // 1 card in a row from mobile to tablet, 2 cards in a row from tablet to desktop,
                  // 4 cards in a row from tablet up
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <Card
                    sx={{
                      p: { xs: 2, sm: 3 },
                      maxWidth: { xs: "90%", sm: "278px" },
                      textAlign: "center",
                      height: { xs: 200, sm: 320, md: 280 },
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      borderTop: "1px solid",
                      borderRight: "7px solid ",
                      borderLeft: "1px solid ",
                      borderBottom: "7px solid",
                      borderColor: "primary.main",
                    }}
                  >
                    <Typography
                      fontSize={{ xs: 18, sm: 20, md: 22 }}
                      fontWeight={600}
                      sx={{ mb: 1, lineHeight: 1.2 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      fontSize={{ xs: 14, sm: 15, md: 16 }}
                      fontWeight={400}
                    >
                      {step.description.map((part, index) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <span
                            style={{ fontWeight: 600, color: "#7E2D8A" }}
                            key={index}
                          >
                            {part.bold}
                          </span>
                        )
                      )}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* video */}
        <Box
          sx={{
            width: "100%",
            px: { xs: 2, sm: 4, md: 6 },
            pt: { xs: 6, sm: 9 },
            pb: { xs: 12, sm: 9 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: 3, sm: 4 },
            }}
          >
            <Typography
              color="text.primary"
              fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
              fontWeight={600}
              textAlign={"center"}
              sx={{ fontFamily: "'Inter', sans-serif" }}
            >
              Simplify Customer Onboarding with the{" "}
              <span style={{ margin: "0px 4px" }}>
                {" "}
                <img
                  src="/images/lyik-logo.svg"
                  height={isMobile ? "22px" : "30px"}
                />{" "}
              </span>
              {/* {isMobile ? (
                <span style={{ margin: "0px 3px" }}>
                  {" "}
                  <img src="/images/lyik-logo.svg" height="22px" />{" "}
                </span>
              ) : (
                <span style={{ color: "#7E2D8A", fontWeight: 900 }}>LYIK</span>
              )} */}{" "}
              Platform
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: 3.6,
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "900px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: {
                    xs: "1px solid #7E2D8A",
                    md: "5px solid  #7E2D8A",
                  },
                  borderRight: {
                    xs: "7px solid #7E2D8A",
                    md: "15px solid #7E2D8A",
                  },
                  borderLeft: {
                    xs: "1px solid #7E2D8A",
                    md: "2px solid #7E2D8A",
                  },
                  borderBottom: {
                    xs: "5px solid #7E2D8A",
                    md: "12px solid #7E2D8A",
                  },
                  borderRadius: { xs: 1.5, sm: 3, md: 3 },
                  overflow: "hidden",
                }}
              >
                {/* Responsive Video Wrapper (16:9 ratio) */}
                <VideoPlayer
                  videoPath={
                    "/images/LYIKOmniChannelDigitalOnboardingPlatform(Organisation)HQ.mp4"
                  }
                />
              </Card>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1.5,
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <img src="/images/iso.png" width="48px" height="48px" />
                  <img src="/images/privacy.png" width="48px" height="48px" />
                  <img src="/images/aicpa.png" width="48px" height="48px" />
                  <img src="/images/gdpr.png" width="48px" height="48px" />
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    color="text.primary"
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={500}
                  >
                    Onboard with confidence using LYIK’s <br />
                    Secure & Feature-rich Platform.
                  </Typography>
                </Box>

                <Box>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      navigate("/contact-us");
                    }}
                    sx={{
                      color: "primary.main",
                      border: "none",
                      textDecoration: "underline",
                      "& :hover": {},
                      px: 1,
                      py: 0,
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>Contact Us</Typography>
                    <KeyboardArrowRight color="primary.main" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* way more then typ solution*/}
      <Box
        sx={{
          width: "100%",
          pt: { xs: 0, sm: 5, md: 7 },
          pb: 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
            fontWeight={600}
            textAlign={"center"}
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span style={{ fontWeight: "700", color: "#7E2D8A" }}>
              Way more than
            </span>{" "}
            your typical Digital Onboarding Solution
          </Typography>
        </Box>

        <Box>
          {/* Smart Cards */}

          {isMobile &&
            cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: { xs: "auto", md: "470px" },
                  gap: 2,
                  pb: 4,
                  pt: { xs: 0, sm: 5, md: 6 },
                  position: "relative",
                  mt: { xs: 3, sm: 5, md: 25 },
                }}
              >
                <Grid
                  size={{ xs: 12, sm: 4, md: 3.2 }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // border: "1px solid red",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography
                    color="primary.main"
                    fontSize={{ xs: "24px", sm: "22px", md: "26px" }}
                    fontWeight={700}
                    textAlign="center"
                  >
                    {card.title}
                  </Typography>

                  <Box
                    component="img"
                    src={`/images/${card.imgPath2}`}
                    alt={card.title}
                    style={{
                      width: "93%",
                      // height: "170px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>

                <Box sx={{ width: "100%", px: { xs: 1.5, sm: 4, md: 6 } }}>
                  <Grid container spacing={1}>
                    {card.data.map((step, idx) => (
                      <Grid
                        size={{ xs: 6 }}
                        key={idx}
                        display="flex"
                        justifyContent="center"
                      >
                        <Card
                          sx={{
                            py: 1.5,
                            px: 1,
                            width: "100%",
                            maxWidth: { xs: "100%", sm: "240px" },
                            textAlign: "center",
                            height: "200px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            borderTop: "1px solid",
                            borderRight: "7px solid ",
                            borderLeft: "1px solid ",
                            borderBottom: "7px solid",
                            borderColor: "primary.main",
                          }}
                        >
                          <Typography
                            fontSize={{ xs: 16, sm: 20, md: 22 }}
                            fontWeight={600}
                            sx={{ mb: 1, lineHeight: 1.2 }}
                            color="text.primary"
                          >
                            {step.title}
                          </Typography>
                          <Typography fontSize={{ xs: 12, sm: 15, md: 16 }}>
                            {step.description.map((part, i) =>
                              typeof part === "string" ? (
                                part
                              ) : (
                                <span style={{ fontWeight: 600 }} key={i}>
                                  {part.bold}
                                </span>
                              )
                            )}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            ))}

          {/* : cards.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    // height: { xs: "auto", md: "calc(100vh - 64px)" },
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    height: "470px",
                    gap: 25,
                    pb: 8,
                    pt: { xs: 3, sm: 5, md: 6 },
                    position: "relative",
                    mt: { xs: 3, sm: 5, md: 25 },
                  }}
                >
                  <Box
                    sx={{
                      width: "84%",
                      height: "450px",
                      position: "absolute",
                      borderRadius: "16px",
                      border: "1px solid #7E2D8A",
                      top: "0%",
                      zIndex: -1,
                    }}
                  ></Box>

                  <Box
                    sx={{
                      width: "21%",
                      display: "flex",
                      justifyContent: "center",
                      position: "absolute",
                      top: "-150px",
                      // px: { xs: 1, sm: 20, md: 6 },
                      backgroundColor: "white",
                      zindex: 999,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "90%", md: "100%", lg: "223px" },
                        height: "223px",
                        display: "flex",
                        flexDirection: "column",

                        borderRadius: 999,
                        borderTop: "1px solid",
                        borderRight: "7px solid ",
                        borderLeft: "1px solid ",
                        borderBottom: "7px solid",
                        borderColor: "primary.main",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "white",
                      }}
                    >
                      <Typography
                        color="text.primary"
                        fontSize={{ xs: "18px", sm: "22px", md: "26px" }}
                        fontWeight={700}
                        textAlign={"center"}
                        // sx={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {card.title}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        height: "12px",
                        width: "12px",
                        backgroundColor: "#7E2D8A",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "65%",
                        right: "0",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        height: "12px",
                        width: "12px",
                        backgroundColor: "#7E2D8A",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "65%",
                        left: "0",
                      }}
                    ></Box>
                  </Box>

                  <Box sx={{ mx: "auto", px: { xs: 1, sm: 20, md: 17 } }}>
                    <Grid container spacing={3} sx={{ width: "100%" }}>
                      {card.data.map((step, index) => (
                        <Grid
                          size={{ xs: 12, sm: 6, md: 3 }} // 1 card in a row from mobile to tablet, 2 cards in a row from tablet to desktop,
                          // 4 cards in a row from tablet up
                          key={index}
                          display="flex"
                          justifyContent="center"
                        >
                          <Card
                            sx={{
                              p: { xs: 2, sm: 2.5 },
                              maxWidth: { xs: "90%", sm: "240px" },
                              textAlign: "center",
                              height: { xs: 200, sm: 280, md: 290 },
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                              borderTop: "1px solid",
                              borderRight: "7px solid ",
                              borderLeft: "1px solid ",
                              borderBottom: "7px solid",
                              borderColor: "primary.main",
                            }}
                          >
                            <Typography
                              fontSize={{ xs: 18, sm: 20, md: 22 }}
                              fontWeight={600}
                              sx={{ mb: 1, lineHeight: 1.2 }}
                              color="text.primary"
                            >
                              {step.title}
                            </Typography>
                            <Typography
                              fontSize={{ xs: 14, sm: 15, md: 16 }}
                              fontWeight={400}
                            >
                              {step.description.map((part, index) =>
                                typeof part === "string" ? (
                                  part
                                ) : (
                                  <span style={{ fontWeight: 600 }} key={index}>
                                    {part.bold}
                                  </span>
                                )
                              )}
                            </Typography>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              )) */}
        </Box>
      </Box>

      {!isMobile && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            mt: 4,
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                // border: "1px solid red",
                width: "72%",
                height: "616px",
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 == 0 ? "flex-start" : "flex-end",
                justifyContent: index % 2 == 0 ? "flex-start" : "flex-start",

                // backgroundImage: {
                //   sm: `url(/images/${card.imgPath})`,
                // },
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                borderRadius: 3,
                gap: 2,
                mx: "auto",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: {
                    xs: "url(/images/mobile_1.png)",
                    sm: `url(/images/${card.imgPath})`,
                  },
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "absolute",
                  zIndex: -1,
                  borderRadius: 3,
                }}
              >
                {" "}
              </Box>

              <Box
                sx={{
                  width: "59%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "2%",
                  mt: "4%",
                }}
              >
                <Typography
                  color="white"
                  fontSize={{ xs: "18px", sm: "22px", md: "36px" }}
                  fontWeight={700}
                  textAlign={"center"}
                  // sx={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {card.title}
                </Typography>
              </Box>

              <Box sx={{ width: "59%", px: { xs: 1, sm: 20, md: "6%" } }}>
                <Grid container spacing={2} sx={{ width: "100%" }}>
                  {card.data.map((step, index) => (
                    <Grid
                      size={{ xs: 12, sm: 6, md: 6 }} // 1 card in a row from mobile to tablet, 2 cards in a row from tablet to desktop,
                      // 4 cards in a row from tablet up
                      key={index}
                      display="flex"
                      justifyContent="center"
                    >
                      <Card
                        sx={{
                          p: { xs: 2, sm: 2.5 },
                          maxWidth: { xs: "90%", sm: "100%" },
                          textAlign: "center",
                          height: { xs: 200, sm: 280, md: 260 },
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          borderTop: "1px solid",
                          borderRight: "7px solid ",
                          borderLeft: "1px solid ",
                          borderBottom: "7px solid",
                          borderColor: "primary.main",
                        }}
                      >
                        <Typography
                          fontSize={{ xs: 18, sm: 20, md: 22 }}
                          fontWeight={600}
                          sx={{ mb: 1, lineHeight: 1.2 }}
                          color="text.primary"
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          fontSize={{ xs: 14, sm: 15, md: 16 }}
                          fontWeight={400}
                        >
                          {step.description.map((part, index) =>
                            typeof part === "string" ? (
                              part
                            ) : (
                              <span style={{ fontWeight: 600 }} key={index}>
                                {part.bold}
                              </span>
                            )
                          )}
                        </Typography>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* omni channel journey progress bar carousel*/}
      {/* <Box
        sx={{
          // minHeight: "calc(100vh - 58px)",
          width: "100%",
          backgroundImage: "url(/images/double_gradient_grid.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: { xs: 3, md: 5 },
            py: { xs: 3, sm: 5, md: 7 },
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: "24px", sm: "28px", md: "36px" }}
            fontWeight={600}
            textAlign={"center"}
            mb={2}
          >
            Why Choose{" "}
            <span
              style={{
                marginLeft: isMobile ? "4px" : "12px",
                marginRight: isMobile ? "4px" : "12px",
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src="/images/lyik-logo.svg"
                style={{ height: isMobile ? "22px" : "30px" }}
              />
            </span>{" "}
            for your Onboarding Services?
          </Typography>

          <CarouselWithProgress data={carouselData} />
        </Box>
      </Box> */}

      {/* Industries we cater */}

      <Box
        sx={{
          // height: { xs: "auto", md: "calc(100vh - 64px)" },
          width: "100%",
          // border: "1px solid red",
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 5.3 },
            py: { xs: 3, md: 7.5 },
            px: { xs: 2, md: 14 },
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: "24px", sm: "28px", md: "36px" }}
            fontWeight={600}
            textAlign="center"
          >
            Industries We Cater to
          </Typography>

          {/* Auto-Scrolling Image Row */}
        {/* <SlidingCarousel imageUrls={imageUrls} />
        </Box> */}
      </Box>

      {/* questions Content <FrequentlyAskedQuestions /> */}

      {/* Onboarding using email*/}

      <OnboardingForm />
    </Box>
  );
};

export default Onboarding;
