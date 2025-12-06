import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Request a Quote
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-display font-semibold mb-6 uppercase tracking-wide">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Email us</div>
                  <div className="font-semibold">sabelorefineddigital@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Call us</div>
                  <div className="font-semibold">+27 (062) 731-8956</div>
                </div>
              </div>

              {/* Location block removed per request */}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 bg-background border border-border space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-foreground"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Company Name</label>
              <Input
                placeholder="Your Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-background border-border focus:border-foreground"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide mb-2 block">Project Details</label>
              <Textarea
                placeholder="Tell us about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-background border-border focus:border-foreground resize-none"
              />
            </div>
            <Button variant="hero" size="lg" className="w-full">
              Send Request
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
