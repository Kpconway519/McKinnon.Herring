
import React from "react";


function gridSquare(props) {
  return (
      <div className="galleryContainer">
          <div className="artTitle">
           <h3>{props.title}</h3>
          </div>
        <img src={props.image} className="gridSquare"></img>
        <div className="artDetails">
          <p>{props.year}</p>
          <p>{props.materials}</p>
          <p>{props.dimensions}</p>
        </div>
      </div>
  )}

export default gridSquare