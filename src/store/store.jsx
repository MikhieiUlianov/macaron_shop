import header from "@/components/navigation/Header/headerSlice";
import { apiSlice } from "@/api/apiSlice";
import modals from "@/components/Modals/modalsSlice.jsx";
import cart from "@/components/cart-folder/Cart/cartSlice";
import assemble from "@/components/Assemble/assembleSlice";

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
    assemble,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
