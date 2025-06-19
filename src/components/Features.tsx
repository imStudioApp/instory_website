
import { Palette, Zap, Download, Heart, Smartphone, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Templates",
      description: "Choose from hundreds of professionally designed templates that match your brand aesthetic."
    },
    {
      icon: Zap,
      title: "Quick & Easy",
      description: "Create stunning highlights in minutes with our intuitive drag-and-drop editor."
    },
    {
      icon: Download,
      title: "High Quality Export",
      description: "Download your highlights in perfect Instagram dimensions with crystal clear quality."
    },
    {
      icon: Heart,
      title: "Brand Consistency",
      description: "Maintain your brand identity with customizable colors, fonts, and styling options."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Create and edit your highlights on any device - desktop, tablet, or mobile."
    },
    {
      icon: Sparkles,
      title: "Trending Styles",
      description: "Stay current with the latest design trends and Instagram highlight styles."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose inStory?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create professional Instagram story highlights that engage your audience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
