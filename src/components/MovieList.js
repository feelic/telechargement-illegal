import React, { Fragment } from "react";
import films from "../constants/films";
import styles from "./MovieList.module.scss";
import { Link } from "react-router-dom";

export default function MovieList({ category }) {
  const filteredFilms = Object.values(films).filter(film => film.tags.includes(category));

  return (
    <Fragment>
      <h2 className={styles.categoryTitle}>
        Films de <span>{category}</span>
      </h2>
      <div className={styles.movieList}>
        {filteredFilms.map((film) => (
          <MovieCard key={film.title} {...film} />
        ))}
      </div>
      <p className={styles.loadMore}>
        <Link to="/404">charger plus de films</Link>
      </p>
    </Fragment>
  );
}

function MovieCard({ title, poster }) {
  return (
    <Link to={`/film/${title}`} className={styles.movieCard}>
      <h3>{title}</h3>
      <img alt="movie poster" src={poster} />
    </Link>
  );
}
