import { NavLink } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <ul className='list'>
      <NavLink to={`/character/${eachCharacter.id}`}>
        <img className='photo'
          src={//si la imagen aparece al buscar el personaje, la pone y si no, pone una por defecto
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://i.pinimg.com/originals/72/c2/12/72c212937fef7953ce31385b38c15243.png`
          }
          alt={`character: ${eachCharacter.name}`}
        />
        <li className='name'>{eachCharacter.name}</li>        
        <li className='house'>{eachCharacter.house}</li>
      </NavLink>
    </ul>
  );
};

export default CharacterCard;