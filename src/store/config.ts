import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IConfig} from "@/types";



const initialState: IConfig = {
    logo: '/logo.svg',
    title: '云工科技',
    description: '管理系统',
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