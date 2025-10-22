import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-font text-6xl md:text-7xl mb-4 text-foreground uppercase tracking-wide">
              Education
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <Card className="p-0 border-8 border-foreground hover:shadow-hover transition-all duration-300 bg-card overflow-hidden">
              <div className="bg-success p-6 border-b-8 border-foreground">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-card border-4 border-foreground">
                    <GraduationCap className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="heading-font text-4xl text-card uppercase">
                    George Mason University
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xl mb-6 font-semibold">
                  Bachelor of Science in Computer Science
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-4 border-foreground p-4 bg-accent/20">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-foreground" />
                      <span className="heading-font text-2xl">
                        GPA: 3.94/4.0
                      </span>
                    </div>
                  </div>
                  <div className="border-4 border-foreground p-4 bg-success/20">
                    <span className="heading-font text-2xl uppercase">
                      Dean's List
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="font-bold">Expected Graduation:</span> May 2027
                  </p>
                  <p className="text-lg">
                    <span className="font-bold">Location:</span> Fairfax, VA
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
