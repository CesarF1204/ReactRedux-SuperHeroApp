import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSuperHero = new createAsyncThunk('superhero/search', async(hero) => {
    const response = await axios.get(`/search/${hero}`);
    return response.data;
});

export const addToFavorites = new createAsyncThunk('superhero/selected', async(id) => {
    const response = await axios.post(`/${id}`);
    return response.data;
});

export const removeFavorites = new createAsyncThunk('superhero/selected/deleted', async(id) => {
    const response = await axios.get(`/${id}`);
    return response.data;
});

export const superHeroSlice = createSlice({
    name: 'superheroapp',
    initialState: {
        superhero: [],
        selected: [],
    },
    extraReducers: {
        [getSuperHero.fulfilled]: (state, action) => {
            state.superhero = action.payload.results;
        },
        [getSuperHero.rejected]: (state, action) => {
            alert('No results found.');
        },
        [addToFavorites.fulfilled]: (state, action) => {
            state.selected.push(action.payload);
            alert(`Added ${action.payload.name} to favorites!`)
        },
        [addToFavorites.rejected]: (state, action) => {
            alert('An error has occured. Please try again.');
        },
        [removeFavorites.fulfilled]: (state, action) => {
            let selectedHeroIndex = state.selected.findIndex(hero => hero.id === action.payload.id);
            state.selected.splice(selectedHeroIndex, 1);
        },
        [removeFavorites.rejected]: (state, action) => {
            alert('Removing selected superhero error occured.');
        },
    }
});

export default superHeroSlice.reducer;