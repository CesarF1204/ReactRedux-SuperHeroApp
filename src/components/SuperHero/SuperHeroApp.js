import SuperHero from './SuperHero';
import SearchBar from '../Search/SearchBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../css/SuperHeroApp.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSuperHero, addToFavorites } from '../../redux/reducers/superhero-reducer';

const SuperHeroApp = (props) => {

    const superHeroState = useSelector(state => state.superheroapp.superhero);
    const selectedHeroState = useSelector(state => state.superheroapp.selected);
    const dispatch = useDispatch();

    const searchSuperHeroHandler = (hero) => {
        dispatch(getSuperHero(hero));
    }

    const selectedHeroHandler = (hero) => {
        dispatch(addToFavorites(hero));
    }
    
    let superhero = [];
        if(superHeroState.length > 0) {
            superhero = superHeroState.map((hero) => (
                <SuperHero key={hero.id} hero={hero} superhero={superhero} selectedHero={() => selectedHeroHandler(hero.id)} />
        ));
    }

    let selected = [];
        if(selectedHeroState.length > 0) {
            selected = selectedHeroState.map((hero) => (
                <SuperHero key={hero.id} hero={hero} />
        ));
    }
    
    return(
        <div>
            <Switch>
                <Route path="/superhero/home">
                        <SearchBar onSearchSuperHero={searchSuperHeroHandler}/>
                        {superhero}
                </Route>
                <Route path="/superhero/selected">
                    {selected}
                </Route>
                <Redirect to="/superhero/home" />
            </Switch>
        </div>
    )
}

export default SuperHeroApp;