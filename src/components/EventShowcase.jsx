import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function EventShowcase({ eventData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ pt: { xs: 6, sm: 8, md: 10 }, width: "100%" }}>
      <Box px={{ xs: 2, sm: 4, md: 14 }} sx={{ width: "100%" }}>
        {/* Header */}
        <Typography
          color="secondary"
          fontWeight={500}
          fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }}
        >
          {eventData.venue.name}, {eventData.venue.city}
        </Typography>
        <Typography
          color="#75258B"
          fontWeight={500}
          fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }}
        >
          {eventData.date}
        </Typography>
        <Typography
          fontWeight={700}
          fontSize={{ xs: "2rem", sm: "2.2rem", md: "2.5rem" }}
          color="primary"
          gutterBottom
        >
          {eventData.eventName}
        </Typography>

        {/* Tags */}
        <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap" }}>
          {eventData.venue.buttons.map((item, index) => (
            <Button
              key={index}
              variant="contained"
              size="small"
              sx={{
                background: "#F3EFFF",
                color: "text.primary",
                mr: 1,
                mb: 1,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Description */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              fontWeight={500}
              fontSize={{ xs: "0.95rem", sm: "1rem" }}
              color="primary"
              lineHeight={1.8}
            >
              {eventData.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              fontWeight={500}
              fontSize={{ xs: "0.95rem", sm: "1rem" }}
              color="primary"
              lineHeight={1.8}
            >
              {eventData.boothInfo}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Image Row */}

      {isMobile ? (
        <Box sx={{ overflow: "hidden", mt: 6 }}>
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "scroll 30s linear infinite",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-50%)" },
              },
            }}
          >
            {[...eventData.images, ...eventData.images].map((url, index) => (
              <Box
                key={index}
                component="img"
                src={url}
                alt={`event-${index}`}
                sx={{
                  height: 350,
                  width: 180,
                  objectFit: "cover",
                  mr: 1,
                  // borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            mt: { xs: 6, sm: 8, md: 10 },
            px: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              // flexWrap: "wrap",
              width: "100%",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {[...eventData.images].map((url, index) => (
              <Box
                key={index}
                component="img"
                src={url}
                alt={`event-${index}`}
                sx={{
                  height: 350,
                  width: `${Math.floor(100 / eventData.images.length)}%`,
                  // maxWidth: "350px",
                  objectFit: "cover",
                  boxShadow: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    // transform: "scale(1.2)",
                    width: 350, // or you can use 'transform: scale(1.5)' for scaling effect
                    zIndex: 1,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* About Section */}
      <Box px={{ xs: 2, sm: 4, md: 14 }} sx={{ width: "100%" }}>
        <Box
          sx={{ mt: { xs: 8, sm: 10, md: 12 }, pb: { xs: 8, sm: 12, md: 16 } }}
        >
          <Grid
            container
            spacing={4}
            alignContent={{ xs: "center", sm: "flex-start" }}
          >
            <Grid
              size={{ xs: 12, sm: 5 }}
              alignContent={{ xs: "center", sm: "flex-start" }}
            >
              <Box
                component="img"
                src={eventData.aboutConvention.logo}
                alt={`event-logo`}
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: 320,
                  objectFit: "cover",
                  // boxShadow: 2,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 7 }} sx={{}}>
              <Typography
                fontWeight={700}
                fontSize={{ xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }}
                color="#EB4F89"
                lineHeight={1.8}
                mb={2}
              >
                {eventData.aboutConvention.heading}
              </Typography>
              <Typography
                fontWeight={500}
                fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
                color="primary"
                lineHeight={1.6}
              >
                {eventData.aboutConvention.text}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
