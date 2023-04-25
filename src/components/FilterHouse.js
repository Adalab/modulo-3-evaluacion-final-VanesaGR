function FilterHouse(props){//filtrado por el select de las casas
    const filteredHouses =  (ev) => {
      props.handleFilterSelect(ev.target.value);
    
    };

    return(
        <>
        <form className="filter-form select-house" onSubmit={props.handleFilterSelect}>  
            <label htmlFor='selectHouse' className="label">Selecciona la casa: </label>
              <select className='select'
                name='selectHouse'
                id='sHouse'
                onChange={filteredHouses}
                value={props.select} //cuando cambia, filtra por personaje
              >
                <option value='Gryffindor'>Gryffindor</option>
                <option value='Hufflepuff'>Hufflepuff</option>
                <option value='Ravenclaw'>Ravenclaw</option>
                <option value='Slytherin'>Slytherin</option>
                        
              </select>
            </form>
        </>
    )
}

export default FilterHouse;