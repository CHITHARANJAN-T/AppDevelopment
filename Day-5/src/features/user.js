import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState : { value : {username: 'User'}},
    reducers : {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = ""
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;