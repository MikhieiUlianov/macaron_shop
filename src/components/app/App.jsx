import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";

import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";

import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";

import Spinner from "../Spinner";
import AppRoutesWrapper from "./AppRoutesWrapper";
import CartUpdated from "../Modals/CartUpdated";
import CustomSet from "../Modals/CustomSet";

function App() {
  return (
    <Router>
      <Menu />
      <Header />
      <main>
        <Suspense fallback={<Spinner />}>
          <AppRoutesWrapper />
        </Suspense>
      </main>
      <Footer />
      <CartUpdated />
      <CustomSet />
    </Router>
  );
}

export default App;
