import React from 'react';
import './Expertise.css'

import lab from './lab.png';
import display from './display.png';
import photo from './photo.png';
import money from './money.png';

// Refactor: komponent na pojedynczy 'skill', a potem skills.map()
// const skills = [
//   {
//     img: lab,
//     skill: 'Web Design',
//     desc: 'So Ann, the question is, do you want a man or a boy? I know how I would answer. '
//   }
// ]

const Expertise = (props) => {
  return (
    <div className="Expertise">
      <div className="Expertise-wrapper">
        <div className="Expertise-item">
          <div className="Expertise-item-title">
            <img src={display} alt="Web Design"/>
            <h2>Web Design</h2>
          </div>
          <p className="Expertise-item-desc">So Ann, the question is, do you want a man or a boy? I know how I would answer. </p>
        </div>
        <div className="Expertise-item">
          <div className="Expertise-item-title">
            <img src={photo} alt="Photography"/>
            <h2>Photography</h2>
          </div>
          <p className="Expertise-item-desc">A trick is something a whore does for money…or candy. … or cocaine.</p>
        </div>
        <div className="Expertise-item">
          <div className="Expertise-item-title">
            <img src={lab} alt="Experimental"/>
            <h2>Experimental</h2>
          </div>
          <p className="Expertise-item-desc">I'm going to buy you the single healthiest call girl this town has ever seen.</p>
        </div>
        <div className="Expertise-item">
          <div className="Expertise-item-title">
            <img src={money} alt="Super Expensive :)"/>
            <h2>Super Expensive</h2>
          </div>
          <p className="Expertise-item-desc">A trick is something a whore does for money…or candy. … or cocaine.</p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;