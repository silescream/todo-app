import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
  id: string;
};

const initialState: ModalState = {
  id: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.id = action.payload.id;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
