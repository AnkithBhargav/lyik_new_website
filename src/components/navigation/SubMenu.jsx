import { KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, Chip, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const SubMenu = ({ navLinks }) => {
  const { title, options } = navLinks;

  const location = useLocation();
  console.log("location", location.pathname);

  return (
    <Box
      sx={{
        width: "100%",
        // border: "1px solid blue",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: { xs: "flex-start", sm: "center" },

        background:
          "linear-gradient(to bottom, rgba(44, 44, 44, 0.77), rgba(0, 0, 0, 0))",
        // background: "white",
        // boxShadow: "none",
        // borderBottom: "none",
        // outline: "none",

        gap: { xs: 1, sm: 2, md: 4 },
        px: { xs: 2, sm: 4, md: 16 },
        position: "fixed",
        top: "56px",
        zIndex: 999,
        py: 2,
        borderBottomRadius: 1,
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography
          fontWeight={600}
          fontSize={"1.2rem"}
          color={"secondary.main"}
          sx={{ whiteSpace: "nowrap", mr: 2 }}
        >
          {title}
        </Typography>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",

          gap: { xs: 1, sm: 2, md: 4 },
          // flexWrap: "wrap",
        }}
      >
        {" "}
        {options.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Link
              href={item.path}
              underline="none"
              sx={{
                display: "block",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
            >
              <Button
                key={index}
                variant="outlined"
                sx={{
                  color: "white",
                  px: { xs: 1, sm: 1.5, md: 1.5 },
                  py: 0.1,
                  borderColor:
                    // location.pathname === item.path ? "primary.main" :
                    "white",
                  borderRadius: 10,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "0.875rem",
                  },
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  backgroundColor:
                    location.pathname === item.path ? "primary.main" : "",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                {item.label}
              </Button>

              {/* <Typography
              variant="subtitle1"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "#252424",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {item.label}
            </Typography> */}
            </Link>
            {/* <KeyboardArrowRight sx={{ color: "#252424" }} /> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SubMenu;
