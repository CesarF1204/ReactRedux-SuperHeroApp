import SuperHero from './SuperHero';
import SearchBar from '../Search/SearchBar';
import { Redirect, Route, Link } from 'react-router-dom';
import '../css/SuperHeroApp.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperHero, addToFavorites, removeFavorites } from '../../redux/reducers/superhero-reducer';

const SuperHeroApp = (props) => {

    const superHeroState = useSelector(state => state.superheroapp.superhero);
    const selectedHeroState = useSelector(state => state.superheroapp.selected);
    const dispatch = useDispatch();

    const searchSuperHeroHandler = (hero) => {
        dispatch(getSuperHero(hero));
    }

    const selectedHeroHandler = (id) => {
        dispatch(addToFavorites(id));
    }

    const removeSelectedHeroHandler = (id) => {
        dispatch(removeFavorites(id));
    }
    
    let superhero = [];
        if(superHeroState.length > 0) {
            superhero = superHeroState.map((hero) => (
                <SuperHero key={hero.id} hero={hero} selectedHero={() => selectedHeroHandler(hero.id)} />
        ));
    }

    let selected = [];
        if(selectedHeroState.length > 0) {
            selected = selectedHeroState.map((hero) => (
                <SuperHero key={hero.id} hero={hero} selected={selected} removeSelectedHero={() => removeSelectedHeroHandler(hero.id)}/>
        ));
    }
    
    return(
        <div>
                <Route path="/superhero/home">
                    <SearchBar onSearchSuperHero={searchSuperHeroHandler}/>
                    {superhero}
                </Route>
                <Route path="/superhero/selected">
                    <h1><Link className="link" to="/superhero/home">Go Back To Home Page</Link></h1>
                    {selected}
                </Route>
                <Redirect to="/superhero/home" />
        </div>
    )
}

export default SuperHeroApp;