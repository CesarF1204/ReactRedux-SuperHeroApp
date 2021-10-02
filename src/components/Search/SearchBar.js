import React, { useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {

    const [state, setState] = useState({
        newSearch: ''
    });

    useEffect(()=>{
        console.log('[SearchBar.js] Use Effect called!');
    }, [state.newSearch]);

    const inputNewTaskHandler = (event) => {
        setState({
            newSearch: event.target.value,
        });
    }

    const onKeyEnteredSearch = (event) => {
        if (event.key === "Enter") {
            props.onSearchSuperHero(state.newSearch)
        }
    }

    return (
        <div>
            <nav>
                <h1><Link className="link" to="/superhero/home">SuperHeroApp</Link></h1>
                <div className="search">
                    <input type="text" value={state.newSearch} onChange={inputNewTaskHandler} placeholder="Search..." onKeyPress={onKeyEnteredSearch}></input>
                    <button className="search-btn" onClick={() => props.onSearchSuperHero(state.newSearch)}>Search</button>
                </div>
                <h1><Link className="link" to="/superhero/selected">Favorites</Link></h1>
            </nav>
        </div>
    );
};

export default SearchBar;