import React, { Component } from 'react';

import ProjectGrid from '../components/ProjectGrid';

import Project1 from '../assets/libgen.svg';
import Project2 from '../assets/mec.svg'

import "../css/Projects.css"

class Projects extends Component {
    render() {
        return(
            <div className="Projects-main">
                <div class="grid-container">
                    <ProjectGrid image={Project1}/>
                    <ProjectGrid image={Project2}/>
                </div> 
            </div>    
        )
    }
}

export default Projects;