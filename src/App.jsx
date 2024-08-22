import React from "react";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import { Feather } from "lucide-react";
import FeatureSection from "./assets/components/FeatureSection";
import WorkFlow from "./assets/components/WorkFlow";
import { Pricing } from "./assets/components/Pricing";
import Testimonials from "./assets/components/Testimonials";
import { Footer } from "./assets/components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
