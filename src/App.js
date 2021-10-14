import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    } else if (mode) {
      setmode('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enabled", "success")


    }
  }
  const [color, setColor] = useState("red");

  function buttonPressed(color) {
    setColor(color);
    document.body.style.backgroundColor = color;
    setmode('light');
  }
  return (
    <>
        <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} color={color} buttonPressed={buttonPressed} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          {/* <TextForm heading = "Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/> */}
          {/* <About/> */}
      </div>
        </Router>
    </>
  );
}

export default App;
