import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CardContent,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const UploadField = ({ label, required }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#7D287D",
          mb: 1,
          fontSize: { xs: "14px", sm: "16px" },
        }}
      >
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      <Box
        sx={{
          border: "2px dashed #D3D3D3",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", color: "#B0B0B0" }}>
          <CloudUpload sx={{ mr: 1 }} />
          <Typography fontSize={{ xs: "12px", sm: "14px" }}>
            Upload an image
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7D287D",
            textTransform: "none",
            borderRadius: "24px",
            px: 3,
            fontSize: { xs: "12px", sm: "14px" },
            "&:hover": {
              backgroundColor: "#6C1F6C",
            },
          }}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

const JobApplicationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const containerPadding = isMobile ? 2 : isTablet ? 6 : 14;
  const sectionPaddingTop = isMobile ? 4 : 6;
  const headingFontSize = isMobile ? "1.2rem" : "1.5rem";
  const subheadingFontSize = isMobile ? "1rem" : "1.2rem";

  return (
    <Box sx={{ px: containerPadding, py: 6, width: "100%" }}>
      <Grid container spacing={isMobile ? 2 : 6}>
        {/* Left Column - Job Description */}
        <Grid size={{ xs: 12, sm: 7 }} alignContent="flex-start">
          <Box px={isMobile ? 2 : 4}>
            <CardContent>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    px: 1,
                    py: 0.5,
                    border: "1px solid #7E2D8A",
                    color: "primary.main",
                    borderRadius: 10,
                    fontSize: { xs: "10px", sm: "12px" },
                  }}
                >
                  Technology
                </Typography>
              </Box>
              <Typography
                variant="h5"
                fontWeight={600}
                fontSize={headingFontSize}
              >
                Senior ML Engineer
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                fontSize={{ xs: "12px", sm: "14px" }}
              >
                Bangalore, India
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Job Type Job Type Job Type
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontSize={subheadingFontSize}>
                  Minimum Qualifications
                </Typography>
                <ul style={{ fontSize: isMobile ? "12px" : "14px" }}>
                  <li>Bachelor’s degree or equivalent practical experience.</li>
                  <li>
                    1 year of experience with software development in one or
                    more programming languages (e.g. Python, C, C++, Java,
                    JavaScript).
                  </li>
                  <li>
                    1 year of experience with data structures or algorithms.
                  </li>
                  <li>
                    1 year of experience with Android application development.
                  </li>
                </ul>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontSize={subheadingFontSize}>
                  About the Job
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: "pre-line",
                    fontSize: isMobile ? "12px" : "14px",
                  }}
                >
                  LYIK’s software engineers develop next-generation
                  technologies...
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" fontSize={subheadingFontSize}>
                  Roles and Responsibilities
                </Typography>
                <ul style={{ fontSize: isMobile ? "12px" : "14px" }}>
                  <li>
                    Work with product managers and UX designers to scope and
                    build new features.
                  </li>
                  <li>
                    Architect the full application stack with UX, database, and
                    system performance.
                  </li>
                  <li>
                    Collaborate with the Wear OS platform team to influence the
                    design of new APIs.
                  </li>
                  <li>
                    Interact with carrier and OEM partners to build solutions.
                  </li>
                </ul>
              </Box>
            </CardContent>
          </Box>
        </Grid>

        {/* Right Column - Form */}
        <Grid size={{ xs: 12, sm: 5 }} alignContent="flex-start">
          <Box px={isMobile ? 2 : 4} pt={sectionPaddingTop}>
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={subheadingFontSize}
                mb={2}
              >
                Apply Now to be a part of a revolution
              </Typography>
              <Grid container spacing={2}>
                {[
                  {
                    label: "First Name",
                    required: true,
                    placeholder: "Enter First Name",
                  },
                  {
                    label: "Last Name",
                    required: true,
                    placeholder: "Enter Last Name",
                  },
                  {
                    label: "Phone Number",
                    required: true,
                    placeholder: "Enter Phone Number",
                  },
                  {
                    label: "Email Address",
                    required: true,
                    placeholder: "Enter Email Address",
                  },
                  {
                    label: "LinkedIn Profile URL",
                    required: true,
                    placeholder: "Enter LinkedIn Profile URL",
                  },
                  {
                    label: "Current Designation",
                    required: true,
                    placeholder: "Enter Current Designation",
                  },
                  {
                    label: "Area(s) Of Interest",
                    placeholder: "Enter Area(s) Of Interest",
                  },
                  {
                    label: "Domain Expertise",
                    placeholder: "Enter Domain Expertise",
                  },
                ].map((field, index) => (
                  <Grid size={{ xs: 12, md: 12 }} key={index}>
                    <Box>
                      <Typography
                        ml={2}
                        variant="subtitle1"
                        fontWeight="bold"
                        color="purple"
                        mb={0.5}
                        fontSize={{ xs: "12px", sm: "14px" }}
                      >
                        {field.label}
                      </Typography>
                      <TextField
                        size="small"
                        fullWidth
                        placeholder={field.placeholder}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            px: 0.5,
                            borderRadius: "12px",
                            py: 0.5,
                          },
                          "& .MuiInputBase-input": {
                            fontSize: { xs: "12px", sm: "14px" },
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}

                <Grid size={{ xs: 12, md: 12 }}>
                  <Box>
                    <Typography
                      ml={1}
                      variant="subtitle1"
                      fontWeight="bold"
                      color="purple"
                      mb={0.5}
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Current CTC
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">₹</InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 12 }}>
                  <Box>
                    <Typography
                      ml={1}
                      variant="subtitle1"
                      fontWeight="bold"
                      color="purple"
                      mb={0.5}
                      fontSize={{ xs: "12px", sm: "14px" }}
                    >
                      Expected CTC
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">₹</InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <UploadField label="Cover Letter" />
                  <UploadField label="Resume/CV" required />
                </Grid>

                <Grid size={12} alignContent={"center"} alignItems={"center"}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        borderRadius: "24px",
                        px: 6,
                        py: 1,
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      Submit Application
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobApplicationPage;
