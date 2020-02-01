import React, { Component } from 'react';

import '../css/ProjectGrid.css'

class ProjectGrid extends Component {
    render() {
        return(
            <div className='ProjectGrid-main'>
                <div className='ProjectGrid-Image'>
                    <img ref="image" src={this.props.image} alt="" width="50%" height="70%"/>
                </div>
                <div className='ProjectGrid-details'>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p> <br/>
                    <p>Made Using: {this.props.mu}</p> <br/>
                    <a href={this.props.sc}>Source Code</a> <br/>
                    {this.props.link === undefined ?
                        (<div></div>) :
                        (<a href={this.props.link}>Live Link</a>)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectGrid;