import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/WhoWeAre";
import Resources from "../pages/Resources";
import NotFound from "../pages/NotFound";
import Verticals from "../pages/Verticals";
import Onboarding from "../pages/Onboarding";
import Faq from "../pages/Faq";
import OurPartners from "../pages/OurPartners";
import { Suspense } from "react";
import Loader from "../components/ui/Loader";
import VerticalsOption from "../pages/VerticalsOption";
import AboutOption from "../pages/AboutOption";
import EventsOption from "../pages/EventsOption";
import EventPage from "../pages/EventPage";
import JobApplicationPage from "../pages/JobApplicationPage";
import ContactUs from "../pages/ContactUs";
import Events from "../pages/Events";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/verticals/*" element={<VerticalsOption />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/about/:value" element={<AboutOption />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route
          path="/job-application/senior-dev"
          element={<JobApplicationPage />}
        />

        {/* 404 page */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
