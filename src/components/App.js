import '../styles/App.scss';
import {useEffect, useState} from 'react';
import callToApi from '../services/callToApi';
import Filters from './Filters';


function App(){

  const [search, setSearch]=useState('');
  const [select, setSelect]=useState('');
  const [character, setCharacter]=useState('');

  useEffect(() => {
    callToApi().then((cleanData) => {
      console.log(cleanData);
      setCharacter(cleanData);
    });
  }, []);

  const handleFilterSearch = (value) => {
    setSearch(value);
  };

  const handleFilterSelect = (value) => {
    setSelect(value);
  }

  return(
    <Filters/>
  )

}

export default App;