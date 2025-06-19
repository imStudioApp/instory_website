
import { Button } from "@/components/ui/button";

const TemplateGallery = () => {
  const categories = [
    { name: "Beauty", color: "from-pink-400 to-rose-400", count: "150+" },
    { name: "Fashion", color: "from-purple-400 to-indigo-400", count: "120+" },
    { name: "Food", color: "from-orange-400 to-red-400", count: "100+" },
    { name: "Travel", color: "from-blue-400 to-cyan-400", count: "80+" },
    { name: "Fitness", color: "from-green-400 to-teal-400", count: "90+" },
    { name: "Business", color: "from-gray-600 to-gray-800", count: "70+" }
  ];

  const templatePreviews = [
    { id: 1, category: "Beauty", gradient: "from-pink-300 via-purple-300 to-indigo-300" },
    { id: 2, category: "Fashion", gradient: "from-purple-400 via-pink-400 to-red-400" },
    { id: 3, category: "Food", gradient: "from-orange-300 via-yellow-300 to-green-300" },
    { id: 4, category: "Travel", gradient: "from-blue-400 via-cyan-400 to-teal-400" },
    { id: 5, category: "Fitness", gradient: "from-green-400 via-blue-400 to-purple-400" },
    { id: 6, category: "Business", gradient: "from-gray-600 via-gray-700 to-gray-800" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover templates designed for every niche and style. From minimalist to bold, we've got you covered.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} templates</p>
              </div>
            </div>
          ))}
        </div>

        {/* Template Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {templatePreviews.map((template) => (
            <div 
              key={template.id}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${template.gradient} shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center`}>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Browse All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;
