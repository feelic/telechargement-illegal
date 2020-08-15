import React from "react";
import styles from "./App.module.scss";
import Login from "./components/Login";
import Button from "./components/Button";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import youtubeLogo from "./Yt1.jpg";
import { Switch, Route, Link, Redirect } from "react-router-dom";

const categories = [
  "nouveautées",
  "actions",
  "romantique",
  "francais",
  "humours",
];

function App() {
  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <h1>
          TéLéCHARGEMENT
          <span className={styles.illegal}>-ILLéGAL.FR</span>
        </h1>
        <p>
          Le meilleur site pour télécharger gratutiement des films avec internet
        </p>
      </header>
      <nav className={styles.searchBar}>
        <input type="text" placeholder="rechercher" />
        <Link to="/recherche"><Button>Rechercher</Button></Link>
      </nav>
      <div className={styles.page}>
        <div className={styles.column}>
          <div className={styles.block}>
            <h2>Categorie</h2>
            <ul>
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to={`/films/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.block}>
            <h2>YouTubes</h2>
            <p>
              retrouver nous également sur youTubes
              <a
                className={styles.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=hEfU7s1yAAw"
              >
                <img src={youtubeLogo} alt="chaine youTubes" />
              </a>{" "}
            </p>
          </div>
        </div>
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/films/nouveautées" />
            </Route>
            {categories.map((cat) => (
              <Route key={cat} path={`/films/${cat}`}>
                <MovieList category={cat} />
              </Route>
            ))}
            <Route path="/film/:movieTitle">
              <MovieDetails />
            </Route>
            <Route path="/recherche">
              <h2>Recherche pour "Bienvenue chez les Chtis 2"</h2>
              <p>Pas de résultats pour cette recherche</p>
            </Route>
            <Route path="/404">
              <h2>ERRERUR 440</h2>
              <p>Désolés mais la page n'a pas été trouver :-(</p>
            </Route>
          </Switch>
        </main>
        <div className={styles.column}>
          <div className={styles.block}>
            <h2>Nos Sites Partenaires</h2>
            <ul>
              <li>
                <a href="https://netflix.fr">Neflix</a>
              </li>
              <li>
                <a href="https://primevideo.com">Amazing Prime Video's</a>
              </li>
              <li>
                <a href="https://hadopi.fr">Hadopi</a>
              </li>
            </ul>
          </div>
          <div className={styles.block}>
            <Login />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        Site internet Réalisé par feelic © 20020
      </footer>
    </div>
  );
}

export default App;
