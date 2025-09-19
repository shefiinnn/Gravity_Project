import { Header } from "@/components//ui/Header";
import TopSection from "@/components/ui/TopSection";
import { TradingMarquee } from "@/components/ui/TradingMarquee";
import { StatSection } from "@/components/ui/StatSection";
import SecondSection from "@/components/ui/SecondSection";
import { PartnersSection } from "@/components/ui/PartnersSection";
import { TestimonialsSlider } from "@/components/ui/TestimonialSection";
import {Join} from "@/components/ui/Join";
import { ContactSection } from "./components/ui/Contact";
import { Footer } from "@/components/ui/Footer";


function App() {
  return (
    <main className="min-h-screen bg-[#111111]">
    
      <Header />
      <TopSection />
      <TradingMarquee/>
      <SecondSection/>
      <StatSection/>
      <PartnersSection/>
      <TestimonialsSlider/>
      <Join/>
      <ContactSection/>
      <Footer/>

    </main>
  );
}

export default App;
