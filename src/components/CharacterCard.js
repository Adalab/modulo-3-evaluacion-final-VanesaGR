import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <dl>
      <Link to={`/character/${eachCharacter.id}`}>
        <img className='photo'
          src={//si la imagen aparece al buscar el personaje, la pone y si no, pone una por defecto
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/E5C07B/666666/?text=${eachCharacter.name}`
          }
          alt={`character: ${eachCharacter.name}`}
        />
        <dt className='name'>{eachCharacter.name}</dt>
        <dd>{eachCharacter.alive}</dd>
        <dd>{eachCharacter.species}</dd>
        <dd>{eachCharacter.gender}</dd>
        <dd>{eachCharacter.house}</dd>
      </Link>
    </dl>
  );
};

export default CharacterCard;