
import React, { useEffect, useState } from 'react';
import './RowPost.css';
import YouTube from "react-youtube" 
import axios from '../common/axios';
import { imageUrl,API_KEY  } from '../common/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid,seturlid]=useState("");

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data); // Corrected log statement
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100% ',
    playerVars: {
      // https://developers.google.com/youTube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleMovie=(id)=>{
console.log(id);
 axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then(response =>{
 if(response.data.results.length!==0){
  seturlid(response.data.results[0])
 }else{
  console.log("trailer is not available");
 }
 })
  }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj) => (
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposters" : "poster"  } alt="poster" src={`${imageUrl + obj.backdrop_path}`} key={obj.id} />
        ))}
      </div>
  
     { urlid &&   <YouTube  opts={opts} videoId={urlid.key}/> }

    </div>
  );
}

export default RowPost;
