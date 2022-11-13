import React, { useState, useEffect } from "react";

const Searches = ({ sendSearchTwo }) => {
  let [arrSearch, setArrSearch] = useState([]);

  useEffect(() => {
    let search = JSON.parse(localStorage.getItem("searches"));
    if (search) {
      setArrSearch(JSON.parse(localStorage.getItem("searches")));
    }
  }, [sendSearchTwo]);

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
              <p>{item}</p>
              <button className="btn btn-outline-primary">
                <p>X</p>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searches;
