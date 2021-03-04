import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './Form3.module.css';

export const InputField = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    setError('');
    props.onChange(e.target.name, e.target.value);
  };

  const validate = () => {
    if (props.validation) {
      const rules = props.validation.split('|');

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === 'required') {
          if (!value) {
            setError('This field is required');
            return false;
          }
        }

        const pair = current.split(':');
        switch (pair[0]) {
          case 'min':
            if (value.length < pair[1]) {
              setError(`This field must be at least ${pair[1]} character long`);
              return false;
            }
            break;
          case 'max':
            if (value.length > pair[1]) {
              setError(
                `This field must be no longer than ${pair[1]} character long`
              );
              return false;
            }
            break;
          default:
            break;
        }
      }
    }
    return true;
  };

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate(),
    };
  });

  return (
    <div className={styles.inputWrapper}>
      {props.label && <label>{props.label}</label>}
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={(e) => handleChange(e)}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
});

InputField.defaultProps = {
  placeholder: '',
  name: '',
  type: 'text',
  value: '',
  autoComplete: 'off',
  validation: '',
};
