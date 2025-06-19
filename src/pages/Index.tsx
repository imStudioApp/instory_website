
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TemplateGallery from "@/components/TemplateGallery";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TemplateGallery />
      <CallToAction />
    </div>
  );
};

export default Index;
