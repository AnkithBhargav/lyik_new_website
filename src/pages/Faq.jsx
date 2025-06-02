import { Box, Typography } from "@mui/material";
import React from "react";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

const Faq = () => {
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
            md: "calc(80vh - 58px)", // Original on desktop
          },
          width: "100%",
          backgroundImage: "url(/images/bfsi111.svg)",
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
              md: "calc(80vh - 58px)",
            },
            background: "linear-gradient(to top, #7E2D8A99, transparent)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              display: "flex",
              flexDirection: "column",
              py: { xs: 4, sm: 6, md: 8 },
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
              FAQ
            </Typography>
            <Typography
              color="white"
              fontSize={{ xs: "16px", sm: "18px", md: "24px" }}
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

      {/* questions Content */}
      <FrequentlyAskedQuestions />
    </Box>
  );
};

export default Faq;
