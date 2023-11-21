import React from "react";
import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { Home } from "pages/Home/Home";
import { About } from "pages/About";
import { Game, GameList, GameDetails } from "pages/Game";
import { ForMentor } from "pages/ForMentor";
import { Read } from "pages/Read";
import Shop from "pages/Shop";
import { Idea } from "pages/Idea";
import Pictures from "pages/Pictures";
import { Gameday } from "pages/Gameday";
import { Contacts } from "pages/Contacts";

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
