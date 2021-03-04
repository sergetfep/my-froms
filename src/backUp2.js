import React, { useState } from 'react';
import styles from './Form2.module.css';

export function FormInHooks() {
  //   const [text1, setText1] = useState();
  //   const [text2, setText2] = useState();
  //   const [textarea, setTextarea] = useState();

  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  };

  // function change(e) {
  //   console.log("dfdf");
  //   console.log(e.target);

  //   setText(...text);
  // }

  return (
    <div>
      <h1>My simple form 2</h1>
      <form>
        <input
          name="text1"
          // value={state.text1}
          onChange={handleChange}
        />
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
