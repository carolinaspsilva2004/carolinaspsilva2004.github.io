

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  media: string[];        
  github?: string;
  status?: "public" | "private" | "coming-soon";
}
