import FilterHouse from './FilterHouse';
import FilterCharacter from './FilterCharacter';

const Filters = (props) => {

    return (
      <>
        <FilterCharacter handleFilterSearch={props.handleFilterSearch} search={props.search}></FilterCharacter>
        <FilterHouse handleFilterSelect={props.handleFilterSelect} select={props.select} ></FilterHouse>
      </>
    )
};
  
  export default Filters;