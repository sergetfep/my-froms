import React, { useState } from 'react';
//import styles from './Form2.module.css';

export function FormInHooks() {
  const [text1, setText1] = useState();

  // const [data, setData] = useState({});

  // const handleChange = (name, value) => {
  //   setData((prev) => ({ ...prev, [name]: value }));
  //   console.log(data);
  // };

  const handleChange = (name, value) => {
    setText1();
  };

  const onSubmit = async (e) => {
    console.log('Logged In');
    let myFormElem = document.getElementById('myFormId');
    let response = await fetch('http://localhost:4000', {
      method: 'POST',
      body: new FormData(myFormElem),
    });
    let result = await response.json();
    alert(result.message);
  };

  return (
    <div>
      <h1>My simple form 2</h1>
      <form onSubmit={onSubmit} id="myFormId">
        <input name="text1" value={text1} onChange={handleChange} />
        <button type="submit">Send</button>
        {/* <input
            name="tex2"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          <textarea
            name="textarea"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea> */}
      </form>
    </div>
  );
}
