import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, //switch is now changed to routes after v6
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] =useState('light') //DarkMode
  const [alert, setAlert] = useState(null); //Alert

  //For dark mode toggle
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  //For alert message
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  return (
    <>
    <Router>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutText="who we are?" showAlert={showAlert}/>
      <Alerts alert={alert} />
      <div className="container my-3 ">
        <Routes>
          <Route exact path="/About" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForms heading= "Enter your text here" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
