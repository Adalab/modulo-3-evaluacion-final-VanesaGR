// import { useParams } from 'react-router-dom';

const CharacterDetails = ({ characterSelected }) => {
  // const { id } = useParams();
  // const characterSelected = character.find(
  //   (eachCharacter) => eachCharacter.id === id
  // );
  return (
    <>
      <h2>Detalle de contacto</h2>
      <div class="card">
        <a href=".">
          <img
            className="card__img"
            src={characterSelected.image}
            alt={characterSelected.name}
            title={characterSelected.name}
          ></img>
          <h4 class="card__title">
            {characterSelected.name}
          </h4>
          <p className="card__alive">{characterSelected.alive}</p>
          <p className="card__species">{characterSelected.species}</p>
          <p className="card__gender">{characterSelected.gender}</p>
          <p className='card__house'>{characterSelected.house}</p>
        </a>
      </div>
    </>
  );
};

export default CharacterDetails;