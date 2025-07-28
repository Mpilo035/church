import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertNewsletter } from "@shared/schema";

export default function NewsletterSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setFormData({ firstName: "", lastName: "", email: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsletterMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="centered-section">
      <h2 className="text-3xl font-bold mb-6 text-center">Stay Connected</h2>
      
      <div className="newsletter-form max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
        <p className="text-center mb-6 text-gray-300">
          Get updates on upcoming events, sermons, and community news delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name" 
            className="form-input" 
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name" 
            className="form-input" 
            value={formData.lastName}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            className="form-input" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          
          <div className="text-center mt-4">
            <button 
              type="submit" 
              className="btn-primary"
              disabled={newsletterMutation.isPending}
            >
              {newsletterMutation.isPending ? "Subscribing..." : "Subscribe Now"}
            </button>
          </div>
          
          <p className="text-xs text-gray-400 text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
