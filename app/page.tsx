"use client";

import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const skills = [
    "React.js", "Next.js", "Node.js", "MongoDB", "Firebase",
    "React Native", "NativeWind", "Zustand", "Framer Motion",
    "Puppeteer", "Selenium", "WordPress", "RTL Layouts"
  ];

  const projects = [
    {
      title: "Enterprise Sales Platform",
      description: "Developed a comprehensive sales management system with real-time analytics and reporting.",
      tech: ["React.js", "Node.js", "MongoDB"]
    },
    {
      title: "Real-time Chat Application",
      description: "Built a scalable chat platform with real-time messaging and file sharing capabilities.",
      tech: ["React.js", "Firebase", "Framer Motion"]
    },
    {
      title: "E-commerce Platform",
      description: "Created a full-featured e-commerce solution with payment integration and inventory management.",
      tech: ["Next.js", "Node.js", "MongoDB"]
    }
  ];

  return (
    <main className="relative min-h-screen">
      <div className="noise" />
      
      {/* Hero Section */}
      <div className="relative hero-gradient">
        <div className="absolute inset-0 grid-gradient" />
        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm font-medium">
                Available for Freelance Work
              </Badge>
            </div>
            <h1 className="text-6xl font-extrabold tracking-tight mb-8">
              Building the future with
              <span className="block text-primary highlight-gradient">modern web technologies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Senior software developer specializing in creating scalable, user-friendly solutions 
              that help businesses grow and succeed.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
              for building exceptional digital experiences.
            </p>
          </div>
          <div className="infinite-scroll overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap">
              {[...skills, ...skills].map((skill, i) => (
                <Badge 
                  key={i}
                  variant="outline" 
                  className="py-2 px-4 text-sm border-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-secondary/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my recent work showcasing my expertise in building
              modern web applications.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="group relative overflow-hidden border-primary/10 bg-background/50 backdrop-blur">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <Card className="p-8 border-primary/10 bg-background/50 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have a project in mind? Let's discuss how we can bring your ideas to life
                  with modern technology solutions.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-muted-foreground">Check out my open source work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">Connect with me professionally</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}