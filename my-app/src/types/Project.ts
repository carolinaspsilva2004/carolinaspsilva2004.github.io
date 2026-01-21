

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  status?: "public" | "private" | "coming-soon";
}
