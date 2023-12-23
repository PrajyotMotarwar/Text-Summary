import { useState } from "react";
import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import About from "./Component/About";
import Alert from "./Component/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtiles"  mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact="true" path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact="true" path="/" element={<Textform heading="Entre the text for analyze"mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;