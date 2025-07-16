
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            MD. NAJMUL MOLLAH
            <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Senior Software Engineer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seasoned Web Developer with 6+ years of expertise in Laravel, PHP, and modern web technologies. 
            Driven by excellence and continuous learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-400"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-teal-400 text-teal-300 hover:bg-teal-500 hover:text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-gray-400 hover:text-teal-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:najmul2022@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-gray-400 cursor-pointer hover:text-teal-400 transition-colors"
          onClick={() => scrollToSection('skills')}
        />
      </div>
    </section>
  );
};

export default Hero;
