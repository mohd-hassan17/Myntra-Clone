
import { createSlice} from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../data/items";

const  itemsSlice = createSlice({
    name: 'items',
    initialState: [], 
    reducers: {
    addInitialitems: (state, action) => {
   
        return action.payload;
    },
    }
    })

    export const itemsAction = itemsSlice.actions;

    export default itemsSlice;