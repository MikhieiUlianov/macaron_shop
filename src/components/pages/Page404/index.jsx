import "./page404.scss";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="container">
        <div className="page404__title fz-14 fw-400">
          Извините, страница не найдена
        </div>
        <div className="page404__wrapper">
          <img
            className="bitten"
            src="/img/delivery/macaron-bitten.png"
            alt="macaron-bitten"
          />
          <img
            className="piece"
            src="/img/delivery/macaron-piece.png"
            alt="macaron-piece"
          />
          <img className="face" src="/img/face.png" alt="face" />
          <img className="icon404" src="/img/404.png" alt="404" />
          <Link to={"/"} className="btn-back">
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page404;
