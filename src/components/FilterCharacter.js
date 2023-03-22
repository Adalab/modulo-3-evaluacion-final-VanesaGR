function FilterCharacter(props){//filtrado de personajes por el input
    const filteredCharacters = (ev) => {

    }
    // props.characters.filter((character) => {
    //      return character.name.toLowerCase().includes(props.filterSearch.toLowerCase());    
    // })

      return (
        <form className="filter-form" onSubmit={props.handleFilterSearch}>  
        <label className="input_filter"> Busqueda por Personaje </label>
        <input
        className="input_character"
        type="search"
        name="search"
        placeholder="Busca un personaje"
        onInput={filteredCharacters}
        value={props.search}
      /> 
      </form>
        
      );
    }
    
    export default FilterCharacter;