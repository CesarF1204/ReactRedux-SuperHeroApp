import axios from 'axios';
import { useState } from 'react';
import SuperHero from './SuperHero'
import SearchBar from '../Search/SearchBar';
// import { Link } from 'react-router-dom';
import '../css/SuperHeroApp.css'

const SuperHeroApp = (props) => {
    const [state, setState] = useState({
        superhero: [],
        selected: [],
    });

    const searchSuperHeroHandler = (hero) => {
        setState({ ...state });
        let superhero = []
        axios.get(`/search/${hero}`)
            .then(res => {
                superhero = res.data.results;
                    setState({
                    ...state,
                    superhero,
                });
            })
            .catch(err => { 
                alert(`Name not found. Please try again.`);
                setState({ ...state });
            });  
    }

    const selectedHeroHandler = (e) => {
        // console.log(e.target.id)
        // axios.post(`/search`, {superhero: [...state.selected, name]} )
        //     .then(res =>{
        //         console.log(res.data)
        //         setState({ ...state, selected: [...state.selected, res.data.results]});
        //     })
        alert("selected id: "+ e.target.id)
    }
    
    let superhero = [];
    if (state.superhero.length > 0) {
        superhero = state.superhero.map((hero) => (
            <SuperHero key={hero.id} hero={hero} selectedHero={selectedHeroHandler} />
        ));
    }

    return(
        <div>
            <SearchBar onSearchSuperHero={searchSuperHeroHandler}/>
            {superhero}
        </div>
    )
}

export default SuperHeroApp;