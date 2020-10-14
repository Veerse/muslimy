import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";

const initialState = {
    podcasts: [
        /*{id: '1', title : 'The fake title'},
        {id: '2', title : 'The illusive man'},
        {id: '3', title : 'The arrival marks the end'},
        {id: '4', title : 'The troubled thoughts'},
        {id: '5', title : 'Ephemeral pleasures are a catharsis'},*/
    ],
    status: 'idle',
    error: null
}

export const fetchPodcasts = createAsyncThunk('/podcasts/fetchPodcasts', async () => {
    console.log('build')
    const response = await client.get('/podcasts')
    console.log(response)
    return response
})

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPodcasts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchPodcasts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.podcasts = state.podcasts.concat(action.payload)

        },
        [fetchPodcasts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
})

// Selectors
export const selectAllPodcasts = (state) => state.podcasts.podcasts
export const selectPodcastById = (state, podcastId) => state.podcasts.podcasts.find (podcast => podcast.id.toString() === podcastId)

export default podcastsSlice.reducer;