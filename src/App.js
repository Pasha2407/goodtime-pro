import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/home/Home'
import About from './components/pages/about/About';
import {Game, Sports, Desktop,
   Sports1, Sports2, 
   Desktop1} from './components/pages/game/Game';
import {ForMentor, Item1} from './components/pages/for-mentor/ForMentor';
import Read from './components/pages/read/Read';
import Shop from './components/pages/shop/Shop';
import Idea from './components/pages/idea/Idea';
import Pictures from './components/pages/pictures/Pictures';
import Gameday from './components/pages/gameday/Gameday';
import Contacts from './components/pages/contacts/Contacts';

function App() {
  return (
    <div className='App'>
     <Routes>
      <Route path='/' element ={<Home/>}/>

      <Route path="/about" element={<About/>} />
      <Route path="/game" element={<Game/>} />
      <Route path='/for-mentor' element ={<ForMentor/>}/>
      <Route path="/read" element={<Read/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path='/idea' element ={<Idea/>}/>
      <Route path="/pictures" element={<Pictures/>} />
      <Route path="/gameday" element={<Gameday/>} />
      <Route path="/contacts" element={<Contacts/>} />

      <Route path="/game/sports" element={<Sports/>} />
      <Route path="/game/desktop" element={<Desktop/>} />

      <Route path="/game/sports/1" element={<Sports1/>} />
      <Route path="/game/sports/2" element={<Sports2/>} />

      <Route path="/game/desktop/1" element={<Desktop1/>} />

      <Route path="/for-mentor/1" element={<Item1/>} />


      

      
     </Routes>
     </div>
  );
}

export default App;
