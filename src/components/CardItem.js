import React from "react";
import { Link } from "react-router-dom";

export const CardItem = ({ src, text, label, path }) => {
  return (
    <>
      <li className="cards__item">
        <Link to={path} className="cards__item__link">
          <figure data-category={label} className="cards__item__pic-wrap">
            <img src={src} alt="Travel Image" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};
