"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Enterprise Sales Platform",
      description: "A comprehensive sales management system with real-time analytics and reporting. Features include customer relationship management, sales forecasting, and performance dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tech: ["React.js", "Node.js", "MongoDB", "WebSocket", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat platform supporting real-time messaging, file sharing, and voice calls. Built with a focus on performance and user experience.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
      tech: ["React.js", "Firebase", "Framer Motion", "WebRTC", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with advanced features like real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-muted-foreground text-lg">
          A collection of my recent work and personal projects.
        </p>
      </div>

      <div className="grid gap-12">
        {projects.map((project, index) => (
          <Card key={project.title} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}