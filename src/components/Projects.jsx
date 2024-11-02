import React from "react";

const Projects = () => {
  const skills = ["React.js", "CSS", "HTML"];
  return (
    <section className="projects" id="projects">
      <div className="card">
        <h1 style={{ fontWeight: "bold", fontSize: "4rem" }}>Projects</h1>
        <br />
        <div className="project-card">
          <h2 style={{ fontSize: "2rem" }}>Nasa APOD Project</h2>
          <br />
          <p style={{ fontSize: "1.2rem" }}>
            This simple yet dynamic REACT project consists of an API key
            provided by nasa to develop an apod project (astronomy picture of
            the day) it retrieves data using the API key and shows the HD photo,
            Title and explanation of the given photo.
          </p>
          <br />
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-box">
                {skill}
              </div>
            ))}
          </div>
          <br />
          <a
            style={{ fontSize: "1.2rem" }}
            href="https://apod-react-app-jr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#F04C24",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "10px",
              }}
            >
              View Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
