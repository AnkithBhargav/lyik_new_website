import { useRef } from "react";
import {
  Box,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Collapse,
} from "@mui/material";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavDropdown from "./NavDropdown";
import { KeyboardArrowUp } from "@mui/icons-material";

const DesktopMenu = ({ items, setActiveDropdown, activeDropdown }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const handleDropdownToggle = (label) => {
    setActiveDropdown(label);
  };

  return (
    <Box
      ref={dropdownRef}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.label}
          onMouseEnter={() => item.children && handleDropdownToggle(item.label)}
          onMouseLeave={() => item.children && setActiveDropdown(null)}
        >
          {item.children ? (
            <>
              <Button
                // color="inherit"
                aria-haspopup="true"
                onClick={() => navigate(item.children[0].path)}
                endIcon={
                  activeDropdown ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )
                }
                sx={{
                  py: 2,
                  color: "black",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  fontSize: "1rem",

                  borderRadius: 0,
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderBottom: "5px solid",
                    borderColor: "primary.main",
                    color: "primary.main",
                  },
                  ...(item.children.some((child) =>
                    location.pathname.startsWith(child.path)
                  ) && {
                    borderBottom: "5px solid",
                    borderColor: "primary.main",
                    color: "primary.main",
                  }),

                  transition: (theme) =>
                    theme.transitions.create(
                      ["background-color", "border-color"],
                      {
                        duration: theme.transitions.duration.standard,
                      }
                    ),
                }}
              >
                {item.label}
              </Button>
              <Collapse
                in={activeDropdown === item.label}
                unmountOnExit
                timeout={250}
              >
                <NavDropdown item={item} />
              </Collapse>
            </>
          ) : (
            <Button
              id={item.label}
              component={RouterNavLink}
              to={item.path}
              color="inherit"
              sx={{
                py: 2,
                color: "text.primary",
                fontSize: "1rem",

                whiteSpace: "nowrap",

                fontWeight: 600,
                borderRadius: 0,
                borderBottom: "2px solid transparent",
                "&.active": {
                  borderBottom: "5px solid",
                  borderColor: "primary.main",
                  color: "primary.main",
                },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderBottom: "5px solid",
                  borderColor: "primary.main",
                },
                transition: (theme) =>
                  theme.transitions.create(
                    ["background-color", "border-color"],
                    {
                      duration: theme.transitions.duration.standard,
                    }
                  ),
              }}
            >
              {item.label}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default DesktopMenu;
