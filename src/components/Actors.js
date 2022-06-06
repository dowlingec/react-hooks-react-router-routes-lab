import React from "react";
import { actors } from "../data";

function Actors() {
  return (<div>
    <h1>Actors Page</h1>
    { actors.map((act) => {
      return(
        <div>
          <h3>Name: {act.name}</h3>
          <ul>Movies: {act.movies.map((el) => {
            return <li>{el}</li>
            })}</ul>
        </div>
      )
    })}
  </div>);
}

export default Actors;
