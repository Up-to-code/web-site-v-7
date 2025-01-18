"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-lg">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <Input placeholder="Your Name" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" />
            </div>
            <div>
              <Input placeholder="Subject" />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>ahmed.mansour@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <span>Available for freelance projects</span>
              </div>
              <p className="text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to collaborate or just have a chat.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}