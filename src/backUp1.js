import React, { Component, useState } from "react";
import "./App.css";

class App extends Component {
  state = {
    text1: "",
    text2: "",
    textarea: "",
    select: "",
    select2: [],
    checkbox: false,
    radio: "",
  };

  ref1 = React.createRef();

  change = (e) => {
    let { name, value, type, selectedOptions, checked } = e.target;

    if (type === "select-multiple") {
      value = [...selectedOptions].map((o) => o.value);
    }

    if (type === "checkbox") {
      value = checked;
    }

    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.ref1.current.value);
  };

  render() {
    const {
      text1,
      text2,
      textarea,
      select,
      select2,
      checkbox,
      radio,
    } = this.state;
    return (
      <div className="wrapper">
        <h1>My simple form</h1>
        <form onSubmit={this.submit}>
          <input ref={this.ref1} defaultValue="hui" />
          <input name="text1" value={text1} onChange={this.change} />
          <input name="text2" value={text2} onChange={this.change} />
          <textarea
            name="textarea"
            value={textarea}
            onChange={this.change}
          ></textarea>
          <select name="select" value={select} onChange={this.change}>
            <option value="1">Значение 1</option>
            <option value="2">Значение 2</option>
            <option value="3">Значение 3</option>
            <option value="4">Значение 4</option>
          </select>
          <select
            multiple={true}
            name="select2"
            value={select2}
            onChange={this.change}
          >
            <option value="1">Значение 1</option>
            <option value="2">Значение 2</option>
            <option value="3">Значение 3</option>
            <option value="4">Значение 4</option>
          </select>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={this.change}
          />
          <div className="flex">
            <input
              type="radio"
              name="radio"
              checked={radio === "1"}
              value="1"
              onChange={this.change}
            />
            <input
              type="radio"
              name="radio"
              checked={radio === "2"}
              value="2"
              onChange={this.change}
            />
          </div>
          <button className="submit">Submit</button>
        </form>
        <Example />
        <FormInHooks />
      </div>
    );
  }

  componentDidUpdate() {
    console.log(this.state);
  }
}

export default App;

function FormInHooks() {
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

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз(а)</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}
