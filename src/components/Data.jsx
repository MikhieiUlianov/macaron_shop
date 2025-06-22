//pagesLinks
import corporateGift from "/icons/pagesLinks/corporate-gift.svg";
import design from "/icons/pagesLinks/custom-design.svg";
import set from "/icons/pagesLinks/custom-set.svg";
import readyMadeSets from "/icons/pagesLinks/ready-made-sets.svg";
import weeding from "/icons/pagesLinks/weeding.svg";
import wholesale from "/icons/pagesLinks/wholesale.svg";

// promotionSlides
import promoChocolate from "/img/promotion/chocolate-cake.jpeg";
import promoCaramel from "/img/promotion/caramel-candy.jpeg";
import promoCandy from "/img/promotion/delicious-candies.jpeg";
import promoFreeDelivery from "/img/promotion/free-delivery.jpeg";

// holidays
import holYellow from "/img/holidays/macaron-yellow-hol.png";
import holPink from "/img/holidays/macaron-pink-hol.png";
import holBlue from "/img/holidays/macaron-blue-hol.png";

// news
import news1 from "/img/news/valentine's.jpeg";
import news2 from "/img/news/event.jpeg";
import news3 from "/img/news/macarons.jpeg";
// newsNewsPage.thumbs
import someThumb from "/img/news/macarons.jpeg";
//popularSets
import set16 from "/img/popularSets/set-16.jpeg";
import set9 from "/img/popularSets/set-9.jpeg";
import heart from "/img/popularSets/heart.jpeg";
import roundSet from "/img/popularSets/roundSet.jpeg";

// steps
import stepIngredients from "/img/steps/ingridients.jpeg";
import stepPackage from "/img/steps/package.jpeg";
import stepGetting from "/img/steps/getting-order.jpeg";
import stepDelivery from "/img/steps/delivery.jpeg";

// guarantees
import guarantAlmond from "/img/guarantees/almond-flour.jpeg";
import guarantColorings from "/img/guarantees/colorings.jpeg";
import guarantFruits from "/img/guarantees/frukts.jpeg";

//catalogDesserts
import waffle from "/img/catalogDesserts/waffle.png";
import eclairs from "/img/catalogDesserts/eclairs.png";
import profitroles from "/img/catalogDesserts/profitroles.png";

//try

import macaronEclair from "/img/try/macaron-eclair.jpeg";
import macaronEclairS from "/img/try/macaron-eclair-s.jpeg";
import macaronEclairM from "/img/try/macaron-eclair-m.jpeg";
import macaronEclairL from "/img/try/macaron-eclair-l.jpeg";

// —––––––––– ДАННЫЕ —–––––––––
const siteData = {
  social: [
    { href: "#", className: "icon-telegram", id: "16e8" },
    { href: "#", className: "icon-vkontakte", id: "6ba5" },
    { href: "#", className: "icon-adult", id: "6313" },
  ],

  footer: [
    {
      title: "Информация",
      links: [
        { label: "О компании", to: "/about" },
        { label: "Гарантии вкуса и свежести", to: "/guarantees" },
        { label: "Доставка и оплата", to: "/delivery" },
        { label: "Контакты", to: "/contacts" },
      ],
      id: "6894",
    },
    {
      title: "Каталог",
      links: [
        { label: "Каталог десертов", to: "/catalog" },
        { label: "Готовые наборы", to: "/sets" },
        { label: "Собрать свой набор", to: "/constructor" },
        { label: "Наборы с печатью", to: "/printed-sets" },
        { label: "Свадебные предложения", to: "/wedding" },
        { label: "Акции", to: "/sales" },
      ],
      id: "fd93",
    },
    {
      title: "Для бизнеса",
      links: [
        { label: "Корпоративные подарки", to: "/corporate" },
        { label: "Для юридических лиц", to: "/legal-entities" },
        { label: "Оповикам", to: "/wholesale" },
      ],
      id: "3e7c",
    },
  ],

  pagesLinks: [
    {
      img: readyMadeSets,
      alt: "ready‑made‑sets",
      title: "Готовые наборы",
      text: "Готовые наборы со скидкой. <br/>Вы можете подобрать набор на подходящий случай.",
      colorClass: "orange",
      id: "ff6f",
    },
    {
      img: set,
      alt: "custom‑set",
      title: "Собрать свой набор",
      text: "Выбрать количество макарун, и выбрать вкусы",
      colorClass: "pink",
      id: "b761",
    },
    {
      img: design,
      alt: "custom‑design",
      title: "Набор с индивидуальной печатью",
      text: "Собрать набор макарон с уникальным дизайном. ",
      colorClass: "green",
      id: "301a",
    },
    {
      img: weeding,
      alt: "weeding",
      title: "Свадебные предложения",
      text: "Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества",
      colorClass: "salmon",
      id: "efba",
    },
    {
      img: corporateGift,
      alt: "corporate",
      title: "Корпоративные подарки",
      text: "От 85 руб за шт. С уникальным дизайном. <br/>Приятный комплимент для коллег и партнеров",
      colorClass: "blue",
      id: "f4d5",
    },
    {
      img: wholesale,
      alt: "delivery",
      title: "Оптовые поставки",
      text: "Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы.",
      colorClass: "purple",
      id: "669c",
    },
  ],

  promotionSlides: [
    {
      label: "новинка",
      img: promoChocolate,
      alt: "chocolate-cake",
      text: "Шоколадное пирожное картошка на основе бисквита!",
      id: "9583",
    },
    {
      label: "сладкая новинка",
      img: promoCaramel,
      alt: "caramel-candy",
      text: "Карамель на палочке <br/> из натуральных ингредиентов",
      id: "327a",
    },
    {
      label: "новинка",
      img: promoCandy,
      alt: "delicious-candy",
      text: "Аппетитные конфеты <br/> на основе миндального печенья и крема",
      id: "ebf0",
    },
    {
      label: "новинка",
      img: promoCandy,
      alt: "delicious-candy",
      text: "Аппетитные конфеты <br/> на основе миндального печенья и крема",
      id: "71e5",
    },
    {
      label: "бесплатная доставка",
      img: promoFreeDelivery,
      alt: "free-delivery",
      text: "По СПб в районе КАД –  от 3000₽ <br/> По МСК – от 5000₽",
      id: "d1b7",
    },
  ],

  holidays: [
    {
      img: holYellow,
      alt: "macaron-yellow",
      text: "Скоро<br/>День рождения<br/>близкого человека ",
      id: "db04",
    },
    {
      img: holPink,
      alt: "macaron-pink",
      text: "1 января<br/>Новый Год<br/>2021",
      id: "9265",
    },
    {
      img: holBlue,
      alt: "macaron-blue",
      text: "14 февраля<br/>День Святого<br/>Валентина",
      id: "f7c3",
    },
    {
      img: holYellow,
      alt: "macaron-yellow",
      text: "23 февраля<br/>День Защитника<br/>Отечества",
      id: "467e",
    },
    {
      img: holPink,
      alt: "macaron-pink",
      text: "8 марта<br/>Международный<br/>Женский День",
      id: "cda9",
    },
    {
      img: holBlue,
      alt: "macaron-blue",
      text: "9 марта<br/>День Сурка",
      id: "daaf",
    },
  ],

  popularSets: [
    {
      id: "a1f5c9e8-34b2-4f1a-9cde-8f2a7d5b3f11",
      img: set16,
      alt: "Heart Set",
      title: "Набор на 16",
      text: "Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад",
      price: "1500 руб",
    },
    {
      id: "b24f9a72-efa6-4e3b-8c18-9bd4a6c09124",
      img: set9,
      alt: "set-9",
      title: "Набор на 9",
      text: "Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня",
      price: "950 руб",
    },
    {
      id: "c9e3a713-75d4-42bf-982a-3e0b4c0a321f",
      img: heart,
      alt: "heart",
      title: "Сердце",
      text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
      price: "2800 руб",
    },
    {
      id: "df7b3e9-1f4a-4cfa-ae71-4c1235f67890",
      img: roundSet,
      alt: "roundSet",
      title: "Круглый набор",
      text: "40 макаронс в круглой коробке с персональной надписью",
      price: "3900 руб",
    },
    {
      id: "c9e3a713-75d4-42bf-982a-3eb4c0a321f",
      img: heart,
      alt: "heart",
      title: "Сердце",
      text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
      price: "2800 руб",
    },
    {
      id: "d3f7b3e9-1f4a-4cfa-ae71-4c1235f67890",
      img: roundSet,
      alt: "roundSet",
      title: "Круглый набор",
      text: "40 макаронс в круглой коробке с персональной надписью",
      price: "3900 руб",
    },
    {
      id: "c9e3a713-75d4-42bf-982a-3e0b4c0321f",
      img: heart,
      alt: "heart",
      title: "Сердце",
      text: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
      price: "2800 руб",
    },
    {
      id: "d3fb3e9-1f4a-4cfa-ae71-4c1235f67890",
      img: roundSet,
      alt: "roundSet",
      title: "Круглый набор",
      text: "40 макаронс в круглой коробке с персональной надписью",
      price: "3900 руб",
    },
    {
      id: "d3fb3e9-1f4a-4cfa-ae71-4c1235f6890",
      img: roundSet,
      alt: "roundSet",
      title: "Круглый набор",
      text: "40 макаронс в круглой коробке с персональной надписью",
      price: "3900 руб",
    },
  ],

  news: [
    {
      id: "valentines-2023",
      img: news1,
      alt: "valentine's day",
      date: "11.02.2023",
      title: "Экспресс-конкурс ко дню Святого Валентина",
      text: "Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп",
    },
    {
      id: "defenders-day-2023",
      img: news2,
      alt: "event",
      date: "23.03.2023",
      title: "Конкурс на 23 февраля!",
      text: "День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп",
    },
    {
      id: "spring-holiday-2023",
      img: news3,
      alt: "macarons",
      date: "10.04.2023",
      title: "Скоро главный праздник весны!",
      text: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы",
    },
    {
      id: "valenties-2023",
      img: news1,
      alt: "valentine's day",
      date: "11.02.2023",
      title: "Экспресс-конкурс ко дню Святого Валентина",
      text: "Подарок уже через 2 дня. День всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп",
    },
    {
      id: "defenders-ay-2023",
      img: news2,
      alt: "event",
      date: "23.03.2023",
      title: "Конкурс на 23 февраля!",
      text: "День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп",
    },
    {
      id: "spring-holiday-2024",
      img: news3,
      alt: "macarons",
      date: "10.04.2023",
      title: "Скоро главный праздник весны!",
      text: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы",
    },
    // повторители с b...
  ],

  newsNewsPage: [
    {
      id: "spring-holiday-2023",
      title: "Скоро главный праздник весны",
      subtitle: "Скоро главный праздник весны! H2",
      text: "Совсем скоро любимый весенний праздник. А мы уже подготовили коллекцию пирожных макарон с фирменным дизайном. ...",
      filters: ["8 марта", "Весна", "Подарок на 8 марта"],
      list: [
        "Набор на 9 макарон - 1200 рублей",
        "Набор Сердце на 22 макарон - 3500 рублей",
        "Набор на 20 макарон - 1800 рублей",
        "Набор на 3 макарон - 450 рублей",
        "Набор Круглый на 40 макарон - 5000 рублей",
        "Набор-комбо 3+2 - 800 рублей",
      ],
      thumbs: [
        { thumbImg: someThumb, thumbAlt: "1" },
        { thumbImg: someThumb, thumbAlt: "2" },
        { thumbImg: someThumb, thumbAlt: "3" },
        { thumbImg: someThumb, thumbAlt: "4" },
      ],
    },
  ],

  productPage: [
    {
      id: "c9e3a713-75d4-42bf-982a-3e0b4c0a321f",
      img: heart,
      alt: "heart",
      thumbs: [
        { img: heart, alt: "heart" },
        { img: heart, alt: "heart" },
        { img: heart, alt: "heart" },
        { img: heart, alt: "heart" },
      ],
      alt: "heart",
      title: "Сердце",
      text: "40 макаронс в круглой коробке с персональной надписью",
      price: "2800",
      quantity: 1,
      list: ["Трюфель 2 шт.", "Фисташка 2 шт.", "Карамель 2 шт."],
      accordions: [
        {
          title: "Вкусы:",
          info: [
            { key: "Яблоко", value: "4  шт." },
            { key: "Вишня", value: "12  шт." },
            { key: "Кокос", value: "8  шт." },
          ],
        },
        {
          title: "Состав и пищевая ценность",
          info: [
            { key: "Белки", value: "4  шт." },
            { key: "Жиры", value: "12  шт." },
            { key: "Углеводы", value: "8  шт." },
          ],
        },
      ],
      tabs: [
        {
          title: "Описание",
          text: "Текстовая информация и таблички. <br/>Для примера рыба-текст <br/>Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальн",
        },
        {
          title: "Состав и пищевая ценность",
          text: "Текстовая информация и таблички. <br/>Для примера рыба-текст <br/>Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.Текстовая информация и таблички. <br/>Для примера рыба-текст <br/>Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.",
        },
        {
          title: "Условия и срок хранения",
          text: "Текстовая информация и таблички. <br/>Для примера рыба-текст <br/>Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.",
        },
      ],
      sale: "30",
      saleName: "   Скидка по акции “Эклер в подарок”",
    },
  ],

  steps: [
    {
      id: "4c99",
      img: stepIngredients,
      alt: "Ингредиенты",
      title: "Лучшие ингредиенты",
      text: "Что-то про суперкачество, лучших поваров, свежесть и т.д.",
    },
    {
      id: "b285",
      img: stepPackage,
      alt: "package",
      title: "Проверенный процесс",
      text: "Что-то про суперкоробочки и бантики и бла бла бла",
    },
    {
      id: "8001",
      img: stepGetting,
      alt: "getting-order",
      title: "Получение в день заказа",
      text: "В день заказа доставка курьером или самовывоз",
    },
    {
      id: "afc1",
      img: stepDelivery,
      alt: "delivery",
      title: "Анонимная доставка",
      text: "Анонимная доставка",
    },
  ],

  guarantees: [
    {
      id: "0a63",
      img: guarantAlmond,
      alt: "almond-flour",
      text: "Только натуральная миндальная мука высокого качества",
    },
    {
      id: "bc3a",
      img: guarantColorings,
      alt: "colorings",
      text: "Всегда свежие макаронс — готовим перед отправкой",
    },
    {
      id: "805e",
      img: guarantFruits,
      alt: "frukts",
      text: "100% ручная работа с вниманием к каждой детали",
    },
  ],

  contacts: [
    {
      title: "Производство",
      list: ["Маршала Тухачевского, 22.", "Время работы: с 8 до 19:30"],
    },
    {
      title: "Техническая поддержка",
      list: [
        "Кафе “Морошка”. Маршала Тухачевского, 22 (с 8 до 19:30)",
        "Кафе “Мята”. Наб канала Грибоедова, 37 (с 10 до 22)",
      ],
    },
    {
      title: "Офис в Москве",
      list: [
        "8 (812) 309-82-88 основной номер",
        "8 (981) 841-85-25 для жалоб и предложений",
      ],
    },
  ],

  catalogDesserts: [
    {
      img: waffle,
      alt: "waffle",
      title: "Трубочки со сгущенкой",
      colorClass: "orange",
      link: "/waffles",
    },
    {
      img: eclairs,
      alt: "eclairs",
      title: "Эклеры",
      colorClass: "pink",
      link: "/eclairs",
    },
    {
      img: profitroles,
      alt: "profitroles",
      title: "Профитроли",
      colorClass: "blue",
      link: "/profitroles",
    },
  ],
  try: [
    {
      img: macaronEclair,
      alt: "one macaron and one eclair",
      title: "1 макарон и 1 эклер",
      text: "промо-набор",
      price: 90,
      prevPrice: 160,
    },
    {
      img: macaronEclair,
      alt: "one macaron and one eclair",
      title: "1 макарон и 1 эклер",
      text: "промо-набор",
      price: 90,
      prevPrice: 160,
    },
    {
      img: macaronEclairS,
      alt: "Всего понемногу ",
      title: "Всего понемногу ",
      text: "3 эклера, 4 трубочки, 6 макарун. <br/>Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
      price: 750,
    },
    {
      img: macaronEclairM,
      alt: "Ещё побольше",
      title: "Ещё побольше",
      text: "3 эклера, 4 трубочки, 6 макарун. <br/>Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
      price: 3900,
    },
    {
      img: macaronEclairL,
      alt: "Ещё побольше",
      title: "Ещё побольше",
      text: "3 эклера, 4 трубочки, 6 макарун. <br/>Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
      price: 3900,
    },
  ],
  promos: [
    {
      promo: "SUMMER2025",
      sale: "150",
    },
  ],
  requests: [
    {
      id: "9c30",
      name: "54545",
      email: "wefwef@gmail.com",
      phone: "454545454544",
      companyName: "4454554",
      message: "444444444444444444",
    },
    {
      id: "8c9b",
      name: "557575",
      email: "wefwef@gmail.com",
      phone: "757567567575",
      companyName: "908",
      message: "",
    },
    {
      id: "a585",
      name: "557575",
      email: "wefwef@gmail.com",
      phone: "757567567575",
      companyName: "908",
      message: "",
    },
    {
      id: "3f18",
      name: "6456456456",
      email: "wefwef@gmail.com",
      phone: "456456455645",
      companyName: "4565",
      message: "",
    },
    {
      id: "22d6",
      name: "3463456346",
      phone: "6456456456",
      companyName: "4564565",
      email: "wefwef@gmail.com",
    },
  ],
};

export default siteData;
