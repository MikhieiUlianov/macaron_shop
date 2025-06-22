import header from "@/components/Header/headerSlice";
import { apiSlice } from "@/api/apiSlice";
import modals from "@/components/Modals/modalsSlice.jsx";
import cart from "@/components/Cart/cartSlice";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: {
    header,
    modals,
    cart,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
