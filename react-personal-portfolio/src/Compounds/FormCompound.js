import { t } from "i18next";
import React from "react";

const FormCompound = (props) => {
  const { formData, changeHandler, submitHandler, formErr, isValid } = props;
  return (
    <div className="w-[20rem] sm:w-[35rem] xl:w-[45rem] flex items-center justify-center border z-20 py-5 rounded-3xl relative light-secondary dark: dark-secondary border-[#3730A3] dark:border-white">
      <form
        onSubmit={submitHandler}
        className="w-60 xl:w-96 flex flex-col items-center justify-center z-20 gap-y-4"
      >
        <label className="form-label">
          <input
            className="form-input dark: dark-form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder={t("formName")}
            required
            autoFocus
          />
          {formErr.name && (
            <span className="form-span dark: dark-form-span">
              <span>*</span>
              {formErr.name}
            </span>
          )}
        </label>
        <label className="form-label">
          <input
            className="form-input dark: dark-form-input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={changeHandler}
            placeholder={t("formSurName")}
            required
          />
          {formErr.surname && (
            <span className="form-span dark: dark-form-span">
              <span>*</span>
              {formErr.surname}
            </span>
          )}
        </label>
        <label className="form-label">
          <input
            className="form-input dark: dark-form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder={t("formEmail")}
            required
          />
          {formErr.email && (
            <span className="form-span dark: dark-form-span">
              <span>*</span>
              {formErr.email}
            </span>
          )}
        </label>
        <label className="form-label">
          <input
            className="form-input dark: dark-form-input"
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={changeHandler}
            placeholder={t("formNumber")}
            required
          />
          {formErr.mobileNumber && (
            <span className="form-span dark: dark-form-span">
              <span>*</span>
              {formErr.mobileNumber}
            </span>
          )}
        </label>
        <label className="form-label">
          <input
            className="form-input dark: dark-form-input"
            type="text"
            name="mailSubject"
            value={formData.mailSubject}
            onChange={changeHandler}
            placeholder={t("formSubject")}
            required
          />
          {formErr.mailSubject && (
            <span className="form-span dark: dark-form-span">
              <span>*</span>
              {formErr.mailSubject}
            </span>
          )}
        </label>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <label className="w-full h-24 flex flex-col justify-center items-center">
            <textarea
              className="form-textarea dark: dark-form-textarea"
              type="text"
              name="message"
              value={formData.message}
              onChange={changeHandler}
              placeholder={t("formMessage")}
              required
            />
            {formErr.message && (
              <span className="form-span dark: dark-form-span">
                <span>*</span>
                {formErr.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            disabled={!isValid}
            className="w-32 h-10 form-btn dark: dark-btn"
          >
            {t("formWarning8")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCompound;
