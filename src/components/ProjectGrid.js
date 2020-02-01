import React, { Component } from 'react';

import '../css/ProjectGrid.css'

class ProjectGrid extends Component {
    render() {
        console.log(this.props.image);
        return(
            <div className='ProjectGrid-main'>
                <div className='ProjectGrid-Image'>
                    <img ref="image" src={this.props.image} alt="" width="50%" height="70%"/>
                </div>
                <div className='ProjectGrid-details'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default ProjectGrid;