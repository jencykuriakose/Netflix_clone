
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './Components/App.css'
import {Horrormovie,ActionMovies} from "./url"
import Banner from "./Components/Banner/Banner";
import "./Components/Banner/Banner.css"
import RowPost from "./Components/RowPost/RowPost";





function App() {
  return (
    <div className="App">
      <header className="App-header">
    
     <NavBar/>
     <Banner/>
     <RowPost  url={Horrormovie}  title="Netflix Orginals"/>
     <RowPost  url={ActionMovies} title="Action Movies" isSmall/> 
      
      </header>
    </div>
  );
}

export default App;
