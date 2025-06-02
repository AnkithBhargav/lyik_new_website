import {
  Drawer,
  List,
  Divider,
  ListItemButton,
  ListItemText,
  Box,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const MobileMenu = ({ items, open, onClose }) => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleSubmenuToggle = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": { width: 280, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ py: 2 }}>
        <List>
          {items.map((item) => (
            <Box key={item.label}>
              {item.children ? (
                <>
                  <ListItemButton
                    onClick={() => handleSubmenuToggle(item.label)}
                    sx={{
                      "&.active": {
                        backgroundColor: "primary.main",
                        color: "white",
                      },
                      "&:hover": {
                        backgroundColor: "#F3Efff",
                      },
                    }}
                  >
                    <ListItemText
                      sx={{ ".MuiTypography-root": { fontWeight: 600 } }}
                      primary={item.label}
                    />
                    {openSubmenus[item.label] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                    in={openSubmenus[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          component={RouterNavLink}
                          to={child.path}
                          onClick={onClose}
                          sx={{
                            pl: 4,
                            pr: 4,
                            "&.active": {
                              backgroundColor: "primary.main",
                              color: "white",
                            },
                          }}
                        >
                          {child.icon && (
                            <ListItemIcon>{child.icon}</ListItemIcon>
                          )}
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={RouterNavLink}
                  to={item.path}
                  onClick={onClose}
                  sx={{
                    "&.active": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontWeight: 600 } }}
                    primary={item.label}
                  />
                </ListItemButton>
              )}
              <Divider sx={{ my: 0.5 }} />
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
