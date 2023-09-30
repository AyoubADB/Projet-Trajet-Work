import React, { useState } from "react";
import "./Inscription.css";
import { Link } from "react-router-dom";

function inscription() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [AdressePerso, setAdressePerso] = useState("");
  const [AdresseTaff, setAdresseTaff] = useState("");
  const [HoraireMatin, setHoraireMatin] = useState("");
  const [HoraireSoir, setHoraireSoir] = useState("");
  const [Mdp, setMdp] = useState("");
  const [MdpConf, setMdpConf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const signUp = {
      Nom,
      Prenom,
      Mail,
      AdressePerso,
      AdresseTaff,
      HoraireMatin,
      HoraireSoir,
      Mdp,
      MdpConf,
    };

    console.log(signUp);
  };

  return (
    <>
      <div className="fond">
        <div className="nav">
          <h1 className="H11">Mon Compte</h1>
        </div>

        <div className="depart-arriver">
          <form onSubmit={handleSubmit}>
            <div className="inscription">
              <input
                className="form-control"
                type="text"
                placeholder=" Nom "
                value={Nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <br />
            <div className="inscription">
              <input
                className="form-control"
                type="text"
                placeholder=" Prenom "
                value={Prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>

            <br />

            <div className="inscription">
              <input
                className="form-control"
                type="email"
                placeholder=" Adresse courriel "
                value={Mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <br />

            <div className="inscription">
              <input
                className="form-control"
                type="maps"
                placeholder=" Adresse de votre domicile "
                value={AdressePerso}
                onChange={(e) => setAdressePerso(e.target.value)}
              />
            </div>

            <br />

            <div className="inscription">
              <input
                className="form-control"
                type="maps"
                placeholder=" Adresse de votre entreprise "
                value={AdresseTaff}
                onChange={(e) => setAdresseTaff(e.target.value)}
              />
            </div>

            <br />

            <div className="inscription">
              <label>
                <label className="blanc"> Horaire matin </label>
                <input
                  className="form-control"
                  type="time"
                  placeholder=" Horaire matin "
                  value={HoraireMatin}
                  onChange={(e) => setHoraireMatin(e.target.value)}
                />
              </label>

              <label>
                <label className="blanc"> Horaire soir </label>
                <input
                  className="form-control"
                  type="time"
                  placeholder=" Horaire soir "
                  value={HoraireSoir}
                  onChange={(e) => setHoraireSoir(e.target.value)}
                />
              </label>
            </div>

            <br />

            <div className="inscription">
              <input
                className="form-control"
                type="password"
                placeholder=" Mot de passe "
                value={Mdp}
                onChange={(e) => setMdp(e.target.value)}
              />
            </div>
            <br />

            <div className="inscription">
              <input
                className="form-control"
                type="password"
                placeholder=" Confirmer Mot de passe "
                value={MdpConf}
                onChange={(e) => setMdpConf(e.target.value)}
              />
            </div>

            <br />
            <br />

            <button className="btn btn-info btn-block" type="submit">
              Inscription
            </button>
          </form>
          <br />
          <div className="nav__link">
            <Link className="inscription" to="/mon-compte">
              {" "}
              J'ai déjà un compte ?
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default inscription;
