import React, { useMemo } from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesBySearch } from '../../selectors/getHeroesBySearch';

export const SearchScreen = ({history}) => {

    const location = useLocation();

    console.log(location);

    const {query = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange, reset] = useForm({
        search: query
    });

    const {search} = formValues;

    const heroesFiltered  = useMemo(() => getHeroesBySearch(query), [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?query=${search}`);
        console.log(search);
        // reset();
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input autoComplete="off" type="text" placeholder="Find your hero" className="form-control" name="search" value={search} onChange={handleInputChange}/>
                        <button type="submit" className="btn btn-outline-primary btn-block m-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    { 
                        (query === '')
                        && <div className="alert alert-info">
                        Search a hero
                        </div>
                        
                    }
                    { 
                        (query !== '' && heroesFiltered.length ===0)
                        && <div className="alert alert-danger">
                        There isnt a hero
                        </div>
                        
                    }
                    {
                        heroesFiltered.map((hero) => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
