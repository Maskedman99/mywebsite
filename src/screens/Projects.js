import React, { Component } from 'react';

import ProjectGrid from '../components/ProjectGrid';

import Project1 from '../assets/libgen.svg';
import Project2 from '../assets/mec.svg'

import "./Projects.css"

class Projects extends Component {
    render() {
        return(
            <div className="Projects-main">
                <div class="grid-container">
                    <ProjectGrid image={Project1}/>
                    <ProjectGrid image={Project2}/>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item">5</div>
                    <div class="grid-item">6</div>
                    <div class="grid-item">7</div>
                    <div class="grid-item">8</div>
                    <div class="grid-item">9</div>
                </div> 
            </div>    
        )
    }
}

export default Projects;