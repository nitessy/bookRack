import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Home.css';

function Home() {
  
    let navigate = useNavigate();
  
  return (
   <div> 
    <header>
      <h1>BookRack</h1>

      <div id="form">
        <a href='https://medium.com/@nitessy/a-journal-of-life-dbdf2e98ebe8'>
        <button >A write-up to make your day!</button> </a>
        <button onClick={() => navigate(-1) } className='logout'>Logout</button>
      
      </div>
     
    </header>

    <div class="container">
      <p></p>
    </div>



   </div>
  )
}

export default Home;