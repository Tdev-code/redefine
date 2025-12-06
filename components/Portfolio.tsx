import { ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with seamless checkout experience.",
  },
  {
    image: portfolio2,
    title: "FinTech Dashboard",
    category: "Mobile App Design",
    description: "Intuitive financial tracking app with real-time analytics.",
  },
  {
    image: portfolio3,
    title: "SaaS Landing Page",
    category: "UI/UX Design",
    description: "High-converting landing page for a B2B software company.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Our Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Latest Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden bg-background"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {project.category}
                </span>
                <h3 className="text-lg font-display font-semibold mt-2 mb-2 uppercase tracking-wide">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 bg-background flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
