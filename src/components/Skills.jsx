
import { Database, Server, Code, Shield, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["PHP", "Laravel", "Queue Systems", "Apache Kafka", "Microservices"]
    },
    {
      title: "Frontend Technologies", 
      icon: <Globe className="w-8 h-8" />,
      skills: ["JavaScript", "React.js", "Vue.js", "HTML", "CSS", "Bootstrap"]
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-8 h-8" />,
      skills: ["MySQL", "Redis", "Database Design", "Query Optimization"]
    },
    {
      title: "Development Practices",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Agile", "Scrum", "Jira", "Software Requirements", "API Development"]
    },
    {
      title: "Specialized Systems",
      icon: <Zap className="w-8 h-8" />,
      skills: ["Payment Gateways", "E-commerce", "Booking Systems", "Discord Bots", "FinTech"]
    },
    {
      title: "Leadership & Management",
      icon: <Code className="w-8 h-8" />,
      skills: ["Team Leadership", "Project Management", "Client Handling", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set built over 6+ years of professional development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
