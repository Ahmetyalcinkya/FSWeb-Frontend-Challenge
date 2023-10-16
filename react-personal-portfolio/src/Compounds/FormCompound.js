import { t } from "i18next";
import React from "react";

const FormCompound = (props) => {
  const { formData, changeHandler, submitHandler, formErr } = props;
  return (
    <form
      onSubmit={submitHandler}
      className="w-[60rem] flex justify-around z-20"
    >
      <label>
        <h5>{t("formName")}</h5>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="t ile düzenle(isminizi yazınız)"
          required
        />
        {formErr.name && <span className="text">{formErr.name}</span>}
      </label>
      <label>
        <h5>{t("formSurName")}</h5>
        <input
          type="text"
          name="name"
          value={formData.surname}
          onChange={changeHandler}
          placeholder="t ile düzenle(Soyisminizi yazınız)"
          required
        />
        {formErr.surname && <span className="text">{formErr.surname}</span>}
      </label>
      <label>
        <h5>{t("formEmail")}</h5>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="t ile düzenle(Soyisminizi yazınız)"
          required
        />
        {formErr.email && <span className="text">{formErr.email}</span>}
      </label>
    </form>
  );
};

export default FormCompound;
