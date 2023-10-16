import { t } from "i18next";
import React from "react";

const FormCompound = (props) => {
  const { formData, changeHandler, submitHandler, formErr, isValid } = props;
  return (
    <div className="w-[60rem] h-[30rem] flex items-center justify-center border z-20 rounded-3xl relative light-secondary dark: dark-secondary border-[#3730A3] dark: border-whitea">
      <div className=" absolute w-[11.95rem] h-full light-primary z-10 right-0 rounded-r-3xl dark: dark-primary"></div>
      <form
        onSubmit={submitHandler}
        className=" w-full flex flex-col items-center z-20 gap-y-4"
      >
        <div className="form-div">
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder={t("formName")}
              required
            />
            {formErr.name && (
              <span className="form-span">
                <span>*</span>
                {formErr.name}
              </span>
            )}
          </label>
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={changeHandler}
              placeholder={t("formSurName")}
              required
            />
            {formErr.surname && (
              <span className="form-span ">
                <span>*</span>
                {formErr.surname}
              </span>
            )}
          </label>
        </div>
        <div className="form-div">
          <label className="form-label">
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder={t("formEmail")}
              required
            />
            {formErr.email && (
              <span className="form-span ">
                <span>*</span>
                {formErr.email}
              </span>
            )}
          </label>
          <label className="form-label">
            <input
              className="form-input"
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={changeHandler}
              placeholder={t("formNumber")}
              required
            />
            {formErr.mobileNumber && (
              <span className="form-span ">
                <span>*</span>
                {formErr.mobileNumber}
              </span>
            )}
          </label>
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              name="mailSubject"
              value={formData.mailSubject}
              onChange={changeHandler}
              placeholder={t("formSubject")}
              required
            />
            {formErr.mailSubject && (
              <span className="form-span ">
                <span>*</span>
                {formErr.mailSubject}
              </span>
            )}
          </label>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="w-full h-24 flex flex-col justify-center items-center">
            <textarea
              className="w-[20rem] rounded-xl p-2"
              type="text"
              name="message"
              value={formData.message}
              onChange={changeHandler}
              placeholder={t("formMessage")}
              required
            />
            {formErr.message && (
              <span className="form-span ">
                <span>*</span>
                {formErr.message}
              </span>
            )}
          </label>
          <button
            type="submit"
            disabled={!isValid}
            className="w-32 h-10 light-primary rounded-3xl text-secondary hover:bg-[#CBF281] border border-[#3730A3] hover:text-[#4832D3] duration-500"
          >
            {t("formWarning8")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCompound;
