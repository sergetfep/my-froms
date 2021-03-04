import React, { createRef, useRef, useState } from 'react';
import styles from './Form3.module.css';
import { InputField } from './InputField';

export const Form3 = () => {
  const inputRefs = useRef([createRef(), createRef()]);
  const [, setData] = useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    console.log('Logged In');
    //Carry on as normal
  };

  return (
    <div className={styles.Form3}>
      <form className={styles.form} onSubmit={submitForm}>
        <h1>Login</h1>
        <InputField
          ref={inputRefs.current[0]}
          name="username"
          label="Username:"
          onChange={handleChange}
          validation={'required|min:6|max:12'}
        />
        <InputField
          ref={inputRefs.current[1]}
          name="password"
          label="Password:"
          validation="required|min:6|max:12"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
