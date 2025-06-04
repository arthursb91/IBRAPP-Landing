
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DeadlineSection from "@/components/DeadlineSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProcessSection from "@/components/ProcessSection";
import JobsSection from "@/components/JobsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DeadlineSection />
      <RequirementsSection />
      <ProcessSection />
      <JobsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
