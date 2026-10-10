import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Css/Navbar.css";
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // scrolling up
        setShowNav(true);
      } else {
        // scrolling down
        setShowNav(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`header ${showNav ? "nav-show" : "nav-hide"}`}>
      <div className="brand left">
        <div className="brand-icon">S</div>
        <div className="brand-text">
          <span>SHIV</span>
          <span>RAM</span>
        </div>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`right ${open ? "open" : ""}`}>
        <NavLink className="ns" to="/home" onClick={() => setOpen(false)}>
          <FaHome className="nav-icon all-icons"/>
          Home
        </NavLink>
        <NavLink className="ns" to="/about" onClick={() => setOpen(false)}>
          <FaUser className="nav-icon  all-icons" />
          About
        </NavLink>
        <NavLink className="ns" to="/projects" onClick={() => setOpen(false)}>
          <FaFolderOpen className="nav-icon  all-icons" />
          Projects
        </NavLink>
        <NavLink className="ns" to="/contact" onClick={() => setOpen(false)}>
          <FaEnvelope className="nav-icon  all-icons" />
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
