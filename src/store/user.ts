import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
    id?: number;
    name?: string;
    avatar?: string
    role?: number;
    openId?: string;
}

const initialState: IUser = {
    id: 0,
    name: '',
    avatar: '',
    role: 0,
    openId: '',
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
