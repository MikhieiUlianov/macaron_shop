import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";
import store from "./store/store.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
