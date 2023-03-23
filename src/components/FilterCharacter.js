function FilterCharacter(props){//filtrado de personajes por el input
    const filteredCharacters = (ev) => {
      ev.preventDefault();
        props.handleFilterSearch(ev.target.value);      
                  
    }

    function handleSubmit(event){
      event.preventDefault();
    }

    return (
        <form className="filter-form" onSubmit={handleSubmit}>  
          <label className="label" htmlFor="search"> Busqueda por Personaje: </label>
          <input
          className="search"
          type="text"
          name="search"
          autoComplete="off"
          id="search"
          placeholder="Busca un personaje"
          onInput={filteredCharacters}
          value={props.search}
        /> 
      </form>
        
      );
    }
    
    export default FilterCharacter;