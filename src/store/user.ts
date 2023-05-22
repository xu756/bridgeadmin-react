import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    id?: number;
    name?: string;
    avatar?: string
    mobile?: string
    token?: string
}

const initialState: IUser = {
    id: 0,
    name: '',
    avatar: '',
    mobile: '',
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            return action.payload;
        },
        clearUser: (state) => {
            return initialState;
        },
    },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
