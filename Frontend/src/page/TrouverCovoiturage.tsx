import React from "react";
import "./TrouverCovoiturage.css";
import UserTable from "../composant/user";

function Trouver() {
  return (
    <>
      <div className="fond">
        <div className="nav">
          <h1 className="H11">Trajet Disponible</h1>
        </div>

        <div>
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default Trouver;
