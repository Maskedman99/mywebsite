import React from 'react';

import '../css/ProjectGrid.css';

const ProjectGrid = props => {
  return (
    <div className="ProjectGrid-main">
      <div className="ProjectGrid-Image">
        <img src={props.image} alt="" width="50%" height="70%" />
      </div>
      <div className="ProjectGrid-details">
        <h1>{props.title}</h1>
        <p>{props.desc}</p> <br />
        <p>Made Using: {props.mu}</p> <br />
        <a href={props.sc}>Source Code</a> <br />
        {props.link === undefined ? <div></div> : <a href={props.link}>Live Link</a>}
      </div>
    </div>
  );
};

export default ProjectGrid;
