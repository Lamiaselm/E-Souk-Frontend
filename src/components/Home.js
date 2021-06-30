import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ArticleCard from "./ArticleCard";
import { api } from "../scripts/api";

export default function Home() {
  const [loaded, setloaded] = useState(false);
  const [articles, setarticles] = useState([]);

  const chargeArticles = async () => {
    let page = 1;
    api
      .get(`article/page/${page}`)
      .then((res) => {
        setarticles(res.data);
        setloaded(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => chargeArticles(), []);

  return (
    <div>
      <NavBar />
      <div className="category">
        <h3>Tout les Articles</h3>
      </div>
      <div className="card-container">
        {loaded
          ? articles.map((elt) => <ArticleCard key={elt.id} {...elt} />)
          : null}
      </div>
    </div>
  );
}
