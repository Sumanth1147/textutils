
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert(
      {
        msg: message,
        type: type
      })
      setTimeout( () => {
        setAlert(null);
      } , 1500);
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
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("background color changed", "success");
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("background color changed", "success");
    }
  }


  return (
    <>
     <Router>
        <Navbar title="TextUtils-App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
             exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
