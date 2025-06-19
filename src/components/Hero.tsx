
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3 animate-pulse" />
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              inStory
            </h1>
            <Sparkles className="w-8 h-8 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Create stunning Instagram story highlights that captivate your audience. 
            Beautiful templates, easy customization, perfect results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
            >
              Start Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm"
            >
              View Templates
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-80">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-80">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <div className="text-lg opacity-80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
