import "@/sass/libs/modern-normalize.min.css";
import "@/sass/libs/grids-min.css";
import "@/sass/libs/grids-responsive-min.css";
import "@/sass/style.scss";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Header />

      <button className="btnOrder">order</button>
      <Footer />
    </>
  );
}

export default App;
