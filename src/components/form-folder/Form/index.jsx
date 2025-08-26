import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss";
import useMacaronService from "@/services/MacaronService";
import Section from "@/components/Section";
import FormField from "@/utils/FormField";

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
      setTimeout(() => setSuccess(null), 5000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setSuccess(false);
    }
  };

  return (
    <Section sectionClass="form">
      <h2 className="form__title fz-18 fw-600">
        Заказать расчёт или отправить запрос на сотрудничество
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__wrapper">
          <FormField
            label="Имя"
            id="name"
            placeholder="Укажите имя"
            registerName="name"
            register={register}
            errors={errors}
            errorConfig={{ required: "Имя обязательно" }}
          />

          <FormField
            label="Email"
            id="email"
            placeholder="Email"
            type="email"
            registerName="email"
            register={register}
            errors={errors}
            errorConfig={{
              required: "Email обязателен",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Неверный формат email",
              },
            }}
          />

          <FormField
            label="Телефон"
            id="phone"
            placeholder="+7 (___) ___-__-__"
            type="tel"
            registerName="phone"
            register={register}
            errors={errors}
            errorConfig={{
              required: "Телефон обязателен",
              pattern: {
                value: /^\+?[0-9\s\-()]{10,18}$/,
                message: "Неверный формат телефона",
              },
            }}
          />

          <FormField
            label="Компания"
            id="companyName"
            placeholder="Название компании"
            registerName="companyName"
            register={register}
            errors={errors}
            errorConfig={{
              required: "Название компании обязательно",
            }}
          />

          <FormField
            label="Сообщение"
            id="message"
            placeholder="Ваше сообщение"
            as="textarea"
            registerName="message"
            register={register}
            errors={errors}
            errorConfig={{
              minLength: {
                value: 10,
                message: "Минимум 10 символов",
              },
            }}
          />
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
          Нажимая на кнопку "Оформить заказ", вы принимаете условия{" "}
          <Link to="/policy" className="form__policy-link">
            Политики конфиденциальности
          </Link>
        </div>
      </form>
    </Section>
  );
};

export default Form;
