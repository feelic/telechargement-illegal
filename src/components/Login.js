import React from "react";
import styles from "./Login.module.scss";
import franceConnect from "./logo-fc.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h2>Se identifer</h2>
      <div className={styles.loginForm}>
        <p>
          <label htmlFor="login">Se identifer:</label>
          <input type="text" id="login" />
        </p>
        <p>
          <label htmlFor="password">
            Mot de passe{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/search?q=mot+de+passe+perdu&oq=mot+de+passe+perdu"
            >
              perdu?
            </a>
            :
          </label>
          <input type="text" id="password" />
        </p>
        <p>
          <input type="checkbox" />
          <label>Ne pas se souvenir de moi</label>
        </p>
        <Link to="/recherche">
          <Button>se Login</Button>
        </Link>
        {' '}<Link to="/404">Signer Haut</Link>
      </div>
      <a className={styles.franceConnect} href="https://franceconnect.gouv.fr/">
        <img src={franceConnect} alt="se connecter avec France Conenct" />
      </a>
    </div>
  );
}
