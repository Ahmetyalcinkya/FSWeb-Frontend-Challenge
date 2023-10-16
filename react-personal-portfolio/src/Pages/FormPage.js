import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../Contexts/LanguageContext";
import CustomizedSwitches from "../Compounds/SwitchCompound";
import axios from "axios";
import FormCompound from "../Compounds/FormCompound";
import * as Yup from "yup";
import { t } from "i18next";

const initialFormData = {
  name: "",
  surname: "",
  email: "",
  mobileNumber: "",
  mailSubject: "",
  message: "",
};

const FormPage = () => {
  const { toggleLanguage } = useContext(LangContext);

  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState({
    name: "",
    surname: "",
    email: "",
    mobileNumber: "",
    mailSubject: "",
    message: "",
  });
  const [isValid, setValid] = useState(false);

  const formSchema = Yup.object().shape({
    name: Yup.string().required(`${t("formWarning")}`),
    surname: Yup.string().required(`${t("formWarning2")}`),
    email: Yup.string()
      .email(`${t("formWarning3")}`)
      .required(`${t("formWarning4")}`),
    mobileNumber: Yup.number().min(8, `${t("formWarning5")}`),
    mailSubject: Yup.string().required(`${t("formWarning6")}`),
    message: Yup.string().min(30, `${t("formWarning7")}`),
  });

  const changeHandler = (e) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => setFormErr({ ...formErr, [name]: "" }))
      .catch((err) => setFormErr({ ...formErr, [name]: err.errors[0] }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/workintech", formData)
      .then((res) => {
        localStorage.setItem(formData);
        setFormData(initialFormData);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setValid(valid);
    });
  }, [formData]);

  return (
    <div className="w-[90rem] h-screen relative light-primary dark: dark-primary flex flex-col justify-center items-center">
      <div className="absolute top-4 right-72 z-20">
        <CustomizedSwitches />
      </div>
      <div className="absolute top-5 right-[24.1rem] z-20">
        <button
          onClick={() => toggleLanguage("tr")}
          className="lang-btn dark: dark-btn hover:bg-[#CBF281]"
        >
          TR
        </button>
        <button
          onClick={() => toggleLanguage("en")}
          className="lang-btn dark: dark-btn hover:bg-[#3730A3] active:bg-[#3730A3]"
        >
          EN
        </button>
      </div>
      <div className="absolute w-[27rem] h-screen light-secondary right-0 top-0 z-0 dark: dark-secondary"></div>

      <FormCompound
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        formData={formData}
        isValid={isValid}
        formErr={formErr}
      />
    </div>
  );
};

export default FormPage;
