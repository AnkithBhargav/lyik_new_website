import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SwapCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cardWidth = isMobile ? 280 : isTablet ? 400 : 502;
  const cardMargin = 16;
  const totalCardWidth = cardWidth + cardMargin;

  const imageUrls = [
    {
      url: "/images/bfsi111.svg",
      text: "BFSI",
      path: "/verticals/banking&financial-services",
    },
    {
      url: "/images/travel_carousel.svg",
      text: "Travel Logistics",
      path: "/verticals/travel-logistics",
    },
    {
      url: "/images/public.svg",
      text: "Public Sector",
      path: "/verticals/public-sectors",
    },
  ];

  const items = [...imageUrls, ...imageUrls]; // duplicate for looping

  useEffect(() => {
    if (!isMobile) return; // ✅ only activate on mobile

    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (isHovered) return;

      const maxIndex = Math.floor(container.scrollWidth / totalCardWidth) - 1;
      currentIndex = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1;

      container.scrollTo({
        left: currentIndex * totalCardWidth,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, totalCardWidth, isMobile]);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = Math.round(container.scrollLeft / totalCardWidth);
    currentIndex =
      direction === "left" ? Math.max(currentIndex - 1, 0) : currentIndex + 1;

    container.scrollTo({
      left: currentIndex * totalCardWidth,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: cardWidth,
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          width: "100%",
          gap: `${cardMargin}px`,
        }}
      >
        {items.map(({ url, text, path }, index) => (
          <Box
            key={index}
            onClick={() => navigate(path)}
            sx={{
              minWidth: cardWidth,
              height: { xs: 220, sm: 300, md: 396 },
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: 2,
              borderBottom: "10px solid",
              borderColor: "primary.main",

              flexShrink: 0,
              display: "flex",
              alignItems: "flex-end",
              boxShadow: 2,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to top,rgba(0, 0, 0, 0.8), transparent 60%)",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Typography
                color="white"
                fontSize="1rem"
                fontWeight={700}
                mb={1}
                textAlign="left"
                width="70%"
              >
                {text}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "999px",
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                  height: "41px",
                  width: "100%",
                  backgroundColor: "rgba(126, 45, 138)",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    mr: 1,
                  }}
                >
                  Read More
                </Typography>
                <KeyboardArrowRight sx={{ color: "white" }} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SwapCarousel;
