
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-300 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-300 mr-2" />
            <Star className="w-8 h-8 text-yellow-300 mr-2" />
            <Star className="w-8 h-8 text-yellow-300 mr-2" />
            <Star className="w-8 h-8 text-yellow-300 mr-2" />
            <Star className="w-8 h-8 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Create Amazing 
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Story Highlights?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands of creators who trust inStory to make their Instagram profiles stand out. 
            Start creating professional highlights in minutes!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-10 py-5 text-xl font-bold rounded-full shadow-2xl"
            >
              Start Creating Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free to Start</div>
              <div className="text-lg opacity-80">No credit card required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Instant Download</div>
              <div className="text-lg opacity-80">Get your highlights immediately</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-lg opacity-80">We're here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
