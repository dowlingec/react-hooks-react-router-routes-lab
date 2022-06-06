import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
      <h1>Movies Page</h1>
        {movies.map((movie) => {
          return (
            <div>
              <h3>Name: {movie.title}</h3>
              Time: {movie.time}
              <ul>Movies:
                {movie.genres.map((el) => {return (<li>{el}</li>)})}
              </ul>
            </div>
          )
        })}
  </div>);
}

export default Movies;
