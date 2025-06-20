import * as Accordion from "@radix-ui/react-accordion";

import { useGetProductInfoQuery } from "@/api/apiSlice";
import QueryWrapper from "@/utils/QueryWrapper";
import Section from "../Section";

import shop from "/icons/shop.svg";
import arrow from "/icons/accordion-arrow.svg";
import delivery from "/icons/productInfo/delivery.svg";
import selfPickUp from "/icons/productInfo/self-pickup.svg";
import present from "/icons/productInfo/present.svg";
import "./productInfo.scss";

import ReusableThumbsSlider from "@/utils/ReusableThumbsSlider";
const ProductInfo = () => {
  const { productId } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {
    data = {},
    isLoading,
    isFetching,
    isError,
  } = useGetProductInfoQuery(productId);

  const renderProductInfo = ({
    id,
    thumbs = [],
    title,
    text,
    price,
    accordions = [],
  }) => {
    // Находим аккордеон с "Вкусы:"
    const tastesAccordion = accordions.find((a) => a.title === "Вкусы:");

    return (
      <Section sectionClass="productInfo" key={id}>
        <nav className="pageNav">
          <Link to="/">Главная &gt; </Link>
          <Link to="/news">Каталог &gt;</Link>
          <span className="pageNav__curr">{title || "Загрузка..."}</span>
        </nav>

        <div className="productInfo__wrapper">
          {/* Слайдеры слева */}
          <div className="productInfo__sliderBlock">
            <ReusableThumbsSlider
              thumbs={thumbs}
              mainSliderClass="productInfo__slider"
              thumbsSliderClass="productInfo__thumbs"
              thumbsSwiper={thumbsSwiper}
              setThumbsSwiper={setThumbsSwiper}
            />
          </div>

          {/* Контент справа */}
          <div className="productInfo__content">
            <div className="productInfo__promo">
              <h1 className="productInfo__title fw-600 fz-18">{title}</h1>
              <div className="productInfo__text fw-400 fz-14">{text}</div>
            </div>

            {/* Вкусы - отдельный блок (виден только на десктопе) */}
            {tastesAccordion && (
              <div className="productInfo__tastes desktopOnly">
                <ul className="productInfo__tastes-tastes">
                  <h3 className="productInfo__tastes-title">
                    {tastesAccordion.title}
                  </h3>
                  {tastesAccordion.info.map(({ key, value }) => (
                    <li
                      key={key}
                      className="productInfo__tastes-tastes-taste fw-400 fz-14"
                    >
                      {key} <span></span> <div>{value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="productInfo__price">
              <span className="productInfo__price-price fw-600 fz-18">
                {price}
              </span>
              <button className="productInfo__price-btn">
                <img className="productInfo__price-img" src={shop} alt="shop" />
                <span className="productInfo__price-text fw-600 fz-12">
                  В корзину
                </span>
              </button>
            </div>

            {/* Аккордеон с остальными блоками + "Вкусы" (виден только на мобильных) */}
            <Accordion.Root
              className="productInfo__accordion mobileOnly"
              type="single"
              collapsible
            >
              {accordions.map(({ title, info }, idx) => (
                <Accordion.Item
                  key={idx}
                  className="productInfo__accordion-item"
                  value={`item-${idx + 1}`}
                >
                  <Accordion.Header className="productInfo__accordion-header">
                    <Accordion.Trigger className="productInfo__accordion-trigger">
                      <div className="fz-14 fw-600">{title}</div>
                      <img src={arrow} alt="arrow" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="productInfo__accordion-content">
                    {info.map(({ key, value }) => (
                      <div
                        key={key}
                        className="productInfo__accordion-content-item fw-400 fz-14"
                      >
                        {key} <span></span> <div>{value}</div>
                      </div>
                    ))}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>

            {/* Информация о доставке и подарках */}
            <div className="productInfo__info">
              <div className="productInfo__info-block">
                <img
                  src={delivery}
                  alt="delivery"
                  className="productInfo__info-block-img"
                />
                <div className="productInfo__info-block-text fw-400 fz-12">
                  Доставка от 400 руб. в день заказа <br />
                  с 12 до 17 или с 17 до 21.
                  <br />
                  Бесплатно при заказе на сумму от 2000 руб
                </div>
              </div>
              <div className="productInfo__info-block">
                <img
                  src={selfPickUp}
                  alt="self pick up"
                  className="productInfo__info-block-img"
                />
                <div className="productInfo__info-block-text fw-400 fz-12">
                  Самовывоз бесплатно.
                  <br />
                  Через 3 часа после оплаты заказа
                </div>
              </div>
              <div className="productInfo__info-block">
                <img
                  src={present}
                  alt="present"
                  className="productInfo__info-block-img"
                />
                <div className="productInfo__info-block-text fw-400 fz-12">
                  Можем преподнести как анонимный подарок:)
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  };

  return (
    <QueryWrapper
      isLoading={isLoading}
      isFetching={isFetching}
      isError={isError}
      data={data}
    >
      {data && data.id ? renderProductInfo(data) : null}
    </QueryWrapper>
  );
};

export default ProductInfo;
