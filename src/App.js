//import logo from './logo.svg';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';
//import React from "react";
//import {
  //BrowserRouter as Router,
  //Route,
  //Routes
//} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
   setalert({message : message,
   type : type});

   setTimeout(() => {
     setalert(null);
   }, 3000);
  }

  const togglemode = ()=>
  {
    if(mode === 'light')
    {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode is Enabled","success");
      document.title = "TextUtils- Dark Mode Enabled";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled","success");
      document.title = "TextUtils- Light Mode Enabled";
     /* setInterval(() => {
        document.title = "Useful Website";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);*/

    }
  }
  return (
    <>
    {/*<Router>*/}
    <Navbar title = "TextUtils" disp ={mode} toggle ={togglemode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
    {/*<Routes>*/}
    {/*<Route exact path="/about" element={<About />} />*/}
    {/*<Route exact path="/" element={<TextForm heading = "Enter the text to analyze" disp ={mode} toggle ={togglemode} showAlert={showAlert}/>} />*/}
    {/*</Routes>*/}
    <TextForm heading = "Enter the text to analyze" disp ={mode} toggle ={togglemode} showAlert={showAlert}/>
    </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
