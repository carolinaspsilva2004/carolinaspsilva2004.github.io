
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  grade?: string;
  technologies: string[];
  media: string[];
  mediaLayout?: "mockups" | "showcase";
  github?: string;
  links?: ProjectLink[];
  status?: "public" | "private" | "coming-soon";
}
