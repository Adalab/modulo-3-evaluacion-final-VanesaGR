function Filters({ handleFilterSearch }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterSearch(value);
  };

  

  return(
    <div className='container'>
      <header className='header'></header>
      <main className='main'>
        <form className='filter-form'>
          <label htmlFor='searchCharacter'>Busca por personaje: </label>
          <input
            className='searchCharacter-input input'
            type='search'
            name='searchCharacter'
            placeholder='Introduce un personaje'
            onChange={handleChange}/><br/><br/>
            <label htmlFor='searchHouse'>Selecciona la casa: </label>
            <select className='select'
              name='searchHouse'
              id='searchHouse'>
              <option value='Gryffindor'>Gryffindor</option>
              <option value='Hufflepuff'>Hufflepuff</option>
              <option value='Ravenclaw'>Ravenclaw</option>
              <option value='Slytherin'>Slytherin</option>  
            </select>
        </form>
      </main>
      
    </div>
  )
}

export default Filters;