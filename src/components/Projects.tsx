import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "StudyEZ",
      description:
        "Led a team of 4 to build a full-stack study assistant platform that suggests personalized online materials and transforms lecture recordings and text documents into AI-generated notes.",
      tech: [
        "Python",
        "React",
        "Flask",
        "MongoDB",
        "AssemblyAI",
        "Google Gemini API",
      ],
      highlights: [
        "17 Flask backend API endpoints for authentication and document processing",
        "Automated transcription across YouTube, PDF, DOCX, MP4, and MP3",
        "MongoDB schemas for structured notes and user management",
      ],
      gradient: "from-primary to-success",
      github: "#",
    },
    {
      title: "Local Taste",
      description:
        "Collaborated with a team of 4 to build a web platform connecting travelers with local hosts, enabling users to discover authentic experiences such as cultural events and local dining.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Pinecone",
        "OpenAI",
      ],
      highlights: [
        "Complete authentication flow with JWT and Google OAuth",
        "Semantic search system with OpenAI Embeddings for 1,000+ listings",
        "9+ API endpoints for role-based validation and request management",
        "MongoDB aggregation pipelines with pagination support",
      ],
      gradient: "from-accent to-creative",
      github: "#",
    },
    {
      title: "Fall Guys",
      description:
        "Built a full-stack safety app for elderly care using real-time fall detection technology with immediate emergency response capabilities.",
      tech: ["Flask", "React", "OpenCV", "MediaPipe", "Twilio", "JWT"],
      highlights: [
        "Real-time fall detection using OpenCV and MediaPipe",
        "Integrated Twilio API for automatic emergency phone calls",
        "JWT authentication for secure user management",
      ],
      gradient: "from-success to-primary",
      github: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-font text-6xl md:text-7xl mb-4 text-foreground uppercase tracking-wide">
              Featured Projects
            </h2>
            <div className="w-32 h-2 bg-creative mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-0 border-8 border-foreground hover:shadow-hover transition-all duration-300 group overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className={`w-full h-16 bg-gradient-to-r ${project.gradient} border-b-8 border-foreground flex items-center justify-center`}>
                      <h3 className="heading-font text-4xl text-card uppercase tracking-wider">
                        {project.title}
                      </h3>
                    </div>
                    <div className="p-6 flex flex-col flex-grow bg-card">
                      <p className="mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mb-6">
                        <p className="heading-font text-lg mb-3 uppercase text-foreground">
                          Key Highlights:
                        </p>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="text-sm flex items-start gap-2 border-l-4 border-success pl-3 py-1"
                            >
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} className="border-2 border-foreground bg-secondary text-foreground heading-font">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 heading-font text-base"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 heading-font text-base"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
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

export default Projects;
