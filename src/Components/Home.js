import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './Home.css';
import books2 from './Picures/Book6.jpg'
import scars from './Picures/Scars.jpg'
import vssut from './Picures/vssut.jpg'
import one from './Picures/Onelast.jpg'

function Home() {
  
    let navigate = useNavigate();
  
  return (
   <div> 
    <header>
      <h1 className='head'>BookRack</h1>

      <div id="form">
        <a href='https://medium.com/@nitessy/a-journal-of-life-dbdf2e98ebe8'>
        <button >A write-up to make your day!</button> </a>
        <button onClick={() => navigate(-1) } className='logout'>Logout</button>
      
      </div>
     
    </header>

   <a href='https://medium.com/@nitessy/book-lovers-day-august-9-eee8d9939ace'> 
    <div className="container">
      <img  src={books2} ></img>
    <div className='details'>
      <h1> For the Lovers of Book!</h1>
      <p> Know what a book is? <br/>
      And how a book lover is different from the world !
      </p>
      </div>
    </div>
    </a>



<a href='https://www.instagram.com/p/CuKJPU3xXpo/?img_index=1'> 
    <div className="container">
      <img  src={vssut} ></img>
    <div className='details'>
      <h1> A freshers's views on VSSUT!</h1>
      <p> My experience at VSSUT, Burla as a fresher <br/>
      Posted by: The Literary Society, VSSUT
      </p>
      </div>
    </div>
    </a>

    <a href='https://medium.com/@nitessy/scars-670350837f7d'> 
    <div className="container">
      <img  src={scars} ></img>
    <div className='details'>
      <h1> A lyrical healing</h1>
      <p> Writtten on the scars that we tend to hide from the world<br/>
      
      </p>
      </div>
    </div>
    </a>

    <a href='https://medium.com/@nitessy/one-last-time-187ac4be56d8'> 
    <div className="container">
      <img  src={one} ></img>
    <div className='details'>
      <h1> A soldier's last message for his beloved</h1>
      <p> Expressed as a poem a soldier is writing in form of a letter for his beloved <br/>
    
      </p>
      </div>
    </div>
    </a>

   </div>
  )
}

export default Home;