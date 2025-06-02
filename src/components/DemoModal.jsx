import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  IconButton,
  styled,
} from "@mui/material";
import { CloseSharp } from "@mui/icons-material";
import AlertBar from "./ui/AlertBar";
import { sendDemoModal, sendEmail } from "../api/sendEmail";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "rgba(0, 0, 0, 0.4)",
  overflowY: "auto", // for mobile
  p: 2,
};

const contentStyle = {
  width: { xs: "100%", sm: "90%", md: "80%" },
  maxWidth: 1000,
  maxHeight: { xs: "100%", md: 720 },
  borderRadius: 2,
  border: "2px solid #5a2474",
  borderBottomWidth: "10px",
  py: { xs: 3.5, md: 5 },
  px: { xs: 2, sm: 4, md: 8 },
  backgroundColor: "white",
  boxShadow: 24,
  position: "relative",
  overflowY: "auto",
};

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "999px",
  textTransform: "none",
  padding: "10px 16px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#5a2474",
  },
}));

export default function DemoModal({ open, onClose }) {
  const initialState = {
    name: "",
    designation: "",
    company: "",
    email: "",
    phone: "",
  };
  const [form, setForm] = useState(initialState);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // or 'error'
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", form);
  //   onClose(); // optionally close modal
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // let response = await fetch("/api/sendgrid-contact", {
      //   method: "POST",
      //   body: JSON.stringify(form),
      // });

      let response = await sendDemoModal(form);

      if (response.ok) {
        setForm(initialState);
        setSnackbar({
          open: true,
          message: "Form submitted successfully!",
          severity: "success",
        });
        onClose();
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
      <Modal open={open} onClose={onClose} sx={modalStyle}>
        <Box sx={contentStyle}>
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseSharp />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h5"
            fontWeight={600}
            textAlign="center"
            fontSize={{ xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }}
            mb={1}
          >
            Schedule a Call
          </Typography>
          <Typography
            variant="body2"
            textAlign="center"
            fontSize={{ xs: "0.9rem", md: "1rem" }}
            fontWeight={300}
            mb={3}
          >
            Ready to explore what we can do for you?
            <br /> Book a personalised demo and we'll reach out to find the
            perfect time to connect.
          </Typography>

          {/* Content Grid */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="/images/demo.jpg"
                alt="Demo"
                sx={{
                  width: "100%",
                  height: { xs: "20vh", sm: 350, md: 495 },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} alignContent={"center"}>
              <Stack spacing={{ xs: 1, sm: 2, md: 2 }}>
                {[
                  { name: "name", label: "Name", placeholder: "Enter Name" },
                  {
                    name: "designation",
                    label: "Designation",
                    placeholder: "Enter Designation",
                  },
                  {
                    name: "company",
                    label: "Company",
                    placeholder: "Enter Company Name",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    placeholder: "Enter Email Address",
                  },
                  {
                    name: "phone",
                    label: "Mobile Number",
                    placeholder: "Enter Mobile Number",
                  },
                ].map((field) => (
                  <Box key={field.name}>
                    <Typography
                      fontWeight="600"
                      color="primary.main"
                      ml={1.6}
                      mb={0.5}
                      fontSize={{ xs: "14px", sm: "16px" }}
                    >
                      {field.label}
                    </Typography>
                    <TextField
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      fullWidth
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-input": {
                          color: "text.primary",
                          py: { xs: 1, md: 1.2 },
                          "::placeholder": {
                            color: "#888",
                            fontSize: { xs: "14px", md: "16px" },
                          },
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
              <Box mt={{ xs: 2, sm: 4 }}>
                <SubmitButton fullWidth onClick={handleSubmit}>
                  Submit
                </SubmitButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <AlertBar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </>
  );
}
