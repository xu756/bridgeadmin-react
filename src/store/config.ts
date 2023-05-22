import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IConfig {
    logo?: string
    name?: string
    loading: number
}

const initialState: IConfig = {
    logo: '/logo.svg',
    name: '',
    loading: 0,
}


const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig: (state, action: PayloadAction<IConfig>) => {
            return action.payload;
        },
        openLoad: (state) => {
            state.loading++
        },
        closeLoad: (state) => {
            state.loading--
        }
    }
})

export const {setConfig, openLoad, closeLoad} = configSlice.actions;
export default configSlice.reducer;