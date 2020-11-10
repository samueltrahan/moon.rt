import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Moon from './Assets/moon.png'
import Section from './components/Section/Section';  

export default function App() {
  return (
    <Router>
      <div className="header">
        <img className="moon" alt="" src={Moon}></img>
        <h1 className="header-title">Moon</h1>
        <p className="header-content">A free, fully responsive React site template</p>
      </div>
      <div className="section">
        <Section />
      </div>
    </Router>
  )
}
