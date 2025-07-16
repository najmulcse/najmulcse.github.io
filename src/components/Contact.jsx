
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { emailjsConfig } from "../config/emailjs";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      to_email: 'najmul2022@gmail.com', // Your email
    };
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId, 
        emailjsConfig.templateId, 
        templateParams, 
        emailjsConfig.publicKey
      );
      
      setStatus('success');
      e.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my Laravel and PHP expertise can help you build something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you need robust backend solutions, 
              payment gateway integrations, or Laravel expertise for your team, I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300">najmul2022@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-300">+8801734044510</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Dhaka, Bangladesh</p>
                  <p className="text-gray-400 text-sm">Available for Remote Work</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Name
                    </label>
                    <Input 
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input 
                    name="subject"
                    placeholder="Project Discussion"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                
                {status === 'success' && (
                  <div className="mb-4 p-3 bg-green-600/20 border border-green-600 rounded-lg">
                    <p className="text-green-400 text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="mb-4 p-3 bg-red-600/20 border border-red-600 rounded-lg">
                    <p className="text-red-400 text-sm">❌ Failed to send message. Please try again or email me directly.</p>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
