import React from 'react';
import Project from './project'; 

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      image: 'project1-image.jpg', 
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      image: 'project2-image.jpg', 
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
