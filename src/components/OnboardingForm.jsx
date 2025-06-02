import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  styled,
  InputBase,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import AlertBar from "./ui/AlertBar";
import { sendEmail, sendOnboardMail } from "../api/sendEmail";

const StyledInput = styled(InputBase)(() => ({
  fontSize: "14px",
  color: "white",
}));

const OnboardingForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // 'success' | 'error'
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.contact.trim()) {
      newErrors.contact = "Mobile number or email is required";
    } else if (
      !emailRegex.test(formData.contact.trim()) &&
      !phoneRegex.test(formData.contact.trim())
    ) {
      newErrors.contact = "Enter a valid mobile number or email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validate()) {
        // let response = await fetch("/api/sendgrid-contact", {
        //   method: "POST",
        //   body: JSON.stringify(formData),
        // });

        let response = await sendOnboardMail(formData);

        if (response.ok) {
          setFormData({ name: "", contact: "" });
          setSnackbar({
            open: true,
            message: "Form submitted successfully!",
            severity: "success",
          });
        } else {
          setSnackbar({
            open: true,
            message: "Failed to submit form. Please try again.",
            severity: "error",
          });
        }
      } else {
        setSnackbar({
          open: true,
          message: "Please fix the validation errors.",
          severity: "error",
        });
      }
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "An error occurred. Please try again later.",
        severity: "error",
      });
    }
  };

  const handleContactUs = () => {
    navigate("/contact-us");
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Box
        sx={{
          minHeight: { xs: "70vh", md: "calc(75vh - 64px)" },
          width: "100%",
          backgroundImage: `url('/images/Onboarding page.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          transform: "scaleX(-1)",
          mt: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transform: "scaleX(-1)",
            px: { xs: 2, sm: 4, md: 6 },
            pt: { xs: 1, sm: 0 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(128, 0, 128, 0.76), transparent)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              width: { xs: "100%", sm: "90%", md: "70%" },
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: { xs: 2, sm: 2, md: 8 },
              pt: { xs: 1, sm: 4, md: 6 },
            }}
          >
            <Typography
              color="white"
              fontSize={{ xs: "15px", sm: "19px", md: "22px", lg: "24px" }}
              fontWeight={600}
              textAlign="left"
              lineHeight={1.7}
              sx={{
                maxWidth: { xs: "100%", sm: "90%", md: "80%", lg: "70%" },
                mb: { xs: 1, sm: 2 },
              }}
            >
              With LYIK Platform, you do more than just deploying a Platform -
              you are Boosting your Business with unmatched speed of Digital Journeys.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                pb: { xs: 1, sm: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                width: "100%",
                position: "relative",
                zIndex: 99,
              }}
            >
              <Typography
                color="white"
                fontSize={{ xs: "16px", sm: "18px", md: "20px" }}
                fontWeight={700}
                textAlign="left"
                lineHeight={1.7}
                mb={{ xs: 1, sm: 2, md: 3 }}
              >
                Lets start the conversation.
              </Typography>
              <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
                sx={{ width: { xs: "100%", sm: "80%", md: "420px" } }}
              >
                <Box>
                  <Typography
                    fontWeight="600"
                    color="white"
                    ml={2}
                    mb={0.5}
                    fontSize={{ xs: "14px", sm: "16px" }}
                  >
                    Name
                  </Typography>
                  <StyledInput
                    fullWidth
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        border: "1px solid #A2A2A2",
                        py: { xs: 1, md: 1.5 },
                        px: 2,
                        borderRadius: 2,
                        "::placeholder": {
                          color: "#A2A2A2",
                          fontSize: { xs: "14px", md: "16px" },
                        },
                      },
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    fontWeight="600"
                    color="white"
                    ml={2}
                    mb={0.5}
                    fontSize={{ xs: "14px", sm: "16px" }}
                  >
                    Mobile Number / Email ID
                  </Typography>
                  <StyledInput
                    fullWidth
                    name="contact"
                    placeholder="Enter Mobile Number / Email ID"
                    value={formData.contact}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input": {
                        border: "1px solid #A2A2A2",
                        py: { xs: 1, md: 1.5 },
                        px: 2,
                        borderRadius: 2,
                        "::placeholder": {
                          color: "#A2A2A2",
                          fontSize: { xs: "14px", md: "16px" },
                        },
                      },
                    }}
                  />
                </Box>
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: { xs: 2, sm: 3 },
                    color: "primary.main",
                    backgroundColor: "white",
                    borderRadius: 10,
                    px: { xs: 2, sm: 4 },
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: ".875rem", sm: "1rem" },
                      whiteSpace: "nowrap",
                      m: 0,
                    }}
                  >
                    Submit Request
                  </Typography>
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleContactUs}
                  sx={{
                    mt: 3,
                    color: "primary.main",
                    border: "none",
                    textDecoration: "underline",
                    px: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: 600 }}>Contact Us</Typography>
                  <KeyboardArrowRight />
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>

      <AlertBar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </>
  );
};

export default OnboardingForm;