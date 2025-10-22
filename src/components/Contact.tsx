import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Calendar, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="heading-font text-6xl md:text-7xl mb-4 text-foreground uppercase tracking-wide">
              Get In Touch
            </h2>
            <div className="w-32 h-2 bg-primary mx-auto" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="p-0 h-full border-8 border-foreground overflow-hidden">
                <div className="bg-primary p-6 border-b-8 border-foreground">
                  <h3 className="heading-font text-4xl text-primary-foreground uppercase">
                    Contact Information
                  </h3>
                </div>
                <div className="p-8 bg-card space-y-4">
                  <a
                    href="mailto:danunguyen.work@gmail.com"
                    className="flex items-center gap-4 p-4 border-4 border-foreground hover:bg-accent hover:border-accent transition-all duration-300 group"
                  >
                    <div className="p-3 bg-card border-4 border-foreground group-hover:bg-accent">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="heading-font text-sm uppercase">Email</p>
                      <p className="font-semibold text-sm">
                        danunguyen.work@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+15713209521"
                    className="flex items-center gap-4 p-4 border-4 border-foreground hover:bg-success hover:border-success transition-all duration-300 group"
                  >
                    <div className="p-3 bg-card border-4 border-foreground group-hover:bg-success">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="heading-font text-sm uppercase">Phone</p>
                      <p className="font-semibold">
                        +1 571-320-9521
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dannguyen24/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-4 border-foreground hover:bg-primary hover:border-primary transition-all duration-300 group"
                  >
                    <div className="p-3 bg-card border-4 border-foreground group-hover:bg-primary">
                      <Linkedin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="heading-font text-sm uppercase">LinkedIn</p>
                      <p className="font-semibold text-sm">
                        linkedin.com/in/dannguyen24
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/dannguyen24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border-4 border-foreground hover:bg-creative hover:border-creative transition-all duration-300 group"
                  >
                    <div className="p-3 bg-card border-4 border-foreground group-hover:bg-creative">
                      <Github className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="heading-font text-sm uppercase">GitHub</p>
                      <p className="font-semibold text-sm">
                        github.com/dannguyen24
                      </p>
                    </div>
                  </a>

                  <div className="pt-6 border-t-4 border-foreground">
                    <Button
                      size="lg"
                      className="w-full heading-font text-xl py-6 h-auto"
                    >
                      <Calendar className="w-6 h-6 mr-2" />
                        <a
                          href="https://calendly.com/danuyennguyen2412005/new-meeting"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Schedule Interview
                        </a>
                      
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-0 border-8 border-foreground overflow-hidden">
                <div className="bg-accent p-6 border-b-8 border-foreground">
                  <h3 className="heading-font text-4xl text-accent-foreground uppercase">
                    Send a Message
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="p-8 bg-card space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="heading-font block text-base mb-2 uppercase"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="border-4 border-foreground focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="heading-font block text-base mb-2 uppercase"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      required
                      className="border-4 border-foreground focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="heading-font block text-base mb-2 uppercase"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      required
                      rows={6}
                      className="border-4 border-foreground focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full heading-font text-xl py-6 h-auto"
                  >
                    <Send className="w-6 h-6 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
