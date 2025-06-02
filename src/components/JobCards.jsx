import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  IconButton,
  Stack,
  Card,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";

const tags = [
  "Freshers",
  "Design",
  "Internship",
  "Leadership",
  "Consultancy",
  "Sales",
  "Marketing",
  "Technology",
];

const jobs = [
  { title: "Senior ML Engineer", location: "India : Bangalore" },
  { title: "Enterprise Python Developer", location: "India : Bangalore" },
  { title: "Senior ML Engineer", location: "India : Bangalore" },
  { title: "Senior ML Engineer", location: "India : Bangalore" },
  { title: "Senior ML Engineer", location: "India : Bangalore" },
];

export default function JobCards() {
  const navigate = useNavigate();

  return (
    <Box px={{ xs: 2, sm: 4, md: 8 }} py={{ xs: 4, sm: 6 }}>
      <Grid
        container
        spacing={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems="flex-start"
      >
        {/* Left Section */}
        <Grid size={{ xs: 12, sm: 5 }}>
          <Typography
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            fontWeight="600"
            textAlign={{ xs: "center", md: "left" }}
            mb={2}
          >
            Be a Part of Our Team
          </Typography>
          <Typography
            fontSize={{ xs: "0.9rem", sm: "1rem" }}
            fontWeight="300"
            color="text.primary"
            mb={3}
            textAlign={{ xs: "center", md: "left" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </Typography>

          {/* Tags */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                variant={tag === "Technology" ? "filled" : "outlined"}
                color="primary"
              />
            ))}
          </Box>
        </Grid>

        {/* Right Section - Scrollable */}
        <Grid size={{ xs: 12, sm: 7 }} mt={{ xs: 2, sm: 0 }}>
          <Box
            sx={{
              maxHeight: { xs: "none", md: "85vh" },
              overflowY: { xs: "visible", md: "auto" },
              pr: { xs: 0, md: 1 },
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome Safari
              },
            }}
          >
            <Stack spacing={2} py={2}>
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  onClick={() => navigate("/job-application/senior-dev")}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: "0.5px solid #E6E4E4",
                    background:
                      "linear-gradient(to right, transparent, #9c7aff1a 50%, transparent)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                    flexDirection: { xs: "column", sm: "row" },
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                    }}
                  >
                    <img src="/images/goto.svg" width="30px" height="30px" />
                  </IconButton>
                  <Box
                    px={{ xs: 0, sm: 1, md: 2 }}
                    mb={{ xs: 2, sm: 0 }}
                    sx={{ width: "100%" }}
                  >
                    <Chip
                      label="Technology"
                      color="primary"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                    <Typography
                      fontSize={{ xs: "1.2rem", sm: "1.2rem", md: "1.5rem" }}
                      fontWeight={700}
                    >
                      {job.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mt: 1,
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography
                        fontSize={{ xs: "0.875rem", sm: "rem" }}
                        fontWeight={400}
                      >
                        {job.location}
                      </Typography>
                      <Typography fontSize={"1rem"} fontWeight={400}>
                        DD/MM/YYYY
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
