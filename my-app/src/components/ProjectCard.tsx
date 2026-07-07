import type { Project } from "../types/Project";
import "../styles/Projects.css";

export default function ProjectCard({ project }: { project: Project }) {
  const media = project.media ?? [];
  const isSingle = media.length <= 1;
  const mediaLayout = project.mediaLayout ?? (isSingle ? "single" : "mockups");
  const projectLinks = [
    ...(project.github
      ? [{ label: "GitHub link project", href: project.github }]
      : []),
    ...(project.links ?? []),
  ];

  return (
    <article className={`project-card ${project.grade ? "has-grade" : ""}`}>
      {project.grade && (
        <div className="project-grade" aria-label={`Project grade ${project.grade}`}>
          <span>Grade</span>
          <strong>{project.grade}</strong>
        </div>
      )}

      <div className={`project-media ${mediaLayout}`}>
        {media.map((img, i) =>
          mediaLayout === "showcase" ? (
            <div key={`${project.id}-${i}`} className={`showcase-frame showcase-${i}`}>
              <img
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className={`showcase-image showcase-img-${i}`}
              />
            </div>
          ) : (
            <img
              key={`${project.id}-${i}`}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className={mediaLayout === "single" ? "single-image" : `mockup mockup-${i}`}
            />
          )
        )}
      </div>

      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {projectLinks.length > 0 && (
          <div className="project-links">
            {projectLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
