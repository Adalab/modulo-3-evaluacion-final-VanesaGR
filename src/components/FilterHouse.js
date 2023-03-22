const FilterHouse = (props) => {
    const handleSearch =  (ev) => {
      props.handleFilterHouse(ev.target.value);
    
    };

    return(
        <>
        <form className="filter-form" onSubmit={props.handleSubmit}>  
            <label htmlFor='searchHouse'>Selecciona la casa: </label>
              <select className='select'
                name='searchHouse'
                id='searchHouse'
                onChange={handleSearch} //cuando cambia, filtra por personaje
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