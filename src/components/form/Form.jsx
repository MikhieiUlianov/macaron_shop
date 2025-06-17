import { useForm } from "react-hook-form";
import { useState } from "react";
import "./form.scss";
import useMacaronService from "@/services/MacaronService";

const Form = () => {
  const { postData } = useMacaronService();
  const [success, setSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await postData(data);
      setSuccess(true);
      reset();
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSuccess(false);
    }
  };

  return (
    <section className="form">
      <h2 className="form__title fz-18 fw-600">
        Заказать расчёт или отправить запрос на сотрудничество
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <div className="form__label">
            <label className="fw-400 fz-12" htmlFor="name">
              Имя
            </label>
            <input
              id="name"
              className={`form__input ${
                errors.name ? "form__input--error" : ""
              }`}
              placeholder="Укажите имя"
              {...register("name", { required: "Имя обязательно" })}
            />
            {errors.name && (
              <p className="form__error">{errors.name.message}</p>
            )}
          </div>

          <div className="form__label">
            <label className="fw-400 fz-12" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className={`form__input ${
                errors.email ? "form__input--error" : ""
              }`}
              placeholder="Email"
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Неверный формат email",
                },
              })}
            />
            {errors.email && (
              <p className="form__error">{errors.email.message}</p>
            )}
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

          <div className="form__label">
            <label className="fw-400 fz-12" htmlFor="companyName">
              Компания
            </label>
            <input
              id="companyName"
              className={`form__input ${
                errors.companyName ? "form__input--error" : ""
              }`}
              placeholder="Название компании"
              {...register("companyName", {
                required: "Название компании обязательно",
              })}
            />
            {errors.companyName && (
              <p className="form__error">{errors.companyName.message}</p>
            )}
          </div>

          <div className="form__label">
            <label className="fw-400 fz-12" htmlFor="message">
              Сообщение
            </label>
            <textarea
              id="message"
              className={`form__textarea ${
                errors.message ? "form__input--error" : ""
              }`}
              placeholder="Ваше сообщение"
              {...register("message", {
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            />
            {errors.message && (
              <p className="form__error">{errors.message.message}</p>
            )}
          </div>
        </div>

        <button type="submit" className="btn-submit fz-14 fw-400">
          Заказать расчёт
        </button>

        {success === true && (
          <p className="form__success fz-12 fw-400">
            Форма успешно отправлена!
          </p>
        )}
        {success === false && (
          <p className="form__error fz-12 fw-400">
            Произошла ошибка. Попробуйте ещё раз.
          </p>
        )}

        <div className="form__policy fz-12 fw-400">
          Нажимая на кнопку "Оформить заказ", вы принимаете условия
          <Link to={"/policy"} className="form__policy-link">
            Политики конфиденциальности
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Form;
