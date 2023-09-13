import { useState } from 'react';
import doorImage from '/doors.jpg';
import Register from './Components/Register';
import Login from './Components/Login';
import Interior from './Components/Interior';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  let homeProp = JSON.parse(localStorage.getItem("currentUser"));
  console.log(homeProp[0], "home0");
  return (
    <>
    <Router>
      <Routes>
        <Route path="/register" element={<Register></Register>}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/home" element={ homeProp[0] !== undefined ? <Interior username={homeProp}></Interior> : <div>Error</div>}>
        </Route>
      </Routes>
    </Router>
    </> 
  )
}
export default App;
