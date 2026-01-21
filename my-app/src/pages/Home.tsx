import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main className="home">
            {/* HERO HEADER */}
            <section className="hero-banner">
                <h1>Carolina Silva</h1>
                <p>MSc in Software Engineering · University of Aveiro</p>
            </section>

            {/* MAIN BENTO GRID */}
            <section className="home-grid">
                {/* UNIVERSITY PROJECTS */}
                <div className="card hero-card grid-university">
                    <h2>University Projects</h2>
                    <p>
                        Academic projects developed during my Bachelor’s and Master’s in
                        Software Engineering at the University of Aveiro, covering Machine
                        Learning, Software Engineering, Mobile Computing, Information
                        Visualization, and Data-Centric Systems.
                    </p>


                    <Link to="/projects" className="cta">
                        Explore
                    </Link>

                </div>

                {/* PROFILE IMAGE */}
                <div className="profile-image grid-photo">
                    <img src="/assets/me.jpg" alt="Carolina Silva" />
                </div>

                {/* PERSONAL PROJECTS */}
                <div className="card hero-card grid-personal">
                    <h2>Personal Projects</h2>
                    <p>
                        Personal and collaborative projects developed outside coursework,
                        focused on experimentation, system design, and the application of
                        software engineering principles to real-world problems.
                    </p>

                    <a
                        href="https://github.com/carolinaspsilva2004"
                        target="_blank"
                        rel="noreferrer"
                        className="cta secondary"
                    >
                        See More
                    </a>
                </div>

                {/* LEFT COLUMN: ABOUT + LINKS */}
                <div className="stack-left">
                    <div className="card about">
                        <h3>About Me</h3>
                        <p>
                            I am a Software Engineering MSc student at the University of Aveiro
                            with a strong academic background in Machine Learning, Software
                            Engineering, and Data-Centric Systems. My work focuses on designing
                            and implementing reliable software solutions, combining solid
                            engineering principles with data analysis, visualization, and
                            user-centered design. I have experience developing mobile, web, and
                            backend systems through academic and collaborative projects.
                        </p>
                    </div>

                    <div className="card links">
                        <a
                            href="https://github.com/carolinaspsilva2004"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/carolina-silva-ua/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a href="mailto:carolinaspsilva.ua@gmail.com">Contact</a>
                    </div>
                </div>
                {/* SKILLS */}
                {/* SKILLS */}
                <div className="card skills grid-skills">
                    <h3>Technical Skills</h3>

                    {/* PROGRAMMING LANGUAGES */}
                    <div className="skills-section">
                        <strong>Programming Languages</strong>
                        <div className="skills-grid">
                            <span>Python</span>
                            <span>Java</span>
                            <span>C / C++</span>
                            <span>Dart</span>
                            <span>TypeScript</span>
                            <span>JavaScript</span>
                            <span>MATLAB</span>
                            <span>SQL</span>
                            <span>Kotlin</span>
                        </div>
                    </div>

                    {/* FRONTEND & MOBILE */}
                    <div className="skills-section">
                        <strong>Frontend & Mobile Development</strong>
                        <div className="skills-grid">
                            <span>React</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Flutter</span>
                            <span>Vite</span>
                            <span>Figma</span>
                        </div>
                    </div>

                    {/* BACKEND & SYSTEMS */}
                    <div className="skills-section">
                        <strong>Backend & Systems</strong>
                        <div className="skills-grid">
                            <span>Spring Boot</span>
                            <span>Flask</span>
                            <span>REST APIs</span>
                            <span>Microservices</span>
                            <span>Docker</span>
                            <span>Nginx</span>
                            <span>RabbitMQ</span>
                            <span>Kafka</span>
                        </div>
                    </div>

                    {/* DATA & MACHINE LEARNING */}
                    <div className="skills-section">
                        <strong>Data & Machine Learning</strong>
                        <div className="skills-grid">
                            <span>Machine Learning</span>
                            <span>Data Analysis</span>
                            <span>Medical Image Analysis</span>
                            <span>Model Evaluation</span>
                            <span>PyTorch</span>
                            <span>Scikit-learn</span>
                        </div>
                    </div>

                    {/* DATABASES & DEVOPS */}
                    <div className="skills-section">
                        <strong>Databases & DevOps</strong>
                        <div className="skills-grid">
                            <span>PostgreSQL</span>
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>SQLite</span>
                            <span>Terraform</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
