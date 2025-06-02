import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import {
  Download,
  Link as LinkIcon,
  PlayArrowRounded,
} from "@mui/icons-material";
import { DownloadIcon } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Getting Started Guide",
      description:
        "Learn how to set up and configure the Material-UI theme for your project.",
      type: "Documentation",
      tags: ["Beginner", "Setup"],
    },
    {
      title: "Component Playground",
      description:
        "Interactive playground for experimenting with UI components and their props.",
      type: "Tool",
      tags: ["Interactive", "Development"],
    },
    {
      title: "Responsive Design Patterns",
      description:
        "Best practices for creating responsive layouts with Material-UI.",
      type: "Guide",
      tags: ["Design", "Responsive"],
    },
    {
      title: "Theme Customization",
      description:
        "In-depth guide on customizing Material-UI themes for your brand.",
      type: "Tutorial",
      tags: ["Theming", "Styling"],
    },
    {
      title: "Performance Optimization",
      description:
        "Learn how to optimize your Material-UI application for better performance.",
      type: "Guide",
      tags: ["Performance", "Advanced"],
    },
    {
      title: "Accessibility Guidelines",
      description:
        "Comprehensive guide to making your UI components accessible to all users.",
      type: "Documentation",
      tags: ["Accessibility", "Best Practices"],
    },
  ];

  const videoItems = Array(4).fill(null);

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
            sm: "calc(90vh - 58px)", // Slightly smaller on tablets
            md: "calc(90vh - 58px)",
          },
          width: "100%",
          backgroundImage: "url(/images/resources.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "calc(90vh - 58px)",
              sm: "calc(90vh - 58px)",
              md: "calc(90vh - 58px)",
            },
            background: "linear-gradient(to top, #7E2D8A99, transparent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "90%" },
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
              Resources
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "16px", md: "18px" }}
              letterSpacing={{ xs: "", sm: "", md: "1px" }}
              lineHeight={{ xs: "", sm: "", md: "172%" }}
              fontWeight={600}
            >
              Discover career opportunities with us and become part of a team
              shaping the future of digital innovation
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* cards */}

      <Box
        sx={{
          px: { xs: 2, sm: 14 },
          py: 4,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          color="text.primary"
          fontSize={{ xs: "16px", sm: "18px", md: "32px" }}
          letterSpacing={{ xs: "", sm: "", md: "1px" }}
          lineHeight={{ xs: "", sm: "", md: "142%" }}
          fontWeight={800}
          textAlign={"center"}
        >
          Title
        </Typography>
        <Typography
          color="text.primary"
          fontSize={{ xs: "14px", sm: "16px", md: "16px" }}
          letterSpacing={{ xs: "", sm: "", md: "1px" }}
          lineHeight={{ xs: "", sm: "", md: "172%" }}
          fontWeight={300}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum
          dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet,
          consectetur adipiscing eli.
        </Typography>
        <Grid container spacing={2.5}>
          {resources.map((_, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "480px",
                  // height: "100%",
                  position: "relative",
                  borderBottom: "8px solid #7E2D8A",
                }}
              >
                {/* Placeholder Image */}
                <Box
                  sx={{
                    height: 250,
                    backgroundColor: "#f2f2f2",
                    backgroundImage:
                      "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                    backgroundSize: "40px 40px",
                    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                  }}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    00 Month, 0000
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mt: 1.5,
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Add Resource Title
                      </Typography>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Add Resource Title
                      </Typography>
                    </Box>

                    <IconButton size="small" color="secondary">
                      <DownloadIcon />
                    </IconButton>
                  </Box>

                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli...
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, py: 1 }}>
                  <Link
                    href="#"
                    underline="hover"
                    color="primary"
                    fontSize={14}
                  >
                    View Document
                  </Link>
                </CardActions>

                {/* Bottom Purple Line */}
                {/* <Box
                  sx={{
                    height: 6,
                    backgroundColor: "transparent",
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    background:
                      "linear-gradient(to right, transparent, #8338ec, transparent)",
                  }}
                /> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box width="100%" py={4} px={10}>
        <Divider sx={{ width: "100%", color: "black" }} />
      </Box>

      {/* Video */}

      <Box
        sx={{
          px: { xs: 2, sm: 14 },
          py: 4,
          width: "100%",
        }}
      >
        <Grid container spacing={9}>
          {videoItems.map((_, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
              <Card
                elevation={2}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "8px solid #7E2D8A",
                }}
              >
                {/* Video Placeholder */}
                <Box
                  sx={{
                    height: 280,
                    position: "relative",
                    backgroundColor: "#f2f2f2",
                    backgroundImage:
                      "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                    backgroundSize: "40px 40px",
                    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
                  }}
                >
                  <PlayArrowRounded
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: 48,
                      color: "#7B2CBF", // Purple play icon
                    }}
                  />
                </Box>

                <CardContent>
                  <Typography fontWeight="bold" variant="subtitle1">
                    Add Resource Title
                  </Typography>
                  <Typography fontWeight="bold" variant="subtitle1">
                    Add Resource Title
                  </Typography>
                </CardContent>

                {/* Bottom Purple Curve */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Resources;
