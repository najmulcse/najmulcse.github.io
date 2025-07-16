
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Next Ventures",
      location: "Dhaka, Bangladesh",
      duration: "March 2023 - Present",
      description: "Leading trading analysis and implementing cutting-edge technologies. Successfully implemented Apache Kafka for efficient data streaming and designed competitive trading systems. Developing Discord bots and leading teams to achieve project milestones.",
      technologies: ["Laravel", "PHP", "Apache Kafka", "Microservices", "Discord Bot", "Team Leadership"]
    },
    {
      title: "Software Engineer",
      company: "SSL Wireless",
      location: "Dhaka, Bangladesh", 
      duration: "September 2020 - March 2023",
      description: "Specialized in FinTech development with focus on payment gateway integrations. Developed sophisticated bots and led cross-functional teams. Handled client relations with exceptional cooperation and satisfaction.",
      technologies: ["Laravel", "PHP", "Payment Gateways", "Bot Development", "FinTech", "Team Leadership"]
    },
    {
      title: "Software Engineer - Booking System Specialist",
      company: "MCC Limited",
      location: "Dhaka, Bangladesh",
      duration: "October 2018 - August 2020", 
      description: "Worked on e-commerce solutions including Bombay Sweets platform. Specialized in flight ticketing and hotel booking systems. Integrated payment gateways and developed restaurant management system APIs.",
      technologies: ["React", "Laravel", "E-commerce", "Booking Systems", "SSLcommerz", "API Development"]
    },
    {
      title: "Software Engineer",
      company: "Media-365 Limited",
      location: "Dhaka, Bangladesh",
      duration: "October 2017 - September 2018",
      description: "Full-stack development covering both frontend and backend technologies. Developed and implemented software solutions as per company requirements using modern web technologies.",
      technologies: ["Vue.js", "Laravel", "Full-stack Development", "Web Applications"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300">
            6+ years of building exceptional software solutions
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 ml-16">
              <div className="absolute -left-[2.25rem] top-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-gray-400">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
