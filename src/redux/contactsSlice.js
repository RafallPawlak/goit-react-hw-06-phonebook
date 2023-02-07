import { nanoid } from 'nanoid';
import { combineReducers, createSlice } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';

const initialState = [];

export const contactsReducer = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
       return [...state, action.payload];
      },
      prepare(contact) {
        return {
          payload: {
            name: contact.name,
            number: contact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } =
  contactsReducer.actions;

export const rootReducer = combineReducers({
  contacts: contactsReducer.reducer,
  filter: filterSlice.reducer,
});