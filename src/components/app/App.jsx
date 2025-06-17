import { BrowserRouter as Router } from "react-router-dom";

import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

import Spinner from "../Spinner/Spinner";
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
