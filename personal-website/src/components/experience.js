import React, { Component } from 'react';

// Job section blueprint
function Job(props) {
  return (
    <div className="jobs">
      <div className="job-section">
        <h3>{props.co}</h3>
        <div>{props.title}</div>
      </div>
      <div className="job-section">{props.date}</div>
    </div>
  );
}

function Desc(props) {
  return <span className="description">{props.desc}</span>;
}

export default class Experience extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title"><hr/>
          <h2>&#187; Experience</h2>
        </div>
        <Job co="Le Duff America" title="Software Engineer Intern" 
        
        date="June 2020 - Present"/>
        <Desc desc="Successful build and implement"/>
       
      </div>
    );
  }
}
