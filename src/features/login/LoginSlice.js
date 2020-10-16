import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
    status: 'idle',
    error: null
}

export const login = createAsyncThunk('/user/login', async (creds) => {
    const response = await client.post('/login', creds)
    return response
})

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: (state, action) => {
            console.log('loading')
            state.status = 'loading'
        },
        [login.fulfilled]: (state, action) => {
            console.log('succeeded')
            localStorage.setItem('jwt', action.payload.token)
            localStorage.setItem('jwt_expire', action.payload.expire)
            state.status = 'succeeded'
        },
        [login.rejected]: (state, action) => {
            console.log('failed')
            state.status = 'failed'
            console.log(action.error.message)
        }
    }
})

export const selectUser = (state) => state.user.user

export default loginSlice.reducer;