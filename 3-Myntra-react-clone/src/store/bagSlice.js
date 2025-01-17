
import { createSlice} from "@reduxjs/toolkit";

const  bagSlice = createSlice({
    name: 'bag',
    initialState: [], 
    reducers: {
    addtobag: (state, action) => {
    
        state.push(action.payload)
    },
    removefrombag: (state, action) => {
    
       return state.filter(itemId => itemId !== action.payload);
    },
    }
    })

    export const bagAction = bagSlice.actions;

    export default bagSlice;