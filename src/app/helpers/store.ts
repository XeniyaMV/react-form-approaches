import { configureStore } from '@reduxjs/toolkit';
import uncontrolledFormSlice from './reducers/uncontrolledFormSlice';

export const store = configureStore({
  reducer: {
    uncontrolledForm: uncontrolledFormSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
