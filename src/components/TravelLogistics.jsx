import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import SlidingCarousel from "./SlidingCarousel";
import OnboardingForm from "./OnboardingForm";
import SubMenu from "./navigation/SubMenu";
import VideoPlayer from "./VideoPlayer";
import CarouselWithProgress from "./CarouselWithProgress";

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
  {
    title: "Know your Customer (KYC)",
    title2: "Know your Customer (KYC)",
    title1: "Streamline KYC Processes with LYIK’s Digital Onboarding Platform",
    para1:
      "The LYIK Platform is designed to streamline the KYC process, enabling your organisation to conduct comprehensive KYC checks and verifications in real-time. This ensures that your organisation can efficiently onboard customers while maintaining compliance with regulatory requirements. The platform's advanced features allow for seamless integration with various data sources, ensuring accurate and up-to-date information for KYC processes.",
    para2:
      "By leveraging the LYIK Platform, your organisation can enhance its KYC capabilities, reduce manual efforts, and improve overall efficiency in customer onboarding.",
    image: "/images/carousel7.webp",
  },
];

const imageUrls = [
  {
    url: "/images/bfsi111.svg",
    text: "Banking, Financial Services & Insurance",
  },
  {
    url: "/images/travel_carousel.svg",
    text: "Travel Logistics",
  },
  {
    url: "/images/handshake.png",
    text: "Public Sector",
  },
];

const TravelLogistics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navLinks = {
    title: "Verticals",
    options: [
      {
        label: "BFSI",
        path: "/verticals/banking&financial-services",
      },
      {
        label: "Travel Logistics",
        path: "/verticals/travel-logistics",
      },
      {
        label: "Public Sectors",
        path: "/verticals/public-sectors",
      },
    ],
  };
  const steps = [
    {
      title: "/images/image1.png",
      desc: "Enable Seamless Online KYC & Real-Time ID Verification",
    },
    {
      title: "/images/travel2.png",
      desc: "Increase acceptance rates driven by compliance-centric processing.",
    },
    {
      title: "/images/travel1.png",
      desc: "Personalise Customer Form Filling process",
    },
    {
      title: "/images/travel3.png",
      desc: "One-stop solution for multiple Visa Applications",
    },
  ];

  const cardData = [
    {
      title: "Adapt to Evolving Embassy Regulations",
      desc: "Simplify compliance, ensuring your onboarding, KYC and investment flows remain fully aligned with the latest rules.",
    },
    {
      title: "Unlimited Application Forms",
      desc: "Instantly deploy any number of service journeys at any time across all channels and expand your reach.",
    },
    {
      title: "Agile, Scalable, Cloud-Aware",
      desc: "Enable real-time Data Checks, Complex Field Validations, transformations, and Business Rule Injection without disrupting Runtime Infrastructure.",
    },
    {
      title: "Seamless Customer Onboarding",
      desc: "Process visa applications in minutes, not weeks. We streamline every step—from identity verification and document uploads to embassy-compliant forms—reducing manual checks and accelerating approvals.",
    },
    {
      title: "Paperless Offices",
      desc: "Fast-track transition to Digital Banking Units and paperless branches with end-to-end digital onboarding, services, and operations.",
    },
    {
      title: "Reduce TAT to Minutes",
      desc: "Enhance customer experience with rapid digital journeys by reducing turnaround times from days to just minutes.",
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
      }}
    >
      {/* Top Content */}
      <Box
        sx={{
          height: {
            xs: "calc(90vh - 58px)", // Full height on mobile
            sm: "calc(82vh - 58px)", // Original on desktop
          },
          width: "100%",

          backgroundImage: {
            xs: "url(/images/travel_logistics.png)",
            md: "url(/images/travel_hero.webp)",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "calc(90vh - 58px)",
              sm: "calc(82vh - 58px)", // Original on desktop
            },
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
              Travel Logistics
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "140%" }}
              fontWeight={600}
            >
              Empower customers with flexible, multi-channel experiences,
              including Self-Guided (DIY), Assisted Onboarding Journeys on Web
              and Mobile for seamless, anytime-anywhere access.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Steps & Cards */}
      <Box
        sx={{
          pb: { xs: 4, sm: 6, md: 8 },
          pt: { xs: 4, sm: 6 },
          mx: "auto",
          width: { xs: "100%", sm: "90%", md: "80%" },
        }}
      >
        {/* Cards under each step */}
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
      </Box>

      {/* video Content */}
      <Box
        sx={{
          minHeight: { xs: "", md: "calc(100vh - 64px)" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: { xs: 4, md: 6 },
          gap: { xs: 0, md: 0 },
          mb: 6,

          px: { xs: 2, sm: 4, md: 12 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            pt: { xs: 2, md: 10 },
            gap: 1,
          }}
        >
          <Typography
            color="text.primary"
            sx={{
              fontSize: { xs: "24px", sm: "28px", md: "32px" },
              fontWeight: 600,
              textAlign: { xs: "center", md: "left" },
              lineHeight: "120%",
              width: "100%",
            }}
          >
            Omni-Channel Customer Onboarding Platform{" "}
          </Typography>
          <Typography
            color="#252424"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              letterSpacing: "1px",

              textAlign: { xs: "center", md: "left" },
              width: "100%",
            }}
          >
            Explore how we help banks streamline digital
            <br /> workflows—from onboarding to operations
          </Typography>
          <Box
            sx={{
              py: { xs: 1, md: 4 },
              // width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {!isMobile && (
              <Button
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
            width: { xs: "100%", md: "60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            pt: { xs: 2, md: 10 },
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
          minHeight: "calc(100vh - 58px)",
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
      <Box
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
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Why Choose
            <span
              style={{
                marginLeft: 12,
                marginRight: 12,
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src="/images/lyik-logo2.png"
                // height="30px"
                style={{ height: isMobile ? "20px" : "30px" }}
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
      </Box>

      {/* questions Content */}
      <FrequentlyAskedQuestions />

      {/* Industries we cater */}

      <Box
        sx={{
          // height: { xs: "auto", md: "calc(100vh - 64px)" },
          width: "100%",
          // border: "1px solid red",
        }}
      >
        <Box
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
          <SlidingCarousel imageUrls={imageUrls} />
        </Box>
      </Box>

      {/* Onboarding using email*/}
      <OnboardingForm />
    </Box>
  );
};

export default TravelLogistics;
