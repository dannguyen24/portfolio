import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t-8 border-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="brand-font text-5xl text-background">
            Dan Nguyen
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/dannguyen24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-background bg-foreground hover:bg-primary transition-all duration-300"
            >
              <Github className="w-6 h-6 text-background" />
            </a>
            <a
              href="https://www.linkedin.com/in/dannguyen24/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-background bg-foreground hover:bg-primary transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-background" />
            </a>
            <a
              href="https://www.instagram.com/_danniellen/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-background bg-foreground hover:bg-accent transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-background" />
            </a>
            <a
              href="mailto:danunguyen.work@gmail.com"
              className="p-4 border-4 border-background bg-foreground hover:bg-success transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-background" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-background flex items-center gap-2 justify-center mb-2">
              Designed and built with <Heart className="w-4 h-4 text-creative fill-creative" /> by Dan Nguyen
            </p>
            
            <p className="heading-font text-sm text-background/80 uppercase tracking-wider">
              © {new Date().getFullYear()} Dan Nguyen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
