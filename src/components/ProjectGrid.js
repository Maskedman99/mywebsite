import React, { Component } from 'react';

import './ProjectGrid.css'

class ProjectGrid extends Component {
    render() {
        console.log(this.props.image);
        return(
            <div className='ProjectGrid-main'>
                <img ref="image" src={this.props.image} alt="" width="50%" height="70%"/>
            </div>
        );
    }
}

export default ProjectGrid;