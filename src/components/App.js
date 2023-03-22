import '../styles/App.scss';
import {useEffect, useState} from 'react';
import Filters from './Filters';
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
          id: eachCharacter.id,
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

  const filteredCharacter = character.filter((eachCharacter) => {
    return eachCharacter.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  return(
    <div className='container'>
      <header className='header'></header>
      <main className='main'>
        
        <Filters
          search={search}
          handleFilterSearch={handleFilterSearch}
          
          select={select}
          handleFilterSelect={handleFilterSelect}
          ></Filters>
        
          
          <CharactersList filteredCharacter={filteredCharacter} />
        </main>
      
    </div>
  );
}

export default App;