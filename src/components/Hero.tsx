import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Web development concept"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <p className="text-sm tracking-widest uppercase mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Redifined : Digital Agency
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 uppercase tracking-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Advanced Digital Experiences
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            We help businesses transform their vision into stunning, high-performance websites that captivate audiences and drive real results.
          </p>

          <p className="text-sm tracking-widest uppercase mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Go on & Explore
          </p>

          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="glass" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#contact">
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
