
export interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration?: string;
  inclusions?: string[];
  constraint?: string;
  image: string;
}

export interface StallionStats {
  label: string;
  value: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
