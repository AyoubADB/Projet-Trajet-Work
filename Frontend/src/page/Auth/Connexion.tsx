import React, { useState } from "react";
import { Link } from "react-router-dom";

function Connexion() {
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const propositionCovoiturage = {
      ID,
      Password,
    };

    console.log(propositionCovoiturage);
  };

  return (
    <>
      <div className="depart-arriver">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                className="form-control"
                type="email"
                placeholder=" Adresse courriel "
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label>
              <br />
              <input
                className="form-control"
                type="password"
                placeholder=" Mot de passe "
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <br />
          <br />

          <button className="btn btn-info btn-block" type="submit">
            Connexion
          </button>
        </form>
        <br />
        <br />
        <div className="nav__link">
          <Link className="inscription" to="/inscription">
            {" "}
            Je n'est pas encore de compte ?
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Connexion;
