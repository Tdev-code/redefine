// Social icons removed per request

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="text-xl font-display font-bold tracking-tight">
              REFINED DIGITAL
            </a>
            <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed">
              We craft exceptional digital experiences that help businesses thrive in the modern world. Let's build something amazing together.
            </p>
            {/* Social links removed per request */}
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 uppercase tracking-wide text-sm">Services</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#services" className="hover:text-foreground transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Mobile Design</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">SEO Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 uppercase tracking-wide text-sm">Company</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors"></a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            © 2025 REFINED DIGITAL. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground uppercase tracking-wide">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
