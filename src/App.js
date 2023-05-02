import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './comps/Home';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  
  return (
    <><div className='player-wrapper'>
      
      <ReactPlayer 
        className='react-player'
        url='https://www.youtube.com/watch?v=4y33h81phKU'
        playing
        loop
        width='1%'
        height='1%' />
        
        <Routes>

<Route path="" element={<Home />} />
</Routes>
    </div></>


        );
        }

        export default App;