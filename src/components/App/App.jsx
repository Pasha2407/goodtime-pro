import React from "react";
import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import { Home } from "pages/Home/Home";
import { About } from "pages/About/About";
import { Game, Sports, Desktop } from "pages/Game/Game";
import { GameDetails } from "pages/Game/GameDetails";
import { ForMentor } from "pages/ForMentor/ForMentor";
import { Read } from "pages/Read/Read";
import Shop from "pages/Shop/Shop";
import { Idea } from "pages/Idea/Idea";
import Pictures from "pages/Pictures/Pictures";
import { Gameday } from "pages/Gameday/Gameday";
import { Contacts } from "pages/Contacts/Contacts";
import { GameDetailsPlus } from "pages/Game/gdp";

function App() {
  return (
    <div className={css.Container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/sports" element={<Sports />} />
        <Route path="/game/sports/:id" element={<GameDetails />} />
        <Route path="/game/sports/:id/:id" element={<GameDetailsPlus />} />
        <Route path="/game/desktop" element={<Desktop />} />
        <Route path="/game/desktop/:id" element={<GameDetails />} />

        <Route path="/for-mentor" element={<ForMentor />}>
          {/* <Route path="1" element={<Item1 />} /> */}
        </Route>
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
