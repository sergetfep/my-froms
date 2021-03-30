import React, { useState } from 'react';
import styles from './PlainResult.module.css';

export const PlainResult = () => {
  // const [list, setList] = useState(['sds', 'sdsd', 'fg', 'fggff']);
  const [list, setList] = useState([]);
  //   const [list, setList] = useState(function () {
  //     return { data: { comments: [] } };
  //   });
  const [enterJSON, setEnterJSON] = useState(false);
  const [enterList, setEnterList] = useState(false);

  function handleClickEnterJSON() {
    setEnterJSON(!enterJSON);
    setEnterList(false);
    getResponseFromServer();
  }

  function handleClickEnterList() {
    setEnterList(!enterList);
    setEnterJSON(false);
    getResponseFromServer();
  }

  const getResponseFromServer = () => {
    fetch('http://localhost:3000/plainResult.json', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((load) => {
        setList(load);
      });
  };

  return (
    <div className="wrapper">
      <div className={styles.buttons}>
        <button className={styles.enterJSON} onClick={handleClickEnterJSON}>
          Вывести список в JSON
        </button>
        <button className={styles.enterList} onClick={handleClickEnterList}>
          Вывести красивый список
        </button>
      </div>
      {(enterJSON || enterList) && (
        <div className={styles.content}>
          {enterJSON && JSON.stringify(list, null, '\t')}
          <ul>
            {/* {enterList && list.items[0].text} */}
            {/* {enterList && list.items[0]} */}

            {/* {enterList && list.items.map((el, i) => <li key={i}>{el}</li>)} */}

            {enterList &&
              list.items?.map((el, i) => <li key={i}>{el.text}</li>)}
            {/* {enterlist &&
              list.items.map(function (comment) {
                return (
                  <div>
                    <h1>{comment.text}</h1>
                  </div>
                );
              })} */}
          </ul>
          {/* {console.log('1', list.items[0].text)} */}
          {/* {console.log('1', list.items[0])} */}
        </div>
      )}
    </div>
  );
};
