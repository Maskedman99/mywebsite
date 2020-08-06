import React from 'react';

import ProjectGrid from '../components/ProjectGrid';

import Project1 from '../assets/libgen.png';
import Project2 from '../assets/mec.png';
import Project3 from '../assets/covidstats.png'

import '../css/Projects.css';

const Projects = () => {
  return (
    <div className="Projects-main">
      <div className="grid-container">
        <ProjectGrid
          image={Project1}
          title="LibGen"
          desc="App to download books and papers from Library Genesis on the go."
          mu="React-native"
          sc="https://github.com/Maskedman99/LibGen"
        />
        <ProjectGrid
          image={Project2}
          title="MEC"
          desc="App to find the attendance of students in my college by scrapping data from the college website."
          mu="React-native"
          sc="https://github.com/Maskedman99/MEC"
          link="https://play.google.com/store/apps/details?id=com.maskedmanmec"
        />
        <ProjectGrid
          image={Project3}
          title="covidstats"
          desc="App to find statistics on covid cases"
          mu="React-native"
          sc="https://github.com/Maskedman99/covidstats"
        />
      </div>
    </div>
  );
};

export default Projects;
