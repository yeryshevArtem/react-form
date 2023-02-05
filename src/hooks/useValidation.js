import { useState } from "react";

function useValidation(form) {
  const [wasValidatedClass, setValidatedClass] = useState("");

  const validate = () => {
    const isValid = form.current.checkValidity();
    setValidatedClass("was-validated");
    return isValid;
  };

  const removeValidErr = () => {
    setValidatedClass("");
  };

  return {
    validate,
    removeValidErr,
    wasValidatedClass,
  };
}

export default useValidation;
