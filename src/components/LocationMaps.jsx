import { Box, Typography } from "@mui/material";
import React from "react";

const LocationMaps = () => {
  const locations = [
    {
      country: "India",
      city: "Bangalore",
      company: "LYIK Technologies Private Limited",
      address:
        "No.65, Chaithanya Deepa, Bhuvaneshwari Nagar, C.V.Raman.Nagar Post, Bangalore – 560093",
      flag: "/images/india.svg", // replace with actual image path
    },
    {
      country: "The Netherlands",
      city: "",
      company: "LYIK Technologies B.V.",
      address: "Lindelaan 26, 1775 GK Middenmeer, The Netherlands",
      flag: "/images/netherlands.svg", // replace with actual image path
    },
  ];
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        pt: { xs: 4, sm: 6, md: 10 },
      }}
    >
      <Typography
        fontSize={{ xs: "1.5rem", sm: "2rem", md: "2rem" }}
        textAlign={"center"}
        fontWeight={900}
        color="text.primary"
        sx={{ fontFamily: "'Inter', sans-serif" }}
      >
        Find Us Here
      </Typography>
      <Box
        sx={{
          width: "100%",
          py: { xs: 4, sm: 4 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            flex: 2,
            maxWidth: "819px",
            minHeight: { xs: "200px", sm: "40vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "flex-start",
          }}
        >
          <img
            src="/images/purple_map.svg"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "left",

            // gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: "space-between",
              alignItems: "left",
              gap: { xs: 3, sm: 5 },
              py: 3,
              pl: 1.5,
              width: { xs: "100%", sm: "80%" },
              // minHeight: { xs: "auto", sm: "50vh" },
            }}
          >
            {locations.map((item, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: { xs: 0.2, sm: ".5" },
                }}
              >
                <Box>
                  <img
                    src={item.flag}
                    width="58px"
                    height="45px"
                    style={{ borderRadius: "8px" }}
                  />
                </Box>
                <Typography
                  fontSize={{ xs: "1rem", sm: "1.3rem", md: "1.3rem" }}
                  fontWeight={700}
                  color="primary.main"
                  textAlign={"left"}
                >
                  {item.city && `${item.city},`} {item.country}
                </Typography>
                <Typography
                  fontSize={{ xs: "0.875rem", sm: "1rem", md: "1rem" }}
                  color="primary.main"
                  fontWeight={500}
                  textAlign={"left"}
                >
                  {item.company}
                </Typography>
                <Typography
                  fontSize={{ xs: "0.8rem", sm: ".875rem", md: ".875rem" }}
                  color="text.primary"
                  fontWeight={500}
                  lineHeight={"140%"}
                  textAlign={"left"}
                >
                  {item.address}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationMaps;
