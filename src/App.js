import './App.css';
import React, {useState} from 'react';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]= useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (msg,type)=>{
    setalert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggle = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#002540';
      showalert("Dark Mode enabled successfully.","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode enabled successfully.","success");
    }
  }
  return (
    <>
    <Router >

    <Switch>
          <Route exact path="/about">
            <Navbar title="React Course" aboutactive="active"  mode={mode} toggle={toggle}/>
          <Alerts alert={alert} />
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
              <Navbar title="React Course" homeactive="active" mode={mode} toggle={toggle}/>
              <Alerts alert={alert} />
              <ContactForm contacth1="Enter your message"mode={mode} showalert={showalert}/>
           </Route>
        </Switch>
 <div className="container my5">
 </div>
  
    </Router>
  </>
   
  );
}

export default App;
