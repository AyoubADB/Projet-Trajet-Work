import React, { Component, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import "./user.css";
import { Link } from "react-router-dom";

interface User {
  Prenom: ReactNode;
  Nom: ReactNode;
  AdressePerso: ReactNode;
  AdresseTaff: ReactNode;
  HorraireMatin: ReactNode;
  HorraireSoir: ReactNode;
  id: number;
  nom: string;
}

class UserTable extends Component {
  state = {
    user: [] as User[],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/user")
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <div>
          <div>
            <table className="Backgound">
              <tbody className="spacing">
                {user.map((user) => (
                  <tr key={user.id}>
                    <div className="case">
                      <div className="display">
                        <div>
                          <img
                            className="pp"
                            src="../../img/Logo/pp.jpg"
                            alt="pp"
                          />
                        </div>

                        <div className="nom-prenom">
                          <h2>
                            <td className="H2">{user.Nom}</td>
                            <td className="H2">{user.Prenom}</td>
                          </h2>
                        </div>

                        <div className="padding">
                          <div className="depart-pp">
                            <h3 className="H3">RDV :</h3>
                            <td className="blanc">{user.AdressePerso}</td>
                          </div>
                          <div className="depart-pp">
                            <h3 className="H3">Départ :</h3>
                            <td className="blanc">{user.HorraireMatin}</td>
                          </div>
                        </div>

                        <div>
                          <div className="depart-pp">
                            <h3 className="H3">Déstination :</h3>
                            <td className="blanc">{user.AdresseTaff}</td>
                          </div>

                          <div className="depart-pp">
                            <h3 className="H3">Départ :</h3>
                            <td className="blanc">{user.HorraireSoir}</td>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="nav__link">
                          <Link to="/chat">Discuter</Link>
                        </div>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default UserTable;
