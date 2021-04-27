import React, { Component } from 'react';

//title of project
function Title(props) {
  return (
    <h2>
      <span className="projectLink"><a href={props.link} target="_blank"  rel="noopener noreferrer"> {props.name} </a></span>
    </h2>
  );
}

//date project was completed in
function Date(props) {
  return <span>{props.date}</span>;
}

//longer title
function Short(props) {
  return <h4><em>{props.desc}</em></h4>;
}

//all relavent languages and tools used in project
function Label(props) {
  return <span className="label">{props.label}</span>;
}

//short description of project
function Desc(props) {
  return <span className="description">{props.desc}</span>;
}

//project demo link
function Demo(props) {
  return (
    <div className="projectLink padding-top">
      <a href={props.link}>Demo</a>
    </div>
  );
}

export default class Section extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title"><hr/>
          <h2>&#187; Projects</h2>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="Obsolensce Management Tool"/>
            <Short desc="General Dynamics Mission Systems" />
            <div id="labels">
              <Label label="Python" />
              <Label label="MySql.js" />
              <Label label="AngularJS" />
              <Label label="Flask API" />
            </div>
            <Desc desc="Successful build and implement a web base tool to help General Dynamics 
            Mission Systems manage their bills of materials(BOM) by keep tracking of items which
            are running out of stock and flagging it." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2019" />
          </div>
          <div>
            <Title name="MapReduce Implementation" link="/" />
            <Short desc="MapReduce Program in java" />
            <div id="labels">
              <Label label="Java" />
              <Label label="bash script" />
              <Label label = "Socket Programming"/>
            </div>
            <Desc desc="I successful implement and code a simple word count program that implement the MapReduce 
            paradigm in java without using the Hadoop framework" />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="react-personal-website" link="https://github.com/jakobau/react-personal-website" />
            <Short desc="Personal Website Resume" />
            <div id="labels">
              <Label label="React" />
              <Label label="Node.js" />
              <Label label="JavaScript" />
              <Label label="JSX" />
              <Label label="CSS" />
              <Label label="Github Pages" />
            </div>
            <Desc desc="I wanted to learn React.js so created a website of my resume." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="discord-bot" link="https://github.com/jakobau/discordbot" />
            <Short desc="Fun Discord Bot" />
            <div id="labels">
              <Label label="Discord.js" />
              <Label label="JavaScript" />
              <Label label="Node.js" />
            </div>
            <Desc desc="Play music, manage roles, irritate friends..." />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="Twitterphile" link="https://github.com/MattD0312/twitter-profile-summarizer" />
            <Short desc="DragonHacks 2020 Project" />
            <div id="labels">
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="JavaScript" />
              <Label label="CSS" />
              <Label label="Bootstrap" />
              <Label label="Heroku" />
              <Label label="Twitter API" />
            </div>
            <Desc desc="Use of the Twitter API on a web app. Displays most recently used hashtags and words of a twitter username." />
            <Demo link="https://twitterphile.herokuapp.com/" />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2020" />
          </div>
          <div>
            <Title name="IMDrexel" link="https://github.com/jakobau/IMDrexel" />
            <Short desc="Redesign of IMLeagues" />
            <div id="labels">
              <Label label="Node.js" />
              <Label label="Express" />
              <Label label="Bootstrap" />
              <Label label="CSS" />
              <Label label="JavaScript" />
              <Label label="Amazon RDS" />
            </div>
            <Desc desc="Website for CS375 Final Project." />
            <Demo link="https://jakobau.github.io/public/IMDrexel/dashboard.html" />
          </div>
        </div>

        <div id="section">
          <div id="date">
            <Date date="2019" />
          </div>
          <div>
            <Title name="Fantazmix" link="https://github.com/jakobau/fantasmix" />
            <Short desc="AI Music Generating Web App" />
            <div id="labels">
              <Label label="Django" />
              <Label label="Python" />
              <Label label="CSS" />
              <Label label="Google Magenta" />
            </div>
            <Desc desc="Website that uses artificial intelligence to generate music." />
          </div>
        </div>
      </div>
    );
  }
}
