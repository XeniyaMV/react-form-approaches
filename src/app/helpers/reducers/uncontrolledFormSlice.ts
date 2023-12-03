import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UncontrolledFormInfo {
  name?: string;
  age?: number;
  country?: string;
  password?: string;
  gender?: string;
  terms?: boolean;
  imageSrc?: string;
  email?: string;
}

interface UncontrolledFormState {
  value: UncontrolledFormInfo;
}

const initialState: UncontrolledFormState = {
  value: {},
};

const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledFormSlice',
  initialState,
  reducers: {
    allFieldsUpdated(state, action: PayloadAction<UncontrolledFormInfo>) {
      state.value = action.payload;
    },
  },
});

export const { allFieldsUpdated } = uncontrolledFormSlice.actions;
export default uncontrolledFormSlice.reducer;
