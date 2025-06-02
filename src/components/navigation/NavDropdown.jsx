import React from "react";
import {
  Box,
  Grid,
  Paper,
  Link,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const NavDropdown = ({ item }) => {
  const { children } = item;
  return (
    <Box
      //   elevation={4}
      sx={{
        position: "absolute",
        top: 64,
        left: 0,
        width: "100%",
        bgcolor: "background.paper",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        background:
          "linear-gradient(to right, white 0%, rgb(239, 235, 252) 30%, white 60%)",

        zIndex: -1,
      }}
    >
      <Box px={4} py={2}>
        <Box sx={{ display: "flex", flexDirection: "column", px: 12 }}>
          {/* <Typography fontSize={"1.5rem"} fontWeight={700} color="text.primary">
            {label}
          </Typography>
          <Divider width="92.5%" /> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 4,
            }}
          >
            {" "}
            {children.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: 10,
                    backgroundColor: "primary.main",
                    opacity: "0.7",
                  }}
                ></Box>
                <Link
                  href={item.path}
                  underline="none"
                  sx={{
                    display: "block",
                    p: 1.5,
                    borderRadius: 2,
                    transition: "background-color 0.2s ease, color 0.2s ease",
                    // "&:hover": {
                    //   bgcolor: "grey.100",
                    //   color: "primary.main",
                    // },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "text.primary",
                      "&:hover": {
                        color: "primary.main",
                      },
                      letterSpacing: "1px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          {/* <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {" "}
            <Button
              variant="contained"
              sx={{ px: 2, py: 0.5, borderRadius: 10 }}
            >
              {" "}
              Let’s Talk
            </Button>{" "}
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavDropdown;
