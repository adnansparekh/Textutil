import './App.css';
import Alert from './component/Alert';
 import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import {
    BrowserRouter ,
    Route,
    Routes
} from "react-router-dom";



function App() {
     const [mode, setMode] = useState("light");
     const [alert, setAlert] = useState(null)


     const showAlert = (message, type) => {
          setAlert({
               msg: message,
               type: type
          })
          setTimeout(() => {
               setAlert(null)
          }, 1500)
     }

     const toggleMode = () => {
          if (mode === "light") {
               console.log("light ")
               setMode("dark");
               document.body.style.backgroundColor = "grey" //#042743
               showAlert("Dark Mode has been Enabled", "success")
          }
          else {
               setMode("light");
               document.body.style.backgroundColor = "white"
               showAlert("Light Mode has been enabled", "success")
          }
     }


     return (


    
          <>
          <BrowserRouter>

               <Navbar title="TextUtil" aboutText="About Us" mode={mode} togglemode={toggleMode} />
               <Alert alert={alert} />
               <div className='container'    >
         <Routes>

              <Route exact path='/about' element={<About showAlert = {showAlert}/>}> </Route>
             <Route exact path='/' element={ <Textform showAlert={showAlert} heading="Text Analyzer"  />}></Route>

               </Routes>
               </div>
               </BrowserRouter>
          </>

      );
}

export default App;


