import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartOrderData: [],
  totalPrice: 0,
  totalSale: 0,
  totalDelivery: 0,
};

// Helper to recalc totalPrice and delivery fee after cart changes
const recalcTotals = (state) => {
  state.totalPrice = state.cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  state.totalDelivery = state.totalPrice >= 2000 ? 0 : 400;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.cart.push(action.payload);
      const { price, quantity = 1, sale = NaN } = action.payload;
      state.totalPrice += Number(price) * quantity;
      if (sale && state.cart.length > 0) {
        state.totalSale += Number(sale);
      }
      if (state.totalPrice >= 2000) {
        state.totalDelivery = 0;
      } else {
        state.totalDelivery = 400;
      }
    },

    updateTotalSale: (state, action) => {
      state.totalSale += action.payload;
      console.log(state.totalSale);
    },

    updateCartOrderData: (state, action) => {
      state.cartOrderData.push(action.payload);
    },

    resetCart: (state) => {
      state.cart = [];
      state.cartOrderData = [];
      state.totalPrice = 0;
      state.totalSale = 0;
      state.totalDelivery = 0;
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      recalcTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      recalcTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter((i) => i.id !== action.payload);
        }
      }
      recalcTotals(state);
    },

    addProduct: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += product.quantity || 1;
      } else {
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }

      if (product.sale) {
        state.totalSale += Number(product.sale);
      }

      recalcTotals(state);
    },
  },
});

export const {
  updateCart,
  updateCartOrderData,
  updateTotalSale,
  removeProduct,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  addProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
