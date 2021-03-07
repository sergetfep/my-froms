import React, { useState } from 'react';
import styles from './Form2.module.css';

export function FormInHooks() {
  const [data, setData] = useState({
    text1: '',
    text2: '',
    textarea: '',
    select: '',
    multipleSelect: [],
    checkbox: false,
    radio: '',
  });

  let [showData, setShowData] = useState(false);

  const { form } = document.forms;

  const handleChange = (e) => {
    let { name, value, type, selectedOptions, checked } = e.currentTarget;

    if (type === 'select-multiple') {
      value = [...selectedOptions].map((o) => o.value);
    }

    if (type === 'checkbox') {
      value = checked;
    }

    setData({ ...data, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('MyButton').style.visibility = 'visible';
    createFormData(data);
  };

  const createFormData = (data) => {
    const entries = Object.entries(data);

    const formData = new FormData();

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });
    sendToServer(formData);
    // console.log('formData', JSON.stringify(formData));
    // console.log('data', JSON.stringify(data));
  };

  const sendToServer = (formData) => {
    fetch('http://localhost:4000', {
      method: 'POST',
      body: formData,
      headers: { my_header: 'something', my_header2: 'something2' },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          // alert('Запрос на сервер отправлен!');
          console.log('Запрос на сервер отправлен!');
        }
      });
  };

  const onClickToHide = () => {
    setShowData(!showData);
  };

  return (
    <div className="wrapper">
      <h1>My private form</h1>
      <form onSubmit={onSubmit}>
        <label>
          <span>First Name: </span>
          <input name="text1" value={data.text1} onChange={handleChange} />
        </label>
        <label>
          <span>Last Name: </span>
          <input name="text2" value={data.text2} onChange={handleChange} />
        </label>
        <label>
          <span>Description: </span>
          <textarea
            name="textarea"
            value={data.textarea}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          <span>Select: </span>
          <select name="select" value={data.select} onChange={handleChange}>
            <option value="1">Значение 1</option>
            <option value="2">Значение 2</option>
            <option value="3">Значение 3</option>
            <option value="4">Значение 4</option>
          </select>
        </label>
        <label>
          <span>Select one or more: </span>
          <select
            id="multipleSelect"
            multiple={true}
            name="multipleSelect"
            value={data.multipleSelect}
            onChange={handleChange}
          >
            <option value="1">Значение 1</option>
            <option value="2">Значение 2</option>
            <option value="3">Значение 3</option>
            <option value="4">Значение 4</option>
          </select>
        </label>
        <label>
          <span>Check: </span>
          <input
            type="checkbox"
            name="checkbox"
            checked={data.checkbox}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Check one:</span>
          <div className="flex">
            <input
              className={styles.marginRightAndTop10}
              type="radio"
              name="radio"
              checked={data.radio === '1'}
              value="1"
              onChange={handleChange}
            />
            <input
              className={styles.marginRightAndTop10}
              type="radio"
              name="radio"
              checked={data.radio === '2'}
              value="2"
              onChange={handleChange}
            />
          </div>
        </label>

        {/* <input type="file" /> */}

        <button className={styles.Form2Button} type="submit">
          Send
        </button>
      </form>
      <button className={styles.hide} id="MyButton" onClick={onClickToHide}>
        {showData ? 'Hide' : 'Show'}
      </button>
      {showData && (
        <div>
          <div className={styles.show}>
            {showData && JSON.stringify(data, null, '\t')}
          </div>
        </div>
      )}
    </div>
  );
}

/////////////////////
/////////////////////
/////////////////////
// const MyFormElementHOC = (Component, props) => {
//   return (
//     <>
//       <label>
//         <span>{props.span}</span>
//         <Component {...props}/>
//       </label>
//     </>
//   );
// };

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
/////////////////

// const formElement = document.getElementById('myFormId');

// const formData = new FormData(formElement);

// for (let [name, value] of formData) {
//   alert(`${name} = ${value}`); // key1=value1, потом key2=value2
// }

// const request = new XMLHttpRequest();
// request.send(new FormData(formElement));
//////////////

// formData.append(data);
// const formData = new FormData(form);
// const values = Object.fromEntries(formData.entries());

///////////////

// const formData = new FormData(data);
// const values = Object.fromEntries(formData.entries());

// console.log('values', values);

//////////////

// if (e.target.name === 'text1') setData({ ...data, text1: e.target.value });
// if (e.target.name === 'text2') setData({ ...data, text2: e.target.value });
// if (e.target.name === 'textarea')
//   setData({ ...data, textarea: e.target.value });
// if (e.target.name === 'select')
//   setData({ ...data, select: e.target.value });
// if (e.target.name === 'multipleSelect')
//   setData({ ...data, select: e.target.value });
///////////////////
// const { form } = document.getElementById('myFormId');

///////////////////////

////////////////////

// export const Result = () => {
//   const [success, setSuccess] = useState(false);
//   const styles = useStyles();
//   const { data } = useData();
//   const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
//   const { files } = data;

//   const onSubmit = async () => {
//     const formData = new FormData();

//     if (data.files) {
//       data.files.forEach((file) => {
//         formData.append('files', file, file.name);
//       });
//     }
//     entries.forEach((entry) => {
//       formData.append(entry[0], entry[1]);
//     });

//     const res = await fetch('http://localhost:4000', {
//       method: 'POST',
//       body: formData,
//     });

//     if (res.status === 200) {
//       Swal.fire('Great job!', "You're the best!", 'success');
//       setSuccess(true);
//     }
//   };

/////////

// console.log('entries', entries);
// console.log('formData', formData);
// console.log(formData.has('text1'));

//   const res = await fetch('http://localhost:4000', {
//     method: 'POST',
//     body: formData,
//     headers: { my_header: 'something' },
//   });

//   if (res.status === 200) {
//     alert('Запрос на сервер отправлен!');
//     console.log(res.message);
//   }
// };

///////
// console.log('Is sended');
// console.log('data', data);

// useEffect(() => {
//   // effect
//   console.log('swwww');
// }, [showData]);
