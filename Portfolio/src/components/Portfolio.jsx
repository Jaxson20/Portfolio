import React from 'react';
import Project from './Project'; 

const Portfolio = () => {
  const projects = [
    {
      title: 'Gamers Grind',
      description: 'This webpage is for a group of gamers to be able to help set up a time to game together. The calendar helps to organize events and there is a highlights page to share cool gaming moments or to rub a match win to your friend who lost.',
      image: 'https://1drv.ms/i/s!AjsvYdlJ0aVdhjELpatXzZ2mDTTd?e=cBdGIb', 
      deployedLink: 'https://gamers-grind-255d50ab80c3.herokuapp.com/',
      githubLink: 'https://github.com/noahsimcoe/Gamers-Grind.git',
    },
    {
      title: 'Map-Stats',
      description: 'In this project as a team we used APIs to create a stats sharing website primarily for Baseball/Football Teams. The website had young adults in mind that need to see seasonal history for teams they may want to (bet on/create fantasy teams).',
      image: 'https://user-images.githubusercontent.com/133932050/257691412-3910d1b1-abe3-4507-9378-f81ddd2be2f3.png',
      deployedLink: 'https://brycehadl.github.io/Map-stats/',
      githubLink: 'https://github.com/brycehadl/Map-stats.git',
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
