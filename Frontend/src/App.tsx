import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Vehicule from "./page/Vehicule";
import Trouver from "./page/TrouverCovoiturage";
import Proposition from "./page/Proposition";
import Chat from "./page/chat";
import MonCompte from "./page/MonCompte";
import Inscription from "./page/Auth/Inscription";
import Connexion from "./page/Auth/Connexion";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicule-disponible" element={<Vehicule />} />
        <Route path="/trouver-un-covoiturage" element={<Trouver />} />
        <Route path="/proposer-un-covoiturage" element={<Proposition />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
    </div>
  );
}

export default App;
