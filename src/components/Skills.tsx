import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "primary",
      skills: [
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "R",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "success",
      skills: [
        "React",
        "Node.js",
        "Flask",
        "JUnit",
        "Tailwind CSS",
        "Shadcn",
        "REST APIs",
        "Tomcat",
        "Angular",
      ],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "accent",
      skills: [
        "Git",
        "Google OAuth",
        "Gemini API",
        "VS Code",
        "IntelliJ",
        "Maven",
        "Postman",
        "AWS",
        "Pinecone",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "creative",
      skills: [
        "SQLite",
        "MySQL",
        "SQL",
        "MongoDB",
        "PostgreSQL",
        "DynamoDB",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-success">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-font text-6xl md:text-7xl mb-4 text-success-foreground uppercase tracking-wide">
              Technical Skills
            </h2>
            <div className="w-32 h-2 bg-accent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-0 h-full border-8 border-foreground hover:shadow-hover transition-all duration-300 overflow-hidden">
                  <div className="bg-accent p-6 border-b-8 border-foreground">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-card border-4 border-foreground">
                        <category.icon className="w-8 h-8 text-foreground" />
                      </div>
                      <h3 className="heading-font text-3xl text-accent-foreground uppercase">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    className="p-6 bg-card flex flex-wrap gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {category.skills.map((skill, i) => (
                      <motion.div key={i} variants={badgeVariants}>
                        <Badge className="border-2 border-foreground bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default py-2 px-4 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <Card className="p-8 max-w-4xl mx-auto border-8 border-foreground bg-creative">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge className="heading-font text-lg py-3 px-6 border-4 border-foreground bg-card text-foreground uppercase">
                  Agile Development
                </Badge>
                <Badge className="heading-font text-lg py-3 px-6 border-4 border-foreground bg-card text-foreground uppercase">
                  Software Development Lifecycle
                </Badge>
                <Badge className="heading-font text-lg py-3 px-6 border-4 border-foreground bg-card text-foreground uppercase">
                  Web Service Design
                </Badge>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
