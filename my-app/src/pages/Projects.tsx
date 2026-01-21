import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Projects</h1>
        <p>
          A selection of academic and personal projects developed throughout my
          academic and professional journey.
        </p>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}
