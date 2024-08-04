import { heroes } from "../../data/HeroesList";

export const getHeroesByPublisher = ( publisher ) =>{
    const comics = ['DC Comics', 'Marvel Comics'];

    if(!comics.includes(publisher)) throw Error(`${publisher} is not valid...`);

    return heroes.filter(heroe => heroe.publisher === publisher);
}