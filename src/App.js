import React from 'react';
import './App.css';
import Moon from './Assets/moon.png'

export default function App() {
  return (
    <div>
      <div className="header">
        <img className="moon" alt="" src={Moon}></img>
        <h1 className="header-title">Moon</h1>
        <p className="header-content">A free, fully responsive React site template</p>
      </div>
    </div>
  )
}
