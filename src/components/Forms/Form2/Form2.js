import React, { useState } from 'react';
import styles from './Form2.module.css';

export function FormInHooks() {
  const [data, setData] = useState({});

  // const formElement = document.getElementById('myFormId');

  // const formData = new FormData(formElement);

  // for (let [name, value] of formData) {
  //   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
  // }

  // const request = new XMLHttpRequest();
  // request.send(new FormData(formElement));

  const handleChange = (e, name, value) => {
    if (e.target.name === 'text1') setData({ ...data, text1: e.target.value });
    if (e.target.name === 'text2') setData({ ...data, text2: e.target.value });
    if (e.target.name === 'textarea')
      setData({ ...data, textarea: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Is sended');
    console.log('data', data);
    // formData.append(data);
  };

  return (
    <div>
      <h1>My simple form 2</h1>
      <form onSubmit={onSubmit} id="myFormId">
        <input name="text1" value={data.text1} onChange={handleChange} />
        <input name="text2" value={data.text2} onChange={handleChange} />
        <textarea
          name="textarea"
          value={data.textarea}
          onChange={handleChange}
        ></textarea>
        <button className={styles.formButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

/////////////////////
/////////////////////
/////////////////////

// const handleChange = (name, value) => {
//   setData((prev) => ({ ...prev, [name]: value }));
//   console.log(data);
// };

// const handleChange = (e, name, value) => {
//   if (e.target.name === 'text1') setText1(e.target.value);
//   if (e.target.name === 'text2') setText2(e.target.value);
// };

//////
// const onSubmit = async (e) => {
//   e.preventDefault();
//   console.log('Logged In');
// let myFormElem = document.getElementById('myFormId');
// let response = await fetch('http://localhost:4000', {
//   method: 'POST',
//   body: new FormData(myFormElem),
// });
// let result = await response.json();
// alert(result.message);
//};

// switch (e.target.name) {
//   case 'text1':
//     setData({ ...data, text1: e.target.value });
//     break;
//   case 'text2':
//     setData({ ...data, text2: e.target.value });
//     break;
//   case 'textarea':
//     setData({ ...data, textarea: e.target.value });
//     break;
//   default:
//     break;
// }

// const formElement = document.getElementById('myFormId');
//   const request = new XMLHttpRequest();
//   request.send(new FormData(formElement));
