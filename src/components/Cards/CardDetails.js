import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, location, origin, gender, species, status, type } =
    fetchedData;

  let favs = JSON.parse(localStorage.getItem("favs"));

  let [favorites, setFavorites] = useState();


  useEffect(() => {
    let fav = JSON.parse(localStorage.getItem("favs"));
    if (fav) {
      setFavorites(JSON.parse(localStorage.getItem("favs")));
    } else {
      setFavorites([]);
    }
  }, []);

  const saveFavorites = (id) => {
    if (!favs) {
      favs = [];
    }
    if (favs.includes(id)) {
      let deleteFav = favs.filter((obj) => obj !== id);
      favs = deleteFav;
    } else {
      favs.push(id);
    }
    localStorage.setItem("favs", JSON.stringify(favs));
    setFavorites(favs);
    
  };

  let api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-around align-items-center ">
          <h1 className="text-center">{name}</h1>
          <div className="justify-content-end">
            <button
              onClick={() => saveFavorites(id)}
              className="btn btn-outline-primary"
            >
              {favorites && !favorites.includes(id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              )}
              {favorites && favorites.includes(id) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <img src={image} alt="" className="img-fluid" />

        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content">
          <div className="">
            <span className="fw-bold">Genero :</span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Especie :</span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Tipo :</span>
            {type === "" ? "Unknown" : type}
          </div>
          <div className="">
            <span className="fw-bold">Localización :</span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origen :</span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
