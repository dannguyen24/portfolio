import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-accent">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSIxIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSIxNTAiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <div className="inline-block border-8 border-foreground p-2 bg-card">
              <div className="w-32 h-32 bg-card flex items-center justify-center">
                <span className="text-6xl font-bold text-foreground">DN</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="brand-font text-7xl md:text-9xl mb-4 text-center text-foreground"
          >
            Dan Nguyen
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-creative border-8 border-foreground p-6 mb-8 relative"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSIxIiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iNzUiIGN5PSIxNTAiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')]" />
            <p className="heading-font text-3xl md:text-5xl text-creative-foreground text-center uppercase tracking-wider relative z-10">
              Computer Science Student & Software Engineer
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-center text-foreground mb-10 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            Building innovative solutions through code. Teaching Assistant and Software Engineer Fellow at George Mason University with a passion for full-stack development and AI integration.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-10">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 border-4 border-foreground heading-font text-xl px-10 py-6 h-auto"
            >
              Schedule Interview
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="outline"
              size="lg"
              className="bg-card text-foreground border-4 border-foreground hover:bg-primary hover:text-primary-foreground heading-font text-xl px-10 py-6 h-auto"
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            <a
              href="https://github.com/dannguyen24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-foreground bg-card hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/dannguyen24/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-foreground bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/_danniellen/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-4 border-foreground bg-card hover:bg-creative hover:text-creative-foreground transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:danunguyen.work@gmail.com"
              className="p-4 border-4 border-foreground bg-card hover:bg-success hover:text-success-foreground transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+15713209521"
              className="p-4 border-4 border-foreground bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
