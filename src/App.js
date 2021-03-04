import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Form1 } from "./components/Forms/Form1/Form1";
import { FormInHooks } from "./components//Forms/Form2/Form2";
import { Form3 } from "./components/Forms/Form3/Form3";

// const Form1 = () => "Form1";
// const Form2 = () => "Form2";
// const Form3 = () => "Soon";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/form1" component={Form1} />
          <Route exact path="/form2" component={FormInHooks} />
          <Route exact path="/form3" component={Form3} />
        </Switch>
      </Router>
    </>
  );
}
