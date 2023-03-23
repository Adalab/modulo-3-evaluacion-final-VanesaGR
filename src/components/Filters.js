import FilterHouse from './FilterHouse';
import FilterCharacter from './FilterCharacter';
import Error from './Error';

const Filters = (props) => {

    return (
      <>
        <FilterCharacter handleFilterSearch={props.handleFilterSearch} search={props.search}></FilterCharacter>
        <Error filteredCharacter={props.filteredCharacter}/>
        <FilterHouse handleFilterSelect={props.handleFilterSelect} select={props.select}></FilterHouse>
      </>
    )
};
  
  export default Filters;