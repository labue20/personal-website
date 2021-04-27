import React, { Component } from 'react';

//get icons
import githubIcon from '../icons/github_icon.svg';
import linkedlnIcon from '../icons/linkedln_icon.png';
import mePic from '../icons/profile.jpeg';
import emailIcon from '../icons/email_icon.png';

//Just name
function Name() {
  return <h2>Wilfred Labue</h2>;
}

//all social links
function SocialLinks(props) {
  return (
    <h5>
      <a href="https://github.com/labue20" rel="noopener noreferrer">
        <img id="profile-icon" src={githubIcon} alt=""/>Github</a>
      <a href="https://www.linkedin.com/in/wilfred-labue-020192106/" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={linkedlnIcon} alt=""/>LinkedIn</a>
      <a href="mailto:labuewilfred@gmail.com" rel="noopener noreferrer">
        <img id="profile-icon-linkedin" src={emailIcon} alt=""/>Email Me</a>
    </h5>
  );
}

//short description
function Short(props) {
  return <div>
  
  <div className="padding-top" id="profile-description">
  B.Sc Software Engineering University of Texas at Dallas
  </div>

  <div> <h4> Concentration : AI and Machine Learning</h4></div>
  
  </div>;
  
}

export default class Profile extends Component {
  render() {
    return (
      <div id="parent" className="profile">
        <div id="profile-name">
          <Name />
          <SocialLinks />
          <Short />
        </div>
        <div className="frame">
          <img id="profile-pic" src={mePic} alt=""/>
        </div>
      </div>
    );
  }
}
