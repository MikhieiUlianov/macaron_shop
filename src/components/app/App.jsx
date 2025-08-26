import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";

import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";

import Header from "../navigation/Header";
import Footer from "@/components/navigation/Footer";
import Menu from "@/components/navigation/Menu";

import Spinner from "@/components/Spinner";
import AppRoutesWrapper from "@/components/app/AppRoutesWrapper";
import CartUpdated from "@/components/Modals/CartUpdated";
import CustomSet from "@/components/Modals/CustomSet";

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
