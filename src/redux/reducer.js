import { createReducer} from "@reduxjs/toolkit";
import { addContact, deleteContact, setFilter } from "./actions";

const storageContacts = localStorage.getItem('contacts');

const contactsInitialState = JSON.parse(storageContacts) || [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});