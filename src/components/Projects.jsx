
import { ExternalLink, Github, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API Platform",
      description: "Scalable microservices-based e-commerce backend handling 50k+ daily transactions with real-time inventory management and payment processing.",
      technologies: ["Laravel", "MySQL", "Redis", "Docker", "AWS", "Stripe API"],
      features: ["Microservices Architecture", "Real-time Updates", "Payment Integration", "Admin Dashboard"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Content Management System",
      description: "Custom CMS with multi-tenant architecture, role-based permissions, and RESTful API serving multiple client applications.",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "ElasticSearch", "JWT"],
      features: ["Multi-tenant", "RBAC", "Full-text Search", "API-first Design"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "High-performance analytics platform processing millions of events daily with real-time data visualization and reporting.",
      technologies: ["Laravel", "WebSockets", "InfluxDB", "React", "Chart.js"],
      features: ["Real-time Processing", "Custom Reports", "Data Visualization", "WebSocket Integration"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Showcase of robust backend solutions and scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href={project.liveUrl} className="flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    asChild
                  >
                    <a href={project.githubUrl} className="flex items-center justify-center">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
