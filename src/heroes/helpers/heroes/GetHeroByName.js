import { heroes } from "../../data/HeroesList";

export const getHeroeByName = (name = '') => {
    name = name.toLowerCase().trim();
    if( !name ) return [];
    return heroes.filter(hero => hero.superhero.toLowerCase().trim().includes(name)); 
}