import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="centered-section" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin size={20} className="mr-3 w-5" style={{ color: 'var(--church-blue)' }} />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-300">[Your Church Address, City, State/Province, Postal Code]</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone size={20} className="mr-3 w-5" style={{ color: 'var(--church-blue)' }} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300">[Your Phone Number]</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Mail size={20} className="mr-3 w-5" style={{ color: 'var(--church-blue)' }} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">[Your Email Address]</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock size={20} className="mr-3 w-5" style={{ color: 'var(--church-blue)' }} />
              <div>
                <p className="font-medium">Office Hours</p>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Send Us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="form-input" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className="form-input" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              className="form-input" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={5} 
              className="form-input" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
            
            <div className="text-center">
              <button 
                type="submit" 
                className="btn-primary"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="social-icons mt-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Follow Us</h3>
        <a href="https://www.facebook.com/share/1L4PCUguK1/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook size={24} />
        </a>
        <a href="[YOUR_INSTAGRAM_URL]" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={24} />
        </a>
        <a href="[YOUR_YOUTUBE_URL]" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube size={24} />
        </a>
        <a href="[YOUR_TWITTER_URL]" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter size={24} />
        </a>
      </div>
    </section>
  );
}
