import heart from '../images/latidos.png';
import grave from '../images/tumba.png';

const CharacterDetails = ({ characterSelected }) => {
  
  return (
    <div className="container-card">
      <div className="card-detail">
        <a href=".">
          <img
            className="card__img"
            src={characterSelected.image}
            alt={characterSelected.name}
            title={characterSelected.name}
          ></img>
          <h4 className="card__title">
            {characterSelected.name}
          </h4>
        </a>
        <ul className="info">
          <li className="card__alive">
            Estatus: {characterSelected.alive === true ?
            <div className="">
              <p className="text-ternario">
            'Viv@'</p>
              <img src={heart} alt="heart" className='icon-ternario' title='heart'/>
            </div>
            : 
            <div className='ternario'>
              <p className='text-ternario'>
            'Muert@'</p>
              <img src={grave} alt="grave" className='icon-ternario' title='grave'/>
            </div>
            }
          </li>
          <li className="card__species">Especie: {characterSelected.species}</li>
          <li className="card__gender">Género: {characterSelected.gender}</li>
          <li className="card__house">Casa: {characterSelected.house}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;