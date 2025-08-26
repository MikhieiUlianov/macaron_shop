import { useForm } from "react-hook-form";
import FormField from "@/utils/FormField";
import Section from "../Section";
import { usePostDataMutation } from "@/api/apiSlice";

import envelope from "/img/envelope.png";
import "../Form/form.scss";
import "./formIdeas.scss";

const FormIdeas = () => {
  const [postData, { isLoading, isError }] = usePostDataMutation();
  const [success, setSuccess] = useState(null); // null = ещё не отправляли

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await postData(formData).unwrap();
      reset();
      setSuccess(true);
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <Section sectionClass="formIdeas">
      <div className="formIdeas__wrapper">
        <div className="formIdeas__wrapper-block">
          <h2 className="formIdeas__title fw-600 fz-18">
            Мы открыты для новых идей
          </h2>
          <div className="formIdeas__text fw-400 fz-14">
            Каждое событие уникально и мы готовы предложить индивидуальные
            решения для Вашего мероприятия
          </div>
          <form className="formIdeas__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__wrapper formIdeas__wrapper">
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
                as="textarea"
                label="Опишите вашу идею"
                id="idea"
                type="text"
                registerName="idea"
                register={register}
                errors={errors}
                errorConfig={{ required: "Поле обязательно" }}
                extraInputClass={"formIdeas__textarea"}
                extraLabelClass={"formIdeas__label"}
              />
            </div>

            <button
              type="submit"
              className="btn-submit fz-14 fw-400 formIdeas__btn"
              disabled={isLoading}
            >
              Отправить заявку
            </button>

            {success === true && (
              <p className="form__success fz-12 fw-400">
                Форма успешно отправлена!
              </p>
            )}
            {success === false ||
              (isError && (
                <p className="form__error fz-12 fw-400">
                  Произошла ошибка. Попробуйте ещё раз.
                </p>
              ))}

            <div className="form__policy formIdeas__policy fz-12 fw-400">
              Нажимая на кнопку "Оформить заказ", вы принимаете условия{" "}
              <Link to="/policy" className="form__policy-link">
                Политики конфиденциальности
              </Link>
            </div>
          </form>
        </div>
        <div className="formIdeas__wrapper-block">
          <img
            src={envelope}
            alt="beautiful envelope"
            className="formIdeas__img"
          />
        </div>
      </div>
    </Section>
  );
};

export default FormIdeas;
