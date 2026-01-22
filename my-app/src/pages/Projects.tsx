import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/Projects.css";
import type { Project } from "../types/Project";


type ProjectFilter = {
  label: string;
  match: (project: Project) => boolean;
};


const FILTERS: ProjectFilter[] = [
  { label: "All", match: () => true },
  {
    label: "Mobile & Full-Stack",
    match: (p) =>
      p.technologies.some((t) =>
        ["Flutter", "Spring Boot", "PostgreSQL", "Firebase", "Docker"].includes(t)
      ),
  },
  {
    label: "Machine Learning & Data",
    match: (p) =>
      p.technologies.some((t) =>
        ["Python", "PyTorch", "Scikit-learn", "NumPy"].includes(t)
      ),
  },
  {
    label: "Software Engineering",
    match: (p) =>
      p.technologies.some((t) =>
        ["Java", "Microservices", "CI/CD"].includes(t)
      ),
  },
  {
    label: "HCI / Frontend",
    match: (p) =>
      p.technologies.some((t) =>
        ["React", "Vite", "JavaScript", "HCI"].includes(t)
      ),
  },
];

export default function Projects() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const filter = FILTERS.find((f) => f.label === activeFilter);
    return filter ? filter.match(project) : true;
  });

  return (
    <main className="projects-page">
      {/* HEADER / MENU */}
      <header className="projects-header-wrapper">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="projects-header">
          <h1>Projects</h1>
          <p>
            A selection of academic and personal projects developed throughout my
            academic and professional journey.
          </p>

          <nav className="projects-filters">
            {FILTERS.map((filter) => (
              <button
                key={filter.label}
                className={`filter-btn ${activeFilter === filter.label ? "active" : ""
                  }`}
                onClick={() => setActiveFilter(filter.label)}
              >
                {filter.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* PROJECTS */}
      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
