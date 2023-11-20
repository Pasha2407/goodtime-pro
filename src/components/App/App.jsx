import React from "react";
import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { Home } from "pages/Home/Home";
import { About } from "pages/About/About";
import { Game } from "pages/Game/Game";
import { GameList } from "pages/Game/GameList";
import { GameDetails } from "pages/Game/GameDetails";
import { ForMentor } from "pages/ForMentor/ForMentor";
import { Read } from "pages/Read/Read";
import Shop from "pages/Shop/Shop";
import { Idea } from "pages/Idea/Idea";
import Pictures from "pages/Pictures/Pictures";
import { Gameday } from "pages/Gameday/Gameday";
import { Contacts } from "pages/Contacts/Contacts";

function App() {
  return (
    <div className={css.Container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />

        <Route path="/game/:id" element={<GameList />} />
        <Route path="/game/:id/:id" element={<GameDetails />} />

        <Route path="/for-mentor" element={<ForMentor />} />
        <Route path="/read" element={<Read />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/gameday" element={<Gameday />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
