import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DeadlineSection from "@/components/DeadlineSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProcessSection from "@/components/ProcessSection";
import JobsSection from "@/components/JobsSection";
import InscricaoSection from "@/components/InscricaoSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import PrivacyPopup from "@/components/PrivacyPopup";
const Index = () => {
  return <div className="min-h-screen my-[7px] py-0">
      <HeroSection />
      <AboutSection />
      <DeadlineSection />
      <RequirementsSection />
      <ProcessSection />
      <JobsSection />
      <InscricaoSection />
      <FinalCTASection />
      <Footer />
      <PrivacyPopup />
    </div>;
};
export default Index;