import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/ui/Loader";
import "./App.css";
import ScrollToTop from "./components/layout/ScrolltoTop";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<Loader />}>
          <ScrollToTop />
          <AppRoutes />
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
