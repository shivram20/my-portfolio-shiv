import { NavLink } from "react-router-dom";
import "./Css/Home.css";
import { FaFileAlt, FaFolderOpen  } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        {/* Left Content */}
        <div className="home-left">
          <h1>
            RESPONSIVE <br />
            LANDING <br />
            PAGE
          </h1>

          <div className="tech-box">
            
          </div>
        </div>

        {/* Right Content */}
        <div className="home-right">
          <h2>
            Welcome to <span>My Portfolio </span>
          </h2>
          <p>
            Build a clean, modern and responsive website using reusable
            components and simple design.
          </p>

          <div className="home-buttons">
            <NavLink className="btn-primary" to="/projects">
            <FaFolderOpen className="all-icons" />
              View Projects
            </NavLink>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              className="btn-secondary btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt className="all-icons"/>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
