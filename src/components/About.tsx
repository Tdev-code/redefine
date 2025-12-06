import { CheckCircle2 } from "lucide-react";

const features = [
  "Experienced team of designers & developers",
  "Modern tech stack & best practices",
  "Transparent communication & pricing",
  "On-time delivery guarantee",
  "Post-launch support included",
  "100% client satisfaction focus",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">About Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight">
              Why Choose REFINED DIGITAL?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are a passionate team of web developers and designers dedicated to crafting exceptional digital experiences. Our mission is to help businesses of all sizes establish a powerful online presence that drives growth and success.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-foreground flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="p-8 border border-border animate-float">
                  <div className="text-4xl font-display font-bold">8+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Years in Business</div>
                </div>
                <div className="p-8 border border-border animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-4xl font-display font-bold">50+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Happy Clients</div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="p-8 border border-border animate-float" style={{ animationDelay: "2s" }}>
                  <div className="text-4xl font-display font-bold">150+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Projects Completed</div>
                </div>
                <div className="p-8 border border-border animate-float" style={{ animationDelay: "3s" }}>
                  <div className="text-4xl font-display font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
