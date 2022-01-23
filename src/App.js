import React, { useState } from 'react';
import bryan from './Me.jpeg';
import wedge from './wedge.png';
import reciplease from './reciplease.png';
import amazon from './amazon.png';
import github from './github-logo.png';
import linkedin from './linkedin-logo.png';
import myResume from './resume.pdf'
import './App.css';

function App() {
  const viewResume = () => {
    window.open(
      myResume, '_blank'
    )
  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={bryan} className="App-logo" alt="Bryan Diaz" />
        <h1 style={{color: 'white'}}>Bryan Diaz - Software Developer</h1>
        <h4>"Code. Coffee. Music."</h4>
        <a href="https://github.com/bdiaz12345" target="_blank">
          <img className="img-logo-github" src={github} />
        </a>
        <a href="https://github.com/bdiaz12345" target="_blank">
          <img className="img-logo-linkedin" src={linkedin} />
        </a>
      </header>
      <button onClick={viewResume} className="resume-button">
        View Resumè
      </button>
      <div className="app-body">
        {/* <p>Hi there! I'm Bryan, and I build software for a living. Although in my free time I produce music and play basketball.</p> */}
        <div className="projects">
          <h2 style={{marginTop: '2rem'}}>Projects</h2>
          <p>(click images to view)</p>
          <div className="project">
            <a href="https://www.wedgecocktails.com/" target="_blank">
              <img src={wedge} className="project-img" />
            </a>
            <h2 className="project-title">Wedge Cocktails</h2>
            <p className="project-description">A website that matches you with the best cocktails based on the ingredients you select.</p>
          </div>
          <div className="project">
            <a href="https://reciplease-app.vercel.app/" target="_blank">
              <img src={reciplease} className="project-img" />
            </a>
            <h2 className="project-title">Reciplease</h2>
            <p className="project-description">All of your cookbook and recipe discovery needs conveniently placed into one website.</p>
          </div>
          <div className="project">
            <a href="http://amazon-clone-web-application.herokuapp.com/" target="_blank">
              <img src={amazon} className="project-img" />
            </a>
            <h2 className="project-title">Amazon Clone</h2>
            <p className="project-description">Not even Ebay can compete with Amazon Clone. The only thing better is Amazon itself.</p>
          </div>
        </div>
        <div className="app-body-bottom">

        </div>
      </div>
    </div>
  );
}

export default App;
