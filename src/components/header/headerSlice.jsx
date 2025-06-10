const initialState = {
  activeTownAccordion: false,
  activeCatalogAccordion: false,
  activeTown: "Санкт-Петербург",
  activeCatalog: "ВЕСЬ КАТАЛОГ",
  activeMenu: false,
  towns: ["Санкт-Петербург", "Москва", "Калининград", "Ярославль"],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    changeActiveTownAccordion: (state) => {
      state.activeTownAccordion = !state.activeTownAccordion;
    },
    changeActiveCatalogAccordion: (state) => {
      state.activeCatalogAccordion = !state.activeCatalogAccordion;
    },
    changeActiveTown: (state, action) => {
      state.activeTown = action.payload;
      state.activeTownAccordion = false;
    },
    changeActiveCatalog: (state, action) => {
      state.activeCatalog = action.payload;
      state.activeCatalogAccordion = false;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

const { actions, reducer } = headerSlice;
export default reducer;
export const {
  changeActiveTownAccordion,
  changeActiveCatalogAccordion,
  changeActiveCatalog,
  changeActiveTown,
  setActiveMenu,
} = actions;
