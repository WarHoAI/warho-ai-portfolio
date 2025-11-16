import type { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Service {
  title: string;
  description: string;
  // Fix: Use `ReactNode` type which is now imported.
  icon: ReactNode;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: 'SMB Guide' | 'Research Paper';
}

export interface ClientStory {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    client: string;
    category: 'SMB' | 'Enterprise' | 'Research';
    challenge: string;
    solution: string;
    technologies: string[];
    results: string;
}