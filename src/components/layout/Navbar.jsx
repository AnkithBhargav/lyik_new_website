import { useState, useEffect, cloneElement } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  useMediaQuery,
  useScrollTrigger,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import DesktopMenu from "../navigation/DesktopMenu";
import MobileMenu from "../navigation/MobileMenu";
import { navigationItems } from "../../data/navigationData";
import Logo from "../ui/Logo";

const Navbar = ({ setOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeDropdown, setActiveDropdown] = useState(null);

  const ElevationScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
      sx: {
        // width: "100%",
        backgroundColor: "background.paper",
        transition: "0.3s",
        borderBottomLeftRadius: activeDropdown ? 0 : 10,
        borderBottomRightRadius: activeDropdown ? 0 : 10,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      },
    });
  };

  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        maxWidth: "1600px", // or 1600px if needed
        mx: "auto", // centers horizontally
        width: "100%",
        mb: 8,
      }}
    >
      <ElevationScroll>
        <AppBar position={"fixed"}>
          <Toolbar
            sx={{
              width: "100%",

              zIndex: 1000,

              position: "relative",
              height: 64,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "85%" },
                "@media (min-width:900px) and (max-width:1100px)": {
                  width: "90%",
                },
                "@media (min-width:1100px) and (max-width:1300px)": {
                  width: "90%",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile ? "space-between" : "space-between",
                gap: {
                  xs: 1, // small gap for mobile
                  md: 0, // larger gap for desktops
                  lg: 0, // full gap for large desktops
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {isMobile && (
                  <IconButton
                    color="black"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}

                <RouterLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/lyik-logo.svg" />
                </RouterLink>
              </Box>
              {!isMobile && (
                <DesktopMenu
                  items={navigationItems}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              )}

              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                  borderRadius: 10,
                  border: "1px solid #252424",

                  "@media (min-width:900px) and (max-width:1100px)": {
                    ml: 1,
                  },
                  ml: { xs: 0, md: 2 },
                  px: { xs: 2, md: 2 },
                  py: { xs: 0.8, sm: 0.9 },
                  whiteSpace: "nowrap",
                  fontSize: ["0.75rem", "0.875rem", ".875rem"],
                }}
              >
                Schedule a Call
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      {isMobile && (
        <MobileMenu
          items={navigationItems}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      )}
    </Box>
  );
};

export default Navbar;
