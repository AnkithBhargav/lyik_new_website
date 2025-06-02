import { Box, Typography, Link } from "@mui/material";
import { ExpandCircleDownOutlined } from "@mui/icons-material";

const CustomAccordion = ({ setOpen, item, id }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: item.open ? "" : "1px solid #E2E2E2",
        border: item.open ? "1px solid #E2E2E2" : "",
        borderRadius: item.open ? 2 : 0,
        backgroundColor: item.open ? "#F3EFFF" : "#fff",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pt: 1,
          px: { xs: 1, sm: 2 },
          cursor: "pointer",
        }}
        onClick={() => setOpen(id)}
      >
        {/* Question Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 1, sm: 2 },
            pb: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "22px" },
              fontWeight: 600,
              color: "primary.main",
              flex: 1,
              pr: 1,
            }}
          >
            {item.question}
          </Typography>
          <ExpandCircleDownOutlined
            sx={{
              fontSize: 24,
              color: "primary.main",
              transform: item.open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>

        {/* Answer Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            px: { xs: 1, sm: 2 },
            pb: 2,
          }}
        >
          {item.open ? (
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 400,
                color: "text.primary",
              }}
            >
              Answer: {item.answer}
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 400,
                color: "text.primary",
              }}
            >
              Answer: {item.answer.slice(0, 60)}...
              <Link
                underline="hover"
                sx={{
                  ml: 1,
                  color: "#3D58DB",
                  fontSize: "inherit",
                  cursor: "pointer",
                }}
              >
                Read More
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomAccordion;
