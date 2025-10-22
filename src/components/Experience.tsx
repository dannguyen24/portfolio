import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Code } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Teaching Assistant",
      company: "George Mason University",
      location: "Fairfax, VA",
      period: "Jan 2024 – Present",
      icon: Users,
      color: "primary",
      achievements: [
        "Guided 900+ students in programming labs by leading debugging and concept review sessions in subjects such as Object-Oriented Programming, Low-Level Programming and Data Structures and Algorithms.",
        "Facilitated weekly coding practice labs for 50+ students over 12 weeks, improving participants' debugging and strategizing efficiency when tackling advanced programming problems.",
      ],
    },
    {
      title: "Software Engineer Fellow",
      company: "George Mason University",
      location: "Fairfax, VA",
      period: "Jan 2024 – May 2025",
      icon: Code,
      color: "success",
      achievements: [
        "Streamlined and maintained the syllabus submission pipeline using Selenium and BeautifulSoup to automate data collection for 60 professors in the CS Department.",
        "Engineered a comprehensive dashboard with MkDocs to allow the viewing and filtering of 300+ syllabi based on parameters such as school year, class, and instructor; enhancing the accessibility of study materials.",
        "Developed a web scraper with Flask to extract 150+ technical reports dating back to 1992 from the department's website, reducing manual workload by 96%.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-font text-6xl md:text-7xl mb-4 text-primary-foreground uppercase tracking-wide">
              Experience
            </h2>
            <div className="w-32 h-2 bg-accent mx-auto" />
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-0 border-8 border-foreground hover:shadow-hover transition-all duration-300 overflow-hidden">
                  <div className="bg-creative p-6 border-b-8 border-foreground">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-card border-4 border-foreground">
                          <exp.icon className="w-8 h-8 text-foreground" />
                        </div>
                        <div>
                          <h3 className="heading-font text-3xl md:text-4xl text-creative-foreground uppercase">
                            {exp.title}
                          </h3>
                          <p className="heading-font text-xl text-creative-foreground/90">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="heading-font text-lg text-creative-foreground block">
                          {exp.period}
                        </span>
                        <span className="text-sm text-creative-foreground/80">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-card">
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 p-4 border-l-4 border-success bg-secondary"
                        >
                          <Briefcase className="w-5 h-5 text-success mt-1 shrink-0" />
                          <span className="text-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
