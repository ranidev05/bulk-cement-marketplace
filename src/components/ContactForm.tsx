import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <Input placeholder="Full Name" required />
      </div>
      <div>
        <Input type="email" placeholder="Email" required />
      </div>
      <div>
        <Input placeholder="Phone Number" required />
      </div>
      <div>
        <Textarea placeholder="Your Message" required />
      </div>
      <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">Send Message</Button>
    </form>
  );
};