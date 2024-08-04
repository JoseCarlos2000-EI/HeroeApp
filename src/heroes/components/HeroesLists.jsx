import { getHeroesByPublisher } from "../helpers/heroes/GetHeroesList"
import { HeroeCard } from "./HeroeCards";

export const HeroesLists = ({publisher}) => {
const heroes = getHeroesByPublisher(publisher); 
return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map(hero => (
                <HeroeCard  key={hero.id} {...hero} ></HeroeCard>              
            ))
        }
    </div>
  )
}
