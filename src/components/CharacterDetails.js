import heart from '../images/latidos.png';
import grave from '../images/tumba.png';

const CharacterDetails = ({ characterSelected }) => {
  
  return (
    <div className="container-card">
      <div className="card-detail">
        <a href=".">
          <img
            className="card__img"
            src={characterSelected.image !== ''
              ? characterSelected.image
              : `https://i.pinimg.com/originals/72/c2/12/72c212937fef7953ce31385b38c15243.png`}
            alt={characterSelected.name}
            title={characterSelected.name}
          ></img>
          <h4 className="card__title">
            {characterSelected.name}
          </h4>
        </a>
        <ul className="info">
          <li className="card__alive">
             {characterSelected.alive === true ?
            <div className="">
              <p className="text-ternario">
            Estatus: Viv@&nbsp;&nbsp;
              <img src={heart} alt="heart" className='icon-ternario' title='heart'/></p>
            </div>
            : 
            <div className='ternario'>
              <p className='text-ternario'>
            Estatus: Muert@&nbsp;&nbsp;
              <img src={grave} alt="grave" className='icon-ternario' title='grave'/></p>
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