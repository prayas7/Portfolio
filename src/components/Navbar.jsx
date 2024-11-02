import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500} className="navbar-brand">
        Prayas
      </Link>
      <div className="navbar-items">
        <Link to="home" smooth={true} duration={500} className="nav-link">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="nav-link">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="nav-link">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="nav-link">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
