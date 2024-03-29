import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import HeaderSection from "@/components/HeaderSection";
import OurSevicesSection from "@/components/OurSevicesSection";
import LatestProjects from "@/components/LatestProjects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div id="Home" className="bg-black h-auto text-white overflow-hidden">
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * {
          font-family: Poppins, sans-serif;
        }
      `}</style>
      
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <OurSevicesSection />
      <LatestProjects />
      <ContactSection />
      
    </div>
  )
}
