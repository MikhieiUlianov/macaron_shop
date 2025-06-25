const initialState = {
  orderTitle: "",
  price: 0,
  tastes: [],
  additionall: [],
  totalTastesSelected: 0,
  totalAdditionallSelected: 0,
  totalAdditionallPrice: 0,
};

const assembleSlice = createSlice({
  name: "assemble",
  initialState,
  reducers: {
    onAmountSelected: (state, action) => {
      const { price, title } = action.payload;
      state.price = price;
      state.orderTitle = title;
    },
    onAdd: (state, action) => {
      const { id, title, endpoint, price } = action.payload;
      const item = state[endpoint].find((i) => i.id === id);
      console.log(JSON.parse(JSON.stringify(state[endpoint])));
      if (endpoint === "additionall") {
        state.totalAdditionallPrice += Number(price);
        console.log(JSON.parse(JSON.stringify(state.totalAdditionallPrice)));
      }
      if (item) {
        item.quantity += 1;
      } else if (!item && endpoint === "additionall") {
        state[endpoint].push({ title, id, quantity: 1, price: price });
        console.log(JSON.parse(JSON.stringify(state.totalAdditionallSelected)));
      } else {
        state[endpoint].push({ title, id, quantity: 1 });
      }
    },
    onQuantityDecrease: (state, action) => {
      const { id, endpoint, price } = action.payload;
      console.log(JSON.parse(JSON.stringify(state[endpoint])));
      const item = state[endpoint].find((i) => i.id === id);
      if (endpoint === "additionall" && state.totalAdditionallPrice > 0) {
        state.totalAdditionallPrice -= price;
        console.log(JSON.parse(JSON.stringify(state.totalAdditionallPrice)));
      }
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state[endpoint] = state[endpoint].filter((i) => i.id !== id);
      }
    },
    getTotalSelected: (state, action) => {
      const { endpoint, key = "totalTastesSelected" } = action.payload;
      state[key] = state[endpoint].reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    onRemoveItem: (state, action) => {
      const { id, endpoint } = action.payload;
      if (endpoint === "additionall") {
        const item = state.additionall.find((i) => i.id === id);
        state.totalAdditionallPrice -= Number(item.price * item.quantity);
        console.log(JSON.parse(JSON.stringify(state.totalAdditionallPrice)));
      }
      state[endpoint] = state[endpoint].filter((i) => i.id !== id);
    },
  },
});

const { actions, reducer } = assembleSlice;

export default reducer;

export const {
  onAmountSelected,
  onAdd,
  onQuantityDecrease,
  getTotalSelected,
  onRemoveItem,
} = actions;
