import React from "react";
import films from "../constants/films";
import styles from "./MovieDetails.module.scss";
import Button from "./Button";
import { useRouteMatch, Redirect } from "react-router-dom";

export default function MovieDetails() {
  const match = useRouteMatch();

  if (!films[match.params.movieTitle]) {
    return <Redirect to="/404" />;
  }

  const { title, poster } = films[match.params.movieTitle];
  return (
    <div className={styles.details}>
      <h2>Télécharger {title}</h2>
      <div className={styles.pitch}>
        <img src={poster} alt="movie poster" />
        <p>
          Paris, juin 1940. Le couple de Gaulle est confronté à l’effondrement
          militaire et politique de la France. Charles de Gaulle rejoint Londres
          pour tenter de poursuivre la lutte tandis que sa femme, se retrouve
          avec ses trois enfants sur la route de l’exode. Elle cherche à
          échapper à l’avancée allemande. Le destin saura les réunir au
          lendemain du 18 juin 1940.{" "}
        </p>
      </div>
      <h2>Télécharger</h2>
      <p>
        Remplissez ce rapide questionnaire pour accéder à votre téléchargement
      </p>
      <div className={styles.form}>
      <p>
        <label htmlFor="nom">Nom</label>
        <input id="nom" type="text" />
      </p>
      <p>
        <label htmlFor="prenom">Prénom</label>
        <input id="prenom" type="text" />
      </p>
      <p>
        <label htmlFor="adresse">Adresse</label>
        <input id="adresse" type="text" />
      </p>
      <p>
        <label htmlFor="cni">Numéro de carte d'identité</label>
        <input id="cni" type="text" />
      </p>
      </div>
      <p className={styles.hadopi}>
        <input id="info" type="checkbox" checked disabled />
        <label htmlFor="info">
          Je souhaite transmettres mes informations à la Haute autorité pour la
          diffusion des œuvres et la rotection des droits sur Internet (HADOPI)
        </label>
      </p>
      <p>
        <Button>Télécharger illégalement {title}</Button>
      </p>
    </div>
  );
}
