import React from "react";
import "../composant/Nav.css";
import "../page/Home.css";

function Home() {
  return (
    <>
      <div className="fond">
        <div className="nav">
          <div className="H11">
            <h1>Bienvenue</h1>
          </div>
        </div>

        <div className="centres">
          <div className="centre2">
            <h2 className="font2">
              Découvrez une nouvelle manière de simplifier votre quotidien
              professionnel avec notre application de covoiturage dédiée aux
              entreprises.
            </h2>
            <p className="font3">
              Oubliez les tracas liés à la circulation, au stationnement et aux
              dépenses excessives en carburant. Notre application vous offre la
              solution idéale pour optimiser vos trajets domicile-travail en
              toute simplicité.
            </p>
          </div>
          <img
            className="logoBleu"
            src="../../img/Logo/trajet-work-bleu.png"
            alt="trajet work bleu"
          />
        </div>

        <div className="centreConviviale">
          <p className="font">
            Grâce à notre plateforme conviviale, vous pourrez facilement trouver
            des collègues partageant votre itinéraire et votre horaire,
            réduisant ainsi votre empreinte carbone tout en économisant sur vos
            frais de déplacement. Imaginez-vous assis confortablement dans un
            véhicule partagé, libéré du stress de la conduite, et en bonne
            compagnie pour discuter ou travailler pendant votre trajet.
          </p>
          <img
            className="logoBleu"
            src="../../img/Logo/plateforme-conviviale.png"
            alt="plateforme conviviale"
          />
        </div>

        <div className="centres">
          <p className="font">
            Notre application vous offre également la possibilité de gérer vos
            trajets, de coordonner les horaires avec vos collègues, et même de
            partager les frais de carburant de manière transparente. En plus de
            réduire vos dépenses, vous contribuez activement à la préservation
            de l'environnement en réduisant la congestion routière.
          </p>
          <img
            className="logoBleu"
            src="../../img/Logo/environement.png"
            alt="environement"
          />
        </div>

        <div className="centreConviviale">
          <p className="font">
            Rejoignez notre communauté de professionnels conscients de l'impact
            environnemental et de la nécessité de simplifier leur vie
            quotidienne. Faites partie de la révolution du covoiturage en
            entreprise et transformez vos trajets en une expérience plus
            économique, écologique et agréable. Téléchargez dès maintenant notre
            application et commencez à faire la différence dès aujourd'hui !
          </p>
          <img
            className="logoBleu"
            src="../../img/Logo/rejoin-nous.png"
            alt="rejoin-nous"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
