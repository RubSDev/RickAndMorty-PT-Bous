import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";
import Favorites from "../Filters/Category/Favorites";
import Searches from "./Category/Searchs";

const Filters = ({setGender, setStatus, setPageNumber, setSpecies, sendSearch}) => {


  let clear = ()=>{
    setGender("") 
    setStatus("") 
    setPageNumber("") 
    setSpecies("")
    window.location.reload(false)
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filtro</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Borrar filtros
      </div>

      <div className="accordion" id="accordionExample">
       <Status setPageNumber={setPageNumber} setStatus={setStatus}/>       
       <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
       <Gender setPageNumber={setPageNumber} setGender={setGender}/>
       <Favorites/>
       <Searches sendSearchTwo={sendSearch}/>
      </div>


    </div>
  );
};

export default Filters;
