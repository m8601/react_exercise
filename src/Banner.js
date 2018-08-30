import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import authorImg from './author.png';

const Banner = ({author, position}) => {
  return (
    <div className="Banner">
      <button className="Banner-link">Start your project &rarr;</button>
      <h1 className="Banner-author">Hi my name is <span>{author}</span></h1>
      <p className="Banner-role">I am a {position}</p>
      <img className="Banner-img" src={authorImg} alt="Some alt"/>
    </div>
  );
}

Banner.propTypes = {
  author: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
}

export default Banner;