import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactSlice";
import { filterReducer } from "./contacts/filterSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    
});
