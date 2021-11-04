import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [ pokemon, setPokemon ] = useState([])

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => {
        setPokemon(response.data.results);
      })
    }

  return (
    <div className='App'>
      <h1>Name that Pokemon</h1>
      <hr/>
      <button onClick={fetchPokemon}>Fetch Pokemon </button>
      <hr />
      <div>
        {pokemon.length > 1 ? pokemon.map((obj, idx) => {
          return(<li key={idx}>{obj.name}</li>)
        }): null}
      </div>
      
    </div>
  )

};

export default App;
