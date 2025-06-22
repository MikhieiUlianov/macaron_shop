const initialState = {
  cartUpdated: false,
  cartUpdatedTitle: "",
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      const { modal, value, title } = action.payload;
      state[modal] = value;
      state.cartUpdatedTitle = title;
    },
  },
});

const { actions, reducer } = modalsSlice;

export default reducer;

export const { toggleModal } = actions;
