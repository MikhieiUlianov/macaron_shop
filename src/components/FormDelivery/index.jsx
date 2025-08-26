import React, { useState, useEffect } from "react";
import Section from "../Section";
import { useForm } from "react-hook-form";

import { usePostDataMutation } from "@/api/apiSlice";
import { updateCartOrderData, resetCart } from "../Cart/cartSlice";

import "./formDelivery.scss";
import "../Form/form.scss";
import delivery from "/icons/productInfo/delivery.svg";
import pickUp from "/icons/productInfo/self-pickup.svg";
import yes from "/icons/yes.svg";

const FormDelivery = () => {
  const {
    reset,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [activeMethod, setActiveMethod] = useState("courier");
  const [activeCheckbox, setActiveCheckbox] = useState("Оплата картой онлайн");
  const [showSuccess, setShowSuccess] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);
  const { totalPrice, cart } = useSelector((state) => state.cart);

  const [postData, { isLoading, isError }] = usePostDataMutation();

  useEffect(() => {
    setValue("deliveryMethod", activeMethod);
    setValue("methodToPay", activeCheckbox);
  }, [activeMethod, setValue, totalPrice]);

  const onSubmit = async (formData) => {
    try {
      if (cart.length === 0) {
        setEmptyCart(true);
        return;
      } else {
        const result = await postData({ formData, cart }).unwrap();
        reset();
        dispatch(updateCartOrderData(formData));
        setShowSuccess(true);
        dispatch(resetCart());
        console.log(formData);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  useEffect(() => {
    if (cart.length > 0 && emptyCart) {
      setEmptyCart(false);
    }
  }, [cart]);

  const methodsToPay = [
    "Оплата картой онлайн",
    "Наличными при получении",
    "Яндекс деньги",
  ];

  return (
    <Section sectionClass={"formDelivery"}>
      <h2 className="formDelivery__title fz-18 fw-600">Доставка</h2>
      <div className="formDelivery__text fw-400 fz-12">
        Укажите контактные данные и выберите способ доставки
      </div>

      <form
        id="form-delivery"
        className="formDelivery__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" {...register("deliveryMethod")} />
        <input type="hidden" {...register("methodToPay")} />

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="name">
            Имя
          </label>
          <input
            id="name"
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
            placeholder="Укажите имя"
            {...register("name", { required: "Имя обязательно" })}
          />
          {errors.name && <p className="form__error">{errors.name.message}</p>}
        </div>

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="phone">
            Телефон
          </label>
          <input
            id="phone"
            className={`form__input ${
              errors.phone ? "form__input--error" : ""
            }`}
            placeholder="+7 (___) ___-__-__"
            {...register("phone", {
              required: "Телефон обязателен",
              pattern: {
                value: /^\+?[0-9\s\-()]{10,18}$/,
                message: "Неверный формат телефона",
              },
            })}
          />
          {errors.phone && (
            <p className="form__error">{errors.phone.message}</p>
          )}
        </div>

        <div className="formDelivery__methods">
          <h3 className="formDelivery__methods-title">Способ доставки:</h3>
          <div className="formDelivery__methods-wrapper">
            <div
              className={`formDelivery__method ${
                activeMethod === "courier" ? "active" : ""
              }`}
              onClick={() => setActiveMethod("courier")}
              style={{ cursor: "pointer" }}
            >
              <div className="formDelivery__method-block">
                <img
                  className="formDelivery__method-img"
                  src={delivery}
                  alt="delivery by our company"
                />
              </div>
              <div className="formDelivery__method-block">
                <h4 className="formDelivery__method-title">
                  Курьерская доставка
                </h4>
                <div className="formDelivery__method-text">400 руб.</div>
              </div>
            </div>

            <div
              className={`formDelivery__method ${
                activeMethod === "selfPickUp" ? "active" : ""
              }`}
              onClick={() => setActiveMethod("selfPickUp")}
              style={{ cursor: "pointer" }}
            >
              <div className="formDelivery__method-block">
                <img
                  className="formDelivery__method-img"
                  src={pickUp}
                  alt="self pick up"
                />
              </div>
              <div className="formDelivery__method-block">
                <h4 className="formDelivery__method-title">Самовывоз</h4>
                <div className="formDelivery__method-text">Бесплатно</div>
              </div>
            </div>
          </div>
        </div>

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="address">
            Адрес доставки
          </label>
          <textarea
            id="address"
            className={`form__input ${
              errors.address ? "form__input--error" : ""
            }`}
            placeholder="Не нужно заполнять при самовывозе"
            {...register("address", {
              required: activeMethod === "courier" ? "Адрес обязателен" : false,
            })}
          />
          {errors.address && (
            <p className="form__error">{errors.address.message}</p>
          )}
        </div>

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="date">
            Дата получения
          </label>
          <select
            id="date"
            className={`form__input ${errors.date ? "form__input--error" : ""}`}
            {...register("date", {
              required:
                activeMethod === "selfPickUp" ? "Дата обязательна" : false,
            })}
          >
            <option value="">Выберите дату</option>
            <option value="2025.05.06">2025.05.06</option>
            <option value="2025.04.06">2025.04.06</option>
            <option value="2025.03.06">2025.03.06</option>
          </select>
          {errors.date && <p className="form__error">{errors.date.message}</p>}
        </div>

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="time">
            Время
          </label>
          <select
            id="time"
            className={`form__input ${errors.time ? "form__input--error" : ""}`}
            {...register("time", { required: "Заполнять обязательно" })}
          >
            <option value="">Выберите время</option>
            <option value="12.00-13.00">12.00-13.00</option>
            <option value="12.00-14.00">12.00-14.00</option>
            <option value="12.00-15.00">12.00-15.00</option>
          </select>
          {errors.time && <p className="form__error">{errors.time.message}</p>}
        </div>

        <div className="form__label">
          <label className="fw-400 fz-12" htmlFor="comment">
            Комментарий к заказу
          </label>
          <textarea
            id="comment"
            className={`form__input ${
              errors.comment ? "form__input--error" : ""
            }`}
            placeholder="Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое."
            {...register("comment")}
          />
          {errors.comment && (
            <p className="form__error">{errors.comment.message}</p>
          )}
        </div>

        <div className="formDelivery__choice">
          <h3 className="formDelivery__choice-title">Метод оплаты</h3>
          <div className="formDelivery__choice-wrapper">
            {methodsToPay.map((method, idx) => {
              return (
                <label className="formDelivery__choice-block" key={idx}>
                  <button
                    type="button"
                    className={` formDelivery__choice-btn ${
                      activeCheckbox === method ? "active" : ""
                    }`}
                    onClick={() => setActiveCheckbox(method)}
                  >
                    <img src={yes} alt="checkbox" />
                  </button>
                  <span className="formDelivery__choice-text">{method}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="formDelivery__finalPrice">
          <div className="formDelivery__finalPrice-text">
            Итоговая сумма заказа вместе с доставкой:
          </div>
          <div className="formDelivery__finalPrice-price">
            {totalPrice} руб.
          </div>
        </div>
        <button
          type="submit"
          className="formDelivery__btn"
          disabled={isLoading}
        >
          {isLoading ? "Отправка..." : "Отправить"}
        </button>
        {emptyCart && (
          <div id="emptyCart">
            Вам необходимо заполнить поля и иметь в корзине хотя бы один товар!
          </div>
        )}
        {isError && (
          <p className="form__error">
            Ошибка отправки данных. Попробуйте снова.
          </p>
        )}
        {showSuccess && (
          <p className="form__success">Данные успешно отправлены!</p>
        )}
      </form>
    </Section>
  );
};

export default FormDelivery;
