import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }]);

      if (error) throw error;

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <Input 
          placeholder="Full Name" 
          required 
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>
      <div>
        <Input 
          type="email" 
          placeholder="Email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <Input 
          placeholder="Phone Number" 
          required 
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <Textarea 
          placeholder="Your Message" 
          required 
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">Send Message</Button>
    </form>
  );
};