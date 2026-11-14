import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { AboutSection, CTA, Experiences, FAQ, Featured, Reviews, TrustSection } from "./components/Sections";
import { ContactPage, PropertiesPage, PropertyDetails, ContactSection } from "./pages/PublicPages";
import { BookingList, Dashboard, ForgotPassword, Login, Profile, Register, Saved, Settings } from "./pages/AccountPages";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-blue-400"
      style={{ scaleX }}
    />
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function PublicLayout({ theme, toggleTheme, children }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <Featured />
      <Experiences />
      <AboutSection />
      <Reviews />
      <FAQ />
      <CTA />
      <ContactSection />
    </>
  );
}

function ProtectedRoute({ children }) {
  return localStorage.getItem("stayhaven-user") ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("stayhaven-theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("stayhaven-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "light" ? "dark" : "light");
  const publicPage = (page) => <PublicLayout theme={theme} toggleTheme={toggleTheme}>{page}</PublicLayout>;

  return (
    <>
      <ScrollToTop />
      <ProgressBar />
      <Toaster position="top-right" richColors theme={theme} />
      <Routes>
        <Route path="/" element={publicPage(<HomePage />)} />
        <Route path="/properties" element={publicPage(<PropertiesPage />)} />
        <Route path="/properties/:id" element={publicPage(<PropertyDetails />)} />
        <Route path="/experiences" element={publicPage(<><Experiences /><CTA /></>)} />
        <Route path="/about" element={publicPage(<><AboutSection /><Reviews /></>)} />
        <Route path="/contact" element={publicPage(<ContactPage />)} />
        <Route path="/faq" element={publicPage(<FAQ />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/bookings" element={<ProtectedRoute><BookingList /></ProtectedRoute>} />
        <Route path="/dashboard/history" element={<ProtectedRoute><BookingList history /></ProtectedRoute>} />
        <Route path="/dashboard/saved" element={<ProtectedRoute><Saved /></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="*" element={<div className="grid min-h-screen place-items-center p-6 text-center"><div><h1 className="font-heading text-4xl font-extrabold">Page not found</h1><Link to="/" className="mt-5 inline-block text-brand">Return home</Link></div></div>} />
      </Routes>
    </>
  );
}
