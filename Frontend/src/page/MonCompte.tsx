import React, { useState } from "react";
import Connexion from "./Auth/Connexion";

function MonCompte() {
  return (
    <>
      <div className="fond">
        <div className="nav">
          <h1 className="H11">Mon Compte</h1>
        </div>

        <div>
          <Connexion />
        </div>
      </div>
    </>
  );
}

export default MonCompte;
