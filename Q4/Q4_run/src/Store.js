import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import 'react-native-get-random-values';

export const mapContacts = (contact) => {
  const { name, picture, phone, cell, email } = contact;
  return {
    id: v4(),
    name: `${name.first} ${name.last}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1 ? true : false,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactSuccess: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { fetchContactSuccess } = contactsSlice.actions;

const store = configureStore({
  reducer: contactsSlice.reducer,
});

export default store;
export const fetchContacts = () => {
  return async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const contacts = await response.json();
    const mappedContacts = contacts.map(mapContacts);
    dispatch(fetchContactSuccess(mappedContacts));
  };
};