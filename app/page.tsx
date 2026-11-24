import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import About from "@/components/About";
import Stats from "@/components/Stats";
import BrandMark from "@/components/BrandMark";
import VisionMission from "@/components/VisionMission";
import Values from "@/components/Values";
import PhotoStrip from "@/components/PhotoStrip";
import Spaces from "@/components/Spaces";
import Campus from "@/components/Campus";
import VideoTour from "@/components/VideoTour";
import Curriculum from "@/components/Curriculum";
import Admissions from "@/components/Admissions";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* The hero pins itself and plays its zoom-out sequence internally. */}
      <Hero />

      <div className="relative z-10 bg-white">
        <Message />
        <About />
        <Stats />
        <BrandMark />
        <VisionMission />
        <Values />
        <Spaces />
        <PhotoStrip />
        <Campus />
        <VideoTour />
        <Curriculum />
        <Admissions />
        <Testimonials />
        <Faq />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
