import type { Project } from "../types/Project";
import "../styles/Projects.css";

export default function ProjectCard({ project }: { project: Project }) {
  const media = project.media ?? [];
  const isSingle = media.length <= 1;

  return (
    <article className="project-card">
      <div className={`project-media ${isSingle ? "single" : "multi"}`}>
        {media.map((img, i) => (
          <img
            key={`${project.id}-${i}`}
            src={img}
            alt={project.title}
            className={isSingle ? "single-image" : `mockup mockup-${i}`}
          />
        ))}
      </div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub link project
          </a>
        )}
      </div>
    </article>
  );
}
