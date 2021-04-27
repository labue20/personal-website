import React, { Component } from 'react';

//skill category
function Skill(props) {
  return (
    <div>
      <h4>{props.title}</h4>
    </div>
  );
}

//individual skill name
function SkillPoint(props) {
  return (
    <div id="smaller">{props.point}</div>
  );
}

export default class Skills extends Component {
  render() {
    return (
      <div id="parent">
        <div id="title"><hr/>
          <h2>&#187; Skills</h2>
        </div>
        <div className="skills">
          <div id="skill-section">
            <Skill title="Languages"/>
            <SkillPoint point="JavaScript" />
            <SkillPoint point="Python" />
            <SkillPoint point="HTML" />
            <SkillPoint point="CSS" />
            <SkillPoint point="Java" />
            <SkillPoint point="SQL" />
            <SkillPoint point="C#" />
          </div>
          <div id="skill-section">
            <Skill title="Frameworks"/>
            <SkillPoint point="Node" />
            <SkillPoint point="React" />
            <SkillPoint point = "Springboot"/>
          </div>
          <div id="skill-section">
            <Skill title="Tools"/>
            <SkillPoint point="SQL Management studio" />
            <SkillPoint point="Visual Studio Code" />
            <SkillPoint point="Expression Engine" />
            <SkillPoint point="Git + Github" />
            <SkillPoint point="Bash" />
          </div>
        
        </div>
      </div>
    );
  }
}
