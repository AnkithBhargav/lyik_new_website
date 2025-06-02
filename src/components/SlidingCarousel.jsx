import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SlidingCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const imageUrls = [
    {
      url: "/images/bfsi_2.webp",
      text: "BFSI",
      path: "/verticals/banking&financial-services",
    },
    {
      url: "/images/travel_hero.webp",
      text: "Travel Logistics",
      path: "/verticals/travel-logistics",
    },
    {
      url: "/images/public_hero.webp",
      text: "Public Sector",
      path: "/verticals/public-sectors",
    },
  ];

  const items = [...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls];

  const cardWidth = 502 + 16;

  const [animationPlay, setAnimationPlay] = useState("running");

  useEffect(() => {
    setAnimationPlay(isHovered ? "paused" : "running");
  }, [isHovered]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    setAnimationPlay("paused"); // optional: pause animation

    if (direction === "left") {
      container.scrollTo({ left: 0, behavior: "smooth" });
      setScrollOffset(0);
    } else if (direction === "right") {
      const maxIndex = imageUrls.length - 1;
      const maxScroll = maxIndex * cardWidth;
      container.scrollTo({ left: maxScroll, behavior: "smooth" });
      setScrollOffset(maxScroll);
    }
  };

  return (
    <Box
      sx={{ position: "relative", width: "100%", overflow: "hidden" }}
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
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: `scroll 30s linear infinite`,
            animationPlayState: animationPlay,
            "@keyframes scroll": {
              "0%": { transform: "translateX(0%)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {items.map(({ url, text, path }, index) => (
            <Box
              key={index}
              onClick={() => navigate(path)}
              sx={{
                height: { xs: 220, sm: 300, md: 396 },
                width: { xs: 280, sm: 400, md: 502 },
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 2,
                borderBottom: "10px solid",
                borderColor: "primary.main",
                mr: { xs: 1.5, sm: 2 },
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
                  px: { xs: 2, sm: 3, md: 5 },
                  py: { xs: 2, sm: 3, md: 5 },
                }}
              >
                <Typography
                  color="white"
                  fontSize={{ xs: "1rem", sm: "1.25rem", md: "1.5rem" }}
                  fontWeight={700}
                  mb={1}
                  textAlign="left"
                  width={"70%"}
                >
                  {text}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "999px",
                    fontWeight: 700,
                    px: { xs: 2, sm: 3 },
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
                      fontSize: { xs: "0.85rem", sm: "1rem" },
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
    </Box>
  );
};

export default SlidingCarousel;
