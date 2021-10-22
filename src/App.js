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
    // document.body.classList.add("border-2px")
    // cls.target.style.border = "5px";
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    } else  {
      setmode('dark')
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enabled", "success")


    }
  }

  function buttonPressed(color) {
    // setColor(color);
    // document.body.style.backgroundColor = color;
    // setmode('light');
  }
  return (
    <>
        <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  buttonPressed={buttonPressed} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About mode={mode}/>
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
