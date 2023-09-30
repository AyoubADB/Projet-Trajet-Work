import React, { useState } from "react";

function Proposition() {
  const [depart, setDepart] = useState("");
  const [heureDepart, setHeureDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [heureArrivee, setHeureArrivee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const propositionCovoiturage = {
      depart,
      heureDepart,
      arrivee,
      heureArrivee,
    };

    console.log(propositionCovoiturage);
  };

  return (
    <>
      <div className="fond">
        <div className="nav">
          <h1 className="H11">Proposer Un Covoiturage</h1>
        </div>
        <div className="depart-arriver">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Départ "
                  value={depart}
                  onChange={(e) => setDepart(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label>
                <br />
                <input
                  className="form-control"
                  type="time"
                  placeholder=" Heure de départ: "
                  value={heureDepart}
                  onChange={(e) => setHeureDepart(e.target.value)}
                />
              </label>
            </div>

            <br />
            <br />
            <br />

            <div>
              <label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Lieu d'arrivée: "
                  value={arrivee}
                  onChange={(e) => setArrivee(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label>
                <br />
                <input
                  className="form-control"
                  type="time"
                  placeholder=" Heure d'arrivée: "
                  value={heureArrivee}
                  onChange={(e) => setHeureArrivee(e.target.value)}
                />
              </label>
            </div>

            <br />
            <br />

            <button className="btn btn-info btn-block" type="submit">
              Proposer
            </button>
          </form>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Proposition;
