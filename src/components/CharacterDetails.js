import { useParams } from 'react-router-dom';

const CharacterDetails = ({ character }) => {
  const { characterId } = useParams();
  const characterSelected = character.find(
    (eachCharacter) => eachCharacter.id === characterId
  );
  return (
    <>
      <div class="card">
        <h2>{characterSelected.name}</h2>
      </div>
    </>
  );
};

export default CharacterDetails;