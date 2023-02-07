import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilter: {
      reducer: (state, action) => {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice;