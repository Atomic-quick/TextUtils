// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type  
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  };
  const toggleMode = ()=>{
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled !", "success")
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been enabled !", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Aditya Roy" AnotherAction="Another action"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about"> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          <About/>
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
