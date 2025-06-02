import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";
import QuestionForm from "./QuestionForm";

const FrequentlyAskedQuestions = () => {
  const questionsData = [
    {
      question: "What is React?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ",
      open: false,
    },
    {
      question: "What is Material UI?",
      answer:
        "Material UI is a React component library implementing Google’s Material Design.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    {
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features without writing a class.",
      open: false,
    },
    // Add more questions here...
  ];
  const [questions, setQuestions] = useState(questionsData);

  const handleQuestionOpen = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, i) => ({
        ...q,
        open: i === index ? !q.open : false, // toggle current, close others
      }))
    );
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "white",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        color="black"
        fontSize={{ xs: "24px", sm: "30px", md: "36px" }}
        fontWeight={700}
        textAlign="center"
        mb={4}
      >
        Frequently Asked Questions
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 4, md: 6 },
          py: 2,
        }}
      >
        {/* Accordion Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            maxWidth: "742px",
            maxHeight: { xs: "none", md: "75vh" },
            overflowY: { xs: "visible", md: "auto" },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {questions.map((item, index) => (
              <CustomAccordion
                key={index}
                item={item}
                id={index}
                setOpen={handleQuestionOpen}
              />
            ))}
          </Box>
        </Box>

        {/* Form Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            maxWidth: "468px",
          }}
        >
          <QuestionForm />
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
