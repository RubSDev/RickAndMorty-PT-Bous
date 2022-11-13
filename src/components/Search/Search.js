import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPageNumber, getSearch = () => null }) => {
  let [saveSearch, setSaveSearch] = useState();

  
  

  let arrSearchLocalS = JSON.parse(localStorage.getItem("searches"));

 

  const saveArrSearches = (search) => {
    if (!arrSearchLocalS) {
      arrSearchLocalS = [];
    }
   
    arrSearchLocalS.push(search);
    localStorage.setItem("searches", JSON.stringify(arrSearchLocalS));
   
    
  };
  

  return (
    <form className=" d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSaveSearch(e.target.value);
        }}
        placeholder="Buscar por personaje"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setSearch(saveSearch);
          saveArrSearches(saveSearch)
          getSearch(saveSearch)
        }}
        className={` ${styles.btn} btn btn-primary fs-5`}
        
      >
        Buscar
      </button>
    </form>
  );
};

export default Search;
