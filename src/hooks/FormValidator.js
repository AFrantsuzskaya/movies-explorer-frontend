import { useState, useCallback } from "react";

export function FormValidator() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    const regName = /^[a-zA-Zа-яА-Я -]{1,}$/;
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    setValues({ ...values, [name]: value });
  
    setIsValid(input.closest("form").checkValidity());
   
    if (name === 'name') {
      
      if (regName.test(value)) {
        setErrors({...errors, [name]: input.validationMessage})
      } else {
         setErrors({
           ...errors, [name]: 'Имя может содержать только буквы, дефис или пробел'
         })
      }
    } else if (name === 'email') {
      if (regEmail.test(value)) {
        setErrors({...errors, [name]: input.validationMessage})
      } else {
        setErrors({...errors, [name]: 'Проверьте Ваш email'})
      }
    } else if (name === 'password') {
      setErrors({ ...errors, [name]: input.validationMessage });
    }
  };

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, resetFrom, errors, isValid, setIsValid, setValues };
}
