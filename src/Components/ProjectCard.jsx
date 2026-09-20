import {
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import "./Css/Projects.css";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      {/* Project Image */}

      <div className="project-image-container">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={project.title}
          className="project-image"
        />
      </div>

      {/* Project Content */}

      <div className="project-content">
        {/* Title */}

        <h3 className="project-title">{project.title}</h3>

        {/* Description */}

        <p className="project-description">{project.description}</p>

        {/* Technologies */}

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology} className="technology-pill">
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="project-actions">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn live-btn"
          >
            <span>Live Demo</span>

            <FaExternalLinkAlt />
          </a>

          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn code-btn"
          >
            <span>View Code</span>

            <FaGithub />
          </a>
        </div>

        {/* Footer */}

        <div className="project-footer">
          {/* Rating */}

          <div className="rating">
            <FaStar className="star-icon" />

            <span className="rating-value">{project.rating}</span>

            <span className="review-count">({project.reviews} reviews)</span>
          </div>

          {/* Suggestions */}

          <div className="suggestions">
            <FaLightbulb className="suggestion-icon" />

            <span>{project.suggestions} Suggestions</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
