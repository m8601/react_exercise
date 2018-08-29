import React from 'react';
import './Banner.css';
import authorImg from './author.png';

const Banner = ({author, position, children}) => {
  return (
    <div className="Banner">
      <button className="Banner-link">Start your project &rarr;</button>
      <h1 className="Banner-author">Hi my name is <span>{author}</span></h1>
      <p className="Banner-role">I am a {position}</p>
      {children}
      <img className="Banner-img" src={authorImg} alt="Some alt"/>
    </div>
  );
}

export default Banner;