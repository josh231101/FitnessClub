import React from "react";
import "./Article.css";

<<<<<<< HEAD
const Article = ({ bgImg, title, author }) => {
=======
const Article = ({ bgImg, title }) => {
>>>>>>> c2e23ab1e1d00ca8919335ed85318a0d5dde2419
  return (
    <article className="article">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="service__bg"
      ></div>
      <h4 className="article__title">{title}</h4>
<<<<<<< HEAD
      <p className="article__author">- {author}</p>
=======
>>>>>>> c2e23ab1e1d00ca8919335ed85318a0d5dde2419
    </article>
  );
};

export default Article;
