import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ConsultationModal from "./components/modals/ConsultationModal";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useState } from "react";

export default function App() {
  const [consultOpen, setConsultOpen] = useState(false);
  return (
    <div className="bg-white text-slate-900">
      <ScrollToTop />
      <Navbar onOpenConsult={() => setConsultOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={<Home onOpenConsult={() => setConsultOpen(true)} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <ConsultationModal
        open={consultOpen}
        onClose={() => setConsultOpen(false)}
      />
    </div>
  );
}
