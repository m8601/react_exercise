import React from 'react';
import PropTypes from 'prop-types';
import './Project.css'
import location from './location.png';

const Project = ({project}) => {
  
  return (
    <div key={project.id} className="Project">
      <img className="Project-img" src={project.img} alt={project.title}/>
      <div className="Project-overlay">
        <h2 className="Project-title">{project.title}</h2>
        <div className="location-wrapper">
          <img className="Project-locationMarker" src={location} alt="Map marker sign"/>
          <span className="Project-location">{project.location}</span>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default Project;
