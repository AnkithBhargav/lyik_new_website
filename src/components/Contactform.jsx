import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AlertBar from "./ui/AlertBar";
import { sendContactMail, sendEmail } from "../api/sendEmail";

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const initialState = {
    name: "",
    companyName: "",
    email: "",
    phone: "",
    designation: "",
    state: "",
    industry: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // let response = await fetch("/api/sendgrid-contact", {
      //   method: "POST",
      //   body: JSON.stringify(formData),
      // });

      let response = await sendContactMail(formData);
      // Assuming sendEmail is a function that handles the API call

      if (response.ok) {
        setFormData(initialState);
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
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: "An error occurred. Please try again later.",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
        }}
      >
        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Name <span style={{ color: "#D32F2F" }}>*</span>
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange("name")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
                fontSize: "1rem",
              },
              "& .MuiInputBase-input": {
                fontSize: "1rem", // <-- change this value as needed
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Company Name <span style={{ color: "#D32F2F" }}>*</span>
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Company Name"
            value={formData.companyName}
            onChange={handleChange("companyName")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
                fontSize: "1rem",
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Work Email ID <span style={{ color: "#D32F2F" }}>*</span>
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Work Email ID"
            value={formData.email}
            onChange={handleChange("email")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
                fontSize: "1rem",
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Business Phone <span style={{ color: "#D32F2F" }}>*</span>
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Business Phone"
            value={formData.phone}
            onChange={handleChange("phone")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Designation
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Designation"
            value={formData.designation}
            onChange={handleChange("designation")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            State or Province
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter State or Province"
            value={formData.state}
            onChange={handleChange("state")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
                fontSize: "1rem",
              },
            }}
          />
        </Box>

        <Box>
          <Typography
            ml={2}
            variant="subtitle1"
            fontWeight="bold"
            color="purple"
            mb={0.5}
          >
            Industry
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Enter Industry"
            value={formData.industry}
            onChange={handleChange("industry")}
            sx={{
              "& .MuiOutlinedInput-root": {
                px: 0.5,
                borderRadius: "12px",
                py: 0.5,
                fontSize: "1rem",
              },
            }}
          />
        </Box>
        {/* Question Field */}
        <Box>
          <Typography
            fontWeight="600"
            color="primary.main"
            ml={0.5}
            mb={0.5}
            fontSize={{ xs: "14px", sm: "16px" }}
          >
            Write Your Message
          </Typography>
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange("message")}
            placeholder="Type out your message"
            fullWidth
            multiline
            rows={isMobile ? 2 : 3}
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                py: 0,
              },
              "& .MuiInputBase-input": {
                color: "text.primary",
                py: { xs: 1, md: 1.5 },

                "::placeholder": {
                  color: "#888",
                  fontSize: { xs: "14px", md: "16px" },
                },
              },
            }}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "purple",
              color: "white",
              fontWeight: "500",
              fontSize: "1rem",
              borderRadius: "50px",
              py: 1,
              mt: 2,
              "&:hover": {
                backgroundColor: "#5e2a84",
              },
            }}
          >
            Submit Request
          </Button>
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

export default ContactForm;
