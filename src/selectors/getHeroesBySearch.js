import { heroes } from "../data/heroes"

export const getHeroesBySearch = (search = '') => {

    if (search === '') {
        return [];
    }

    return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
}