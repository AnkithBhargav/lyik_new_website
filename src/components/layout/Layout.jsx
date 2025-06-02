import { ReactNode, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DemoModal from "../DemoModal";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "1600px", // or 1600px if needed
        mx: "auto", // centers horizontally
        width: "100%",
      }}
    >
      <Navbar setOpen={setOpen} />
      <Box
        component="main"
        sx={{ width: "100%", flexGrow: 1, mx: "auto", pt: 0, pb: 4 }}
      >
        {children}
      </Box>
      <Footer />

      <DemoModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Layout;
