import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import SlidingCarousel from "./SlidingCarousel";
import OnboardingForm from "./OnboardingForm";
import SubMenu from "./navigation/SubMenu";
import CarouselWithProgress from "./CarouselWithProgress";
import VideoPlayer from "./VideoPlayer";
import DemoModal from "./DemoModal";
import { useState } from "react";

// removed
// {
//     url: "/images/travel_carousel.svg",
//     text: "Travel Logistics",
//   },
//   {
//     url: "/images/public.svg",
//     text: "Public Sector",
//   },

const imageUrls = [
  {
    url: "/images/bfsi111.svg",
    text: "Banking, Financial Services & Insurance",
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

const features = [
  {
    title: "Rapid, High-Volume Customer Onboarding",
    img: "/images/b1.svg",
  },
  {
    title: "Instant Verification with Digital KYC, KRA, CKYC, ReKYC",
    img: "/images/b2.svg",
  },
  {
    title: "Secure Online POI & POA Verifications",
    img: "/images/b3.svg",
  },
  {
    title:
      "Ensure Precise Customer Authentication with Liveness Check, Video KYC and Geo-Tagging",
    img: "/images/b4.svg",
  },
  {
    title:
      "Online Verification of IDs like Aadhaar & PAN with DigiLocker Integration",
    img: "/images/b5.svg",
  },
  {
    title: "Protean, NSDL and CDSL Integrations",
    img: "/images/b6.svg",
  },
  {
    title: "Swift Pennydrop Verification of Customer Bank Accounts",
    img: "/images/b7.svg",
  },
  {
    title: "Secure and Automated Form-filling with Pre-validated data",
    img: "/images/b8.svg",
  },
  {
    title: "Digitally Secure E-Sign",
    img: "/images/b9.svg",
  },
];

const BankFinancesServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  //  {
  //       label: "Travel Logistics",
  //       path: "/verticals/travel-logistics",
  //     },
  //     {
  //       label: "Public Sectors",
  //       path: "/verticals/public-sectors",
  //     },

  const navLinks = {
    title: "Verticals",
    options: [
      {
        label: "BFSI",
        path: "/verticals/banking&financial-services",
      },
    ],
  };
  const steps = [
    {
      title: "/images/image1.png",
      desc: "Enable Seamless Online KYC & Real-Time ID Verification",
    },
    {
      title: "/images/image2.png",
      desc: "Stay ahead of Evolving RBI Regulations",
    },
    {
      title: "/images/image3.png",
      desc: "Achieve Scalable and Agile Digital Operations",
    },
    {
      title: "/images/image4.png",
      desc: "Launch Unlimited Service Journeys & Cut Turnaround Time to Minutes",
    },
  ];

  const cardData = [
    {
      title: "End-to-End Journeys",
      description: [
        "Deploy SmartForm-based Digital Journeys instantly across Web, Mobile & Branches using Trusted APIs, ",
        { bold: "AI/NLP/OCR" },
        ", Business Rules Engine (BRE), KYC Integrations, Smart Workflows & Backend Integration, on a Single Unified Platform.",
      ],
    },
    {
      title: "Smart Forms",
      description: [
        "Transform Product Forms into dynamic, context-aware Smart Forms in minutes; easily update live forms, ",
        { bold: "personalise experiences" },
        ", & generate audit-ready PDFs.",
      ],
    },
    {
      title: "Superb Customer Experience",
      description: [
        "Empower customers with ",
        { bold: "DIY Digital Journeys" },
        " initiated from the Smart FormCentre on the Web/App, or via QR code scans, creating paperless branches & seamless switching across Web, Mobile & Branches to start & resume their journey effortlessly.",
      ],
    },
    {
      title: "Highly Scalable Platform",
      description: [
        "Meet the growing serviceability demands of an expanding customer base without the need for additional resources at Branches with ",
        { bold: "LYIK’s highly scalable platform" },
        ".",
      ],
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
      <SubMenu navLinks={navLinks} />
      {/* Top Content */}
      <Box
        sx={{
          height: {
            xs: "calc(90vh - 58px)", // Full height on mobile
            sm: "calc(82vh - 58px)", // Original on desktop
          },
          width: "100%",
          backgroundImage: {
            xs: "url(/images/bfsi_2.png)",
            sm: "url(/images/bfsi_2.webp)",
          },
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // border: "1px solid red",

            height: {
              xs: "calc(90vh - 58px)",
              sm: "calc(82vh - 58px)",
            },
            // background:
            //   "linear-gradient(to top,rgba(126, 45, 138, 0.68), 50%, transparent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
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
              zIndex: 99, // Ensure text is above the gradient
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
              {isMobile
                ? "BFSI"
                : "Banking, Financial Services & Insurance (BFSI)"}
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              Unlock greater Cross-Sell and Upsell opportunities with the LYIK
              Platform.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Steps & Cards */}
      {/* <Box
        sx={{
          pb: { xs: 4, sm: 6, md: 8 },
          pt: { xs: 4, sm: 6 },
          mx: "auto",
          width: { xs: "100%", sm: "90%", md: "80%" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
            },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {steps.map((step, index) => (
            <Card
              key={index}
              elevation={10}
              sx={{
                py: { xs: 2, sm: 3, md: 4 },
                px: { xs: 1, sm: 3, md: 4 },
                width: { xs: "42%", sm: "23%" },
                textAlign: "center",
                height: { xs: "203px", sm: "300px" },
                // height: "223px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 2, sm: 4 },
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "60px", sm: "92px" },
                  height: { xs: "60px", sm: "92px" },
                  objectFit: "contain",
                }}
                src={step.title}
                alt={`Step ${index}`}
              />
              <Typography fontSize={{ xs: 14, sm: 16 }} fontWeight={300}>
                {step.desc}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box> */}

      {/* steps & Cards */}
      <Box
        sx={{
          // height: { xs: "auto", md: "calc(100vh - 64px)" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 6,
          backgroundImage: "url(/images/gird_gradient.svg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
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
            sx={{ fontFamily: "'Inter'" }}
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
            Omni-Channel Digital Onboarding Platform for BFSI
          </Typography>
        </Box>

        <Box sx={{ mx: "auto", px: { xs: 1, sm: 20, md: 17 } }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {cardData.map((step, index) => (
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
                    height: { xs: 200, sm: 320, md: 380 },
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
                  <Box
                    sx={{
                      height: "18%",
                      display: "flex",
                      // border: "1px solid red",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      fontSize={{ xs: 18, sm: 20, md: 22 }}
                      fontWeight={600}
                      sx={{ mb: 1, lineHeight: 1.2 }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
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

      {/* <Box
        sx={{
          m: 5,
          height: "500px",
          width: "100%",
          backgroundImage: {
            xs: "url(/images/bfsi333.png)",
            sm: "url(/images/bfsi333.png)",
          },
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          border: "1px solid red",
        }}
      ></Box> */}

      {/* video Content */}
      <Box
        sx={{
          // minHeight: { xs: "", md: "calc(100vh - 64px)" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: { xs: 4, md: 0 },
          gap: { xs: 0, md: 3 },
          px: { xs: 2, sm: 4, md: 12 },
          mb: { xs: 0, md: 14 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            pt: { xs: 2, md: 5 },
            gap: 1,
          }}
        >
          <Typography
            color="text.primary"
            sx={{
              fontFamily: { md: "'Inter'" },
              fontSize: { xs: "24px", sm: "32px", md: "48px" },
              fontWeight: { xs: 600, sm: 800, md: 900 },
              textAlign: { xs: "center", md: "left" },
              lineHeight: { xs: "120%", md: "140%" },
              width: "100%",
            }}
          >
            Omni-Channel Customer Onboarding Platform{" "}
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", sm: "75%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              color="#252424"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                letterSpacing: "1px",

                textAlign: { xs: "center", md: "left" },
              }}
            >
              Explore how we help banks streamline digital workflows—from
              onboarding to operations
            </Typography>
          </Box>
          <Box
            sx={{
              py: { xs: 1, md: 4 },
              // width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {!isMobile && (
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                  px: 3,
                  py: 1,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  borderRadius: 10,
                }}
              >
                See It in Action
              </Button>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            pt: { xs: 2, md: 6 },
            gap: 4,
          }}
        >
          <Card
            sx={{
              width: "100%",
              textAlign: "center",
              // height: "50vh",
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
            }}
          >
            {/* Video wrapper */}
            <VideoPlayer
              videoPath={
                "/images/LYIKOmniChannelDigitalOnboardingPlatform(BFSI)-190425.mp4"
              }
            />
          </Card>

          {isMobile && (
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              sx={{
                px: 3,
                py: 1,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                borderRadius: 10,
              }}
            >
              See It in Action
            </Button>
          )}
        </Box>
      </Box>

      {/* omni channel journey progress bar carousel*/}
      <Box
        sx={{
          // minHeight: "calc(100vh - 58px)",
          width: "100%",
          backgroundImage: "url(/images/double_gradient_grid.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: { xs: 2, md: 5 },
            py: { xs: 3, sm: 5, md: 7 },
          }}
        >
          <Typography
            color="text.primary"
            fontSize={{ xs: "24px", sm: "28px", md: "36px" }}
            fontWeight={600}
            textAlign={"center"}
            mb={2}
            sx={{ fontFamily: "'Inter'" }}
          >
            Why Choose{" "}
            <span
              style={{
                marginLeft: isMobile ? "4px" : "10px",
                marginRight: isMobile ? "4px" : "10px",
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
      </Box>

      {/* Why Choose LYIK Platform */}
      {/* <Box
        sx={{
          width: "100%",
          minHeight: "calc(100vh - 64px)",
          backgroundImage: "url(/images/double_gradient_grid.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          px: { xs: 2, sm: 4, md: 12 }, // responsive horizontal padding
          py: { xs: 4, md: 6 },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            color="text.primary"
            sx={{
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Why Choose
            <span
              style={{
                marginLeft: isMobile ? "4px" : "10px",
                marginRight: isMobile ? "4px" : "10px",
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src="/images/lyik-logo2.png"
                // height="30px"
                style={{ height: isMobile ? "22px" : "30px" }}
              />
            </span>
            for your Onboarding Services?
          </Typography>

          <Typography
            gutterBottom
            color="text.primary"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 300,
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            Upgrade to real-time and personalised Omni-Channel onboarding with
            LYIK Omni-Channel Platform.
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
              pt: 4,
            }}
          >
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: "100%", sm: "80%", md: "45%" },
                  // background: "#F3EFFF",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 2,
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  p: 3,
                }}
              >
                <Typography
                  fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
                  fontWeight={600}
                  textAlign="left"
                  lineHeight={1.3}
                >
                  {card.title}
                </Typography>
                <Typography
                  fontSize={{ xs: "13px", sm: "14px" }}
                  fontWeight={300}
                  textAlign="left"
                  lineHeight={1.4}
                >
                  {card.desc}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box> */}

      {/* Background Image */}

      {/* Cards under each step */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", sm: "space-between" },
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          px: { xs: 2, sm: 4, md: 10 },
          width: { xs: "100%", sm: "80%" },
          pt: 12,
          gap: { xs: 8, sm: 3, md: 12 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            color="text.primary"
            fontSize={"2rem"}
            fontWeight={700}
            sx={{ fontFamily: "'Inter', sans-serif" }}
          >
            Digital KYC with the LYIK Platform
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "80%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 2 }}>
            {features.map((step, index) => (
              <Grid
                size={{ xs: 6, sm: 6, md: 4 }}
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
                    maxWidth: { xs: "199px", sm: "199px" },
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    position: "relative",
                    mb: { xs: 10, sm: 10 },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: { xs: "-40px", sm: "-60px" },
                      zIndex: 99,
                      width: { xs: 75, sm: 100 },
                      height: { xs: 75, sm: 100 },
                    }}
                  >
                    <img src={step.img} width="100%" height="100%" />
                  </Box>
                  <Card
                    key={index}
                    sx={{
                      px: 2,
                      pt: { xs: 4, sm: 4 },
                      pb: 1,

                      width: "100%",
                      textAlign: "center",
                      height: { xs: "144px", sm: "134px" },
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
                      fontSize={{ xs: 12, sm: 12 }}
                      fontWeight={500}
                    >
                      {step.title}
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
      </Box>

      {/* questions Content */}
      {/* <FrequentlyAskedQuestions /> */}

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
            fontWeight={700}
            textAlign="center"
          >
            Industries We Cater to
          </Typography>

          {/* Auto-Scrolling Image Row */}
        {/* <SlidingCarousel imageUrls={imageUrls} />
        </Box> */}
      </Box>

      {/* Onboarding using email*/}
      <OnboardingForm />
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default BankFinancesServices;
