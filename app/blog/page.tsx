"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Building Scalable React Applications with Next.js",
      excerpt: "Learn how to leverage Next.js features to build performant and scalable web applications.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      tags: ["React", "Next.js", "Performance"]
    },
    {
      title: "Modern State Management with Zustand",
      excerpt: "Explore why Zustand might be the perfect state management solution for your next project.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1561883088-039e53143d73?w=800&h=400&fit=crop",
      tags: ["React", "Zustand", "State Management"]
    },
    {
      title: "Creating Smooth Animations with Framer Motion",
      excerpt: "A comprehensive guide to implementing beautiful animations in React applications.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop",
      tags: ["Animation", "Framer Motion", "React"]
    }
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts, tutorials and insights about web development.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.title} href="#" className="group">
            <Card className="overflow-hidden h-full">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <time className="text-sm text-muted-foreground">
                  {post.date}
                </time>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}