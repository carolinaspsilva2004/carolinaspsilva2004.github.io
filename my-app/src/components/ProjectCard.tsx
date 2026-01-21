import type { Project } from "../types/Project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card">
      <img src={project.image} alt={project.title} className="card-image" />

      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <div className="tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {project.github ? (
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      ) : (
        <span className="private">Private / Coming Soon</span>
      )}
    </div>
  );
}
