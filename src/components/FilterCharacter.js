function FilterCharacter(props){//filtrado de personajes por el input
    const filteredCharacters = (ev) => {
        props.handleFilterSearch(ev.target.value);
    }
  
      return (
        <form className="filter-form" onSubmit={props.handleFilterSearch}>  
          <label className="input_filter"> Busqueda por Personaje: </label>
          <input
          className="search"
          type="text"
          name="search"
          placeholder="Busca un personaje"
          onInput={filteredCharacters}
          value={props.search}
        /> 
      </form>
        
      );
    }
    
    export default FilterCharacter;