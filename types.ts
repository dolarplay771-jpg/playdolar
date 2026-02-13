import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Mode {
  id: string;
  title: string;
  description: string;
  visualType: 'chart' | 'game' | 'grid' | 'cards';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}