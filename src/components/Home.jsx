import React from "react";
import axios from "axios";
import Card from './Card'
export default function Home(props) {

 const [episodes, setEpisodes] = React.useState([])

 React.useEffect(() =>{
  axios('https://rickandmortyapi.com/api/episode')
  .then(episodes=> setEpisodes(episodes.data))
  .catch((error) => {
    console.error("Error fetching episodes:", error);
  });
 },[]) 

  return (
    <div>
      <h1>Episodios</h1>
      <hr />
      {
        episodes.results && episodes.results.map((episode, index)=>{
          return(
            <Card
            episode={episode}
            key={index}
            Nombre={episode.name }
            Estreno = {episode.air_date }
            />
          )
        })
      }
    </div>
  );
}
