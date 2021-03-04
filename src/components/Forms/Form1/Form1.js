import React from 'react';

export class Form1 extends React.Component {
  state = {
    text1: '',
    text2: '',
    textarea: '',
    select: '',
    select2: [],
    checkbox: false,
    radio: '',
  };

  ref1 = React.createRef();

  change = (e) => {
    let { name, value, type, selectedOptions, checked } = e.target;

    //   console.log(e.target);

    //console.log(e.currentTarget);

    // console.log({ name, value, type, selectedOptions, checked });

    // let select2 = document.getElementById('select2');

    //console.log(select2.attributes);

    // console.log(select2.selectedOptions);

    if (type === 'select-multiple') {
      value = [...selectedOptions].map((o) => o.value);
    }

    if (type === 'checkbox') {
      value = checked;
    }

    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();
    // console.log(this.ref1.current.value);
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
          <input ref={this.ref1} defaultValue="defaultValue" />
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
            id="select2"
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
              checked={radio === '1'}
              value="1"
              onChange={this.change}
            />
            <input
              type="radio"
              name="radio"
              checked={radio === '2'}
              value="2"
              onChange={this.change}
            />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }

  componentDidUpdate() {
    // console.log(this.state);
  }
}
