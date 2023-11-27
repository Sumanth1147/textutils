
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
  const[alert, setAlert] = useState(null)

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

  

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils-Dark Mode';
    } else{
      setMode('light');
      // document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
     <Router>
        <Navbar title="TextUtils-App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
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
