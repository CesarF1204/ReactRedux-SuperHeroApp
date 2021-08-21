import { configureStore } from "@reduxjs/toolkit";
import superheroReducer from './reducers/superhero-reducer';

export default configureStore({
    reducer: {
        superheroapp: superheroReducer,
    },
});