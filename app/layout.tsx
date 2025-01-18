"use client";

import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <nav className="fixed top-0 inset-x-0 h-16 bg-background/80 backdrop-blur-sm z-50 border-b border-primary/10">
            <div className="max-w-5xl mx-auto px-4 h-full">
              <div className="flex h-full items-center justify-between">
                <Link href="/" className="font-bold text-xl">
                  AM
                </Link>
                <div className="flex gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href 
                          ? "text-foreground" 
                          : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <main className="pt-16">
            {children}
          </main>

          <footer className="border-t border-primary/10 bg-secondary/50">
            <div className="max-w-5xl mx-auto px-4 py-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Link href="/" className="font-bold text-xl mb-4 block">
                    AM
                  </Link>
                  <p className="text-muted-foreground max-w-sm">
                    Building modern web applications with a focus on performance,
                    accessibility, and user experience.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-3">Links</h3>
                    <ul className="space-y-2">
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <Link 
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          href="/privacy" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/terms" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-primary/10">
                <p className="text-sm text-muted-foreground text-center">
                  © 2024 Ahmed Mansour. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}