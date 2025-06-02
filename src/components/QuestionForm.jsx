import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// Styled buttons
const TopButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.dark,
  fontWeight: "bold",
  borderRadius: "999px",
  padding: "10px 24px",
  textTransform: "none",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "#eee",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  borderRadius: "999px",
  padding: "10px 24px",
  textTransform: "none",
  alignSelf: "flex-end",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "#5a2474",
  },
}));

export default function QuestionForm() {
  const [form, setForm] = useState({ name: "", email: "", question: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // Add API call or form processing here
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        px: { xs: 2, sm: 3 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top section */}
      <Paper
        sx={{
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 3 },
          bgcolor: "primary.main",
          borderRadius: 2,
          mb: 3,
          textAlign: "center",
        }}
      >
        <Typography
          fontSize={{ xs: "20px", sm: "26px" }}
          color="white"
          fontWeight="600"
        >
          Have a question?
        </Typography>
        <Typography
          fontSize={{ xs: "14px", sm: "18px" }}
          color="white"
          fontWeight="400"
        >
          Have our experts reach out to you
        </Typography>
      </Paper>

      {/* Form section */}
      <Paper
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 2,
          border: "1px solid #e2e2e2",
        }}
      >
        <Stack spacing={2}>
          {/* Name Field */}
          <Box>
            <Typography
              fontWeight="600"
              color="primary.main"
              ml={0.5}
              mb={0.5}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              Name
            </Typography>
            <TextField
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              fullWidth
              variant="outlined"
              sx={{
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

          {/* Email Field */}
          <Box>
            <Typography
              fontWeight="600"
              color="primary.main"
              ml={0.5}
              mb={0.5}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              Email Address
            </Typography>
            <TextField
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              fullWidth
              variant="outlined"
              sx={{
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

          {/* Question Field */}
          <Box>
            <Typography
              fontWeight="600"
              color="primary.main"
              ml={0.5}
              mb={0.5}
              fontSize={{ xs: "14px", sm: "16px" }}
            >
              Write Your Question
            </Typography>
            <TextField
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Type out your question/query"
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

          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </Stack>
      </Paper>
    </Box>
  );
}
