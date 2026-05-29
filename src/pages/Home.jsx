import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ResearchHighlights from "../components/home/ResearchHighlights";
import LegalExpertise from "../components/home/LegalExpertise";
import Publications from "../components/home/Publications";
import Testimonials from "../components/home/Testimonials";
import MediaAppearances from "../components/home/MediaAppearances";
import BlogInsights from "../components/home/BlogInsights";
import ContactCTA from "../components/home/ContactCTA";
import TailoredSolutions from "../components/home/TailoredSolutions";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home | UnyimeAbasi");
  return (
    <>
      <Hero />
      <AboutPreview />
      <ResearchHighlights />
      <LegalExpertise />
      <Publications />
      <Testimonials />
      <TailoredSolutions />
      <ContactCTA />
    </>
  );
}
