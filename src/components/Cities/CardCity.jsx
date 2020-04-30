import React from "react";
import { Link } from "react-router-dom";
function CardCity({ id, image, title, wiki, player, city, region, country }) {
  return (
    <div class="card mb-3">
      <Link to="/">
        <button type="button" class="btn btn-outline-info">
          Retour à la map monde
        </button>
      </Link>
      <h3 class="card-header">{title}</h3>
      <div>
        <div class="card-body text-center">
          <p class="card-text">
            <b>Ville</b> : {city}
          </p>
          <p class="card-text">
            <b>Région</b> : {region}
          </p>
          <p class="card-text">
            <b>Pays</b> : {country}
          </p>
        </div>
        <div class="card-body text-center">
          <img top width="30%" src={image} alt={title} />
        </div>
        <div class="card-body text-center">
          <iframe
            width="30%"
            height="300vw"
            id={id}
            src={player}
            title={title}
          />
        </div>
        <div class="card-body text-center">
          <p class="card-text">
            plus d'information sur : <a href={wiki}>{wiki}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardCity;
