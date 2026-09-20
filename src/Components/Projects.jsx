import "./Css/Projects.css";
import allProjects from "./data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* ==================================
            HEADER
        ================================== */}

        <div className="projects-header">
          <span className="projects-small-title">MY PROJECTS</span>

          <h2>
            Some of My <span>Works</span>
          </h2>

          <p>
            Here are some of the projects Ive built. Each project helped me
            learn new technologies and improve my skills.
          </p>
        </div>

        {/* ==================================
            PROJECT GRID
        ================================== */}

        <div className="projects-grid">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
