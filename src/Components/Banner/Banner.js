import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY,imageUrl } from "../common/constants";
import axios  from "../common/axios";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[15])
      });
  }, []);
  return (
    <div 
    style={{backgroundImage: `url(${movie?imageUrl + movie.backdrop_path : ""})`}}
    className="banner">
      <div className="content">
        
        <h1 className='title'>{ movie?movie.title :"empty"} </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie?movie.overview : "empty"}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
