import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../Contexts/LanguageContext";
import CustomizedSwitches from "../Compounds/SwitchCompound";
import axios from "axios";
import FormCompound from "../Compounds/FormCompound";
import * as Yup from "yup";
import { t } from "i18next";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SwitchContext } from "../Contexts/SwitchContext";

const initialFormData = {
  name: "",
  surname: "",
  email: "",
  mobileNumber: "",
  mailSubject: "",
  message: "",
};

const FormPage = () => {
  const history = useHistory();
  const { toggleLanguage } = useContext(LangContext);
  const { theme } = useContext(SwitchContext);

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
    mobileNumber: Yup.string().min(8, `${t("formWarning5")}`),
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

  const redirectDelay = () => {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  const showNotification = () => {
    if (theme === "light") {
      toast.success(`${t("toast3")}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(`${t("toast3")}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/workintech", formData)
      .then((res) => {
        localStorage.setItem("form", JSON.stringify(formData));
        setFormData(initialFormData);
      })
      .catch((err) => console.log(err));
    redirectDelay();
    showNotification();
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      setValid(valid);
    });
  }, [formData]);

  return (
    <div className="w-full total-width h-screen relative light-primary dark: dark-primary flex flex-col justify-center items-center">
      <h3 className="mt-4 sm:mt-0 xl:absolute top-5 font-inter font-bold text-5xl leading-[3.75rem] text-secondary dark: dark-text-secondary">
        {t("formHeader")}
      </h3>
      <div className="absolute right-0 top-4 sm:right-6 xl:right-72 z-20">
        <CustomizedSwitches />
      </div>
      <div className="absolute top-5 right-20 sm:right-28 xl:right-[24.1rem] z-20">
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
      <div className="absolute w-full h-28 sm:w-[10rem] sm:h-screen xl:w-[27rem] light-secondary right-0 top-0 z-0 dark: dark-secondary"></div>
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
