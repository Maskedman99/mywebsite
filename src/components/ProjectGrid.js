import React from 'react';

import '../css/ProjectGrid.css';

const ProjectGrid = props => {
  return (
    <div className="ProjectGrid-main">
      <div className="ProjectGrid-Image">
        <img src={props.image} alt="" width="30%" height="45%" />
      </div>
      <div className="ProjectGrid-details">
        <h1>{props.title}</h1>
        <p className="ProjectGrid-para">{props.desc}</p> <br />
        <p className="ProjectGrid-para">Made Using: {props.mu}</p> <br />
        <a className="ProjectGrid-link" href={props.sc}>
          Source Code
        </a>
        <br />
        {props.link !== undefined && (
          <a href={props.link} className="ProjectGrid-link">
            Live Link
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
