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

export const superHeroSlice = createSlice({
    name: 'superheroapp',
    initialState: {
        superhero: [],
        selected: [],
    },
    reducers: {

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
    }
});

export default superHeroSlice.reducer;