import React from "react";
import { directors } from "../data";

function Directors() {
  return (<div>
    <h1>Directors Page</h1>
    { directors.map((dir) => {
      return(
        <div>
          <h3>Name: {dir.name}</h3>
          <p>Movies:</p>
          <ul>{dir.movies.map((el) => {
            return <li>{el}</li>
            })}</ul>
        </div>
      )
    })}
  </div>);
}

export default Directors;
