import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import './Project.css';


const Projects = ({projects, show, showMore}) => {
  return (
    <div className="Projects-list">
      
      {projects.slice(0, show).map(project => <div key={project.id}>
        <Project project={project}/>
      </div>)}
      {show < projects.length && <button onClick={showMore} className="Projects-showMore"></button>}
      
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  show: PropTypes.number.isRequired,
  showMore: PropTypes.func.isRequired
}

export default Projects;
