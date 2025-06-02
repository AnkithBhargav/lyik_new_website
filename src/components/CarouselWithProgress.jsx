import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Grid,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const DURATION = 4000; // ms per slide

const CarouselWithProgress = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isPaused) return;

    setProgress(0);
    progressRef.current = 0;

    intervalRef.current = setInterval(() => {
      progressRef.current += 100 / (DURATION / 100);
      setProgress(progressRef.current);

      if (progressRef.current >= 100) {
        clearInterval(intervalRef.current);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % data.length);
        }, 100);
      }
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [activeIndex, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Box sx={{ width: "100%", mx: "auto", px: { xs: 1.5, md: 2 } }}>
      <Grid container spacing={2}>
        {/* Left: Image + Title2 */}
        <Grid size={{ xs: 12, sm: 4, md: 3.2 }}>
          <Box pb={1}>
            {data.map(
              (item, index) =>
                index === activeIndex && (
                  <Typography
                    key={index}
                    sx={{
                      fontWeight: "600",
                      color: "primary.main",
                      fontSize: { xs: "1.2rem", sm: "1.2rem", md: "1.2rem" },
                      textAlign: "center",
                    }}
                  >
                    {item.title2}
                  </Typography>
                )
            )}
          </Box>
          {isMobile && (
            // On mobile: show only one progress bar for active slide
            <Box
              sx={{
                cursor: "pointer",
                width: "100%",
                minWidth: "150px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  width: "90%",
                  height: 6,
                  borderRadius: 5,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "primary.main",
                  },
                }}
              />
            </Box>
          )}
          <Card
            className="slide-image-container"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 350, md: 425 },
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {data.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.title}
                className={`slide-image ${
                  index === activeIndex
                    ? "active"
                    : index === (activeIndex - 1 + data.length) % data.length
                    ? "exit"
                    : ""
                }`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: index === activeIndex ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  opacity: index === activeIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
              />
            ))}
          </Card>
        </Grid>

        {/* Right: Titles + Progress Bars */}
        <Grid size={{ xs: 12, sm: 8, md: 8.8 }}>
          <Card
            sx={{
              width: "100%",
              height: { xs: "380px", md: "380px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              overflowY: { xs: "hidden", md: "" },
              p: { xs: 1, md: 2 },
            }}
          >
            {data.map(
              (item, index) =>
                index === activeIndex && (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "1009px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: { xs: "center", md: "flex-start" },
                      gap: { xs: 1, md: 1.5 },
                      p: { xs: 1, md: 2 },
                    }}
                  >
                    <Typography
                      sx={{
                        mb: { xs: 1, sm: 2 },
                        fontWeight: "600",
                        fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.5rem" },
                        textAlign: { xs: "center", md: "left" },
                        // border: "1px solid red",
                      }}
                    >
                      {item.title1}
                    </Typography>

                    <Typography
                      sx={{
                        mb: { xs: 1, md: 2 },
                        fontWeight: "300",
                        fontSize: { xs: ".875rem", md: "1rem" },
                        textAlign: "left",
                        lineHeight: "172%",
                        letterSpacing: "4%",
                      }}
                    >
                      {item.para1}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 2,
                        fontWeight: "300",
                        textAlign: "left",
                        fontSize: { xs: "1rem", md: "1rem" },
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      {item.para2}
                    </Typography>
                  </Box>
                )
            )}
          </Card>

          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: { xs: "row", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "flex-start",
              gap: 2,
              p: 2,
            }}
          >
            {!isMobile &&
              // On tablet+desktop: show all progress bars
              data.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  sx={{
                    cursor: "pointer",
                    mb: 2,
                    width: "145px",
                    minWidth: "100px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={
                      index < activeIndex
                        ? 100
                        : index === activeIndex
                        ? progress
                        : 0
                    }
                    sx={{
                      width: "100%",
                      height: 6,
                      borderRadius: 5,
                      backgroundColor:
                        index !== activeIndex ? "#e0e0e0" : undefined,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          index === activeIndex ? "primary.main" : "#e2e2e2",
                      },
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mt: 1,
                      fontSize: "0.8rem",
                      color:
                        index === activeIndex ? "primary.main" : "text.primary",
                    }}
                  >
                    {item.title2}
                  </Typography>
                </Box>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarouselWithProgress;
