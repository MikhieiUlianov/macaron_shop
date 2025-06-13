import { BrowserRouter as Router } from "react-router-dom";

import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";

import Spinner from "../spinner/Spinner";
import AppRoutesWrapper from "./AppRoutesWrapper";

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
    </Router>
  );
}

export default App;
