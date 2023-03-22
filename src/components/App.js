import '../styles/App.scss';
import {useEffect, useState} from 'react';
import Filters from './Filters';
import FilterHouse from './FilterHouse';
import FilterCharacter from './FilterCharacter';
import CharactersList from './CharactersList';


function App(){

  const [search, setSearch]=useState('');
  const [select, setSelect]=useState('Gryffindor');
  const [character, setCharacter]=useState([]);

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters/house/${select}`)
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.map(eachCharacter => ({             
          image: eachCharacter.image,       
          name: eachCharacter.name,
          alive: eachCharacter.alive,          
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,          
          
        }))
        setCharacter(cleanData)
      });
  }, [select])

  //Funciones manejadoras
  const handleFilterSearch = (value) => {
    setSearch(value);
  };

  const handleFilterSelect = (value) => {
    setSelect(value);
  }

  return(
    <div className='container'>
      <header className='header'></header>
      <main className='main'>
        
        <Filters
          search={search}
          handleFilterSearch={handleFilterSearch}
          
          handleFilterSelect={handleFilterSelect}
          ></Filters>
        
          
          <CharactersList FilteredCharacters={character} />
        </main>
      
    </div>
  );
}

export default App;