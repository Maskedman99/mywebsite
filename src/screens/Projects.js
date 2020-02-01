import React, { Component } from 'react';

import ProjectGrid from '../components/ProjectGrid';

import Project1 from '../assets/libgen.svg';
import Project2 from '../assets/mec.svg'

import "../css/Projects.css"

class Projects extends Component {
    render() {
        return(
            <div className="Projects-main">
                <div className="grid-container">
                    <ProjectGrid image={Project1} title="LibGen" desc="An app to Library Genesis" />
                    <ProjectGrid image={Project2} title="MEC" desc="App to find attendance" />
                </div> 
            </div>    
        )
    }
}

export default Projects;