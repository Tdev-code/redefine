import { Code2, Palette, Smartphone, Zap, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Bespoke websites built with cutting-edge technologies tailored to your unique business needs.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and strengthen your brand identity.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Websites that look stunning and perform flawlessly on every device and screen size.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions that keep visitors engaged.",
  },
  {
    icon: Search,
    title: "SEO Integration",
    description: "Built-in search engine optimization to help your site rank higher and attract more visitors.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your website secure, fast, and up-to-date.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 border border-border hover:border-foreground/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-foreground" strokeWidth={1} />
              </div>
              <h3 className="text-lg font-display font-semibold mb-3 uppercase tracking-wide">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
