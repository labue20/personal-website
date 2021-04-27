import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';

import Section from './components/section';
import Profile from './components/profile';
import Skills from './components/skills';
import Experience from './components/experience';
import Footer from './components/footer';

import resumePDF from './icons/software_engineer_resume.pdf';
import styled from 'styled-components';

function App() {
  return (
    <div>
      
      <div className="App" style={{ backgroundColor: '#f7e7cd' }}>
          <span id="top"></span>
          <header className="App-header">
            <Profile />
            <Section />
            <Skills />
            <Experience />
            <a href={ resumePDF } target="_blank" rel="noopener noreferrer">Resume</a>
          </header>
          <Footer />
      </div>
    </div>
    
  
  );
}

export default App;

const Container  = styled.div`
  width: 100%;
  height: 150vh;
  background:#eee;
  display: grid;
  grid-template-rows: 58px auto;
`
const Wrapper = styled.div `
  background: white;
  display: grid;
  grid-template-rows: 68px auto;

  margin-top:10px;
  margin-right:40px;
  margin-left:40px;
  margin-top:30px;
  height: 140vh;
`