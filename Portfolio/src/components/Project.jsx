import React from 'react';

const Project = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;
