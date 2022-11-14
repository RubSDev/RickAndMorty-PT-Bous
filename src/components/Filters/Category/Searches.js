import React, { useState, useEffect } from "react";
import styles from "./Category.module.scss";

const Searches = ({ sendSearchTwo }) => {
  let [arrSearch, setArrSearch] = useState([]);

  useEffect(() => {
    let search = JSON.parse(localStorage.getItem("searches"));
    if (search) {
      setArrSearch(JSON.parse(localStorage.getItem("searches")));
    }
  }, [sendSearchTwo]);

  const deleteSearch = (index) => {
    let search = JSON.parse(localStorage.getItem("searches"));
    search.splice(index, 1);
    localStorage.setItem("searches", JSON.stringify(search));
    setArrSearch(search)
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          Busquedas
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse "
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        {arrSearch &&
          arrSearch.map((item, index) => (
            <div key={index} className="accordion-body d-flex flex-wrap gap-3">
              <p className="btnDeleteSearch">{item}</p>
              <button
                onClick={() => deleteSearch(index)}
                className={styles.btnDeleteSearch}
              >
                <p>X</p>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searches;
