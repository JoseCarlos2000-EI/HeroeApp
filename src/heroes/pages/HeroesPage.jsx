import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/heroes/GetHeroeById";

export const HeroesPage = () => {
  const {id} = useParams();
  const data = getHeroById(id);
  if( !data ) return <Navigate to={'/dc'}></Navigate>
  const navigate = useNavigate();
  const onReturn = () => {
   navigate(-1)
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/${id}.jpg`} alt={data.hero}  className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>

      <div className="col-8">
        <h3>{data.superhero}</h3>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>{data.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>{data.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>{data.first_appearance}
            </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p>{data.characters}</p>
        <button className="btn btn-outline-info"
        onClick={onReturn}
        >Regresar</button>
      </div>
    </div>
  )
}
