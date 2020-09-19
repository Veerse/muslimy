import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    podcasts: [
        {id: '1', title : 'The fake title'},
        {id: '2', title : 'The illusive man'},
        {id: '3', title : 'The arrival marks the end'},
        {id: '4', title : 'The troubled thoughts'},
        {id: '5', title : 'Ephemeral pleasures are a catharsis'},
    ],
}

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {},
    extraReducers: {}
})

// Selectors
export const selectAllPodcasts = (state) => state.podcasts.podcasts
export const selectPodcastById = (state, podcastId) => state.podcasts.podcasts.find (podcast => podcast.id === podcastId)

export default podcastsSlice.reducer;