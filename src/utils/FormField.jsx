const FormField = ({
  as = "input",
  type = "text",
  label,
  id,
  placeholder,
  registerName,
  register,
  errorConfig,
  errors,
  options = [],
  extraInputClass,
  extraLabelClass,
}) => {
  const error = errors?.[registerName];
  const commonProps = {
    id,
    placeholder,
    className: `form__input ${extraInputClass} ${
      error ? "form__input--error" : ""
    }`,
    ...register(registerName, errorConfig),
  };

  return (
    <div className={`form__label ${extraLabelClass}`}>
      <label htmlFor={id} className="fw-400 fz-12">
        {label}
      </label>

      {as === "textarea" && (
        <textarea
          {...commonProps}
          className={`form__textarea ${extraInputClass} ${
            error ? "form__input--error" : ""
          }`}
        />
      )}

      {as === "select" && (
        <select {...commonProps}>
          <option value="">Выберите...</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}

      {as === "input" && <input type={type} {...commonProps} />}

      {error && <p className="form__error">{error.message}</p>}
    </div>
  );
};

export default FormField;
