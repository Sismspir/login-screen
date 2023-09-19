import Register from "./Components/Register";
import Login from "./Components/Login";
import Interior from "./Components/Interior";
import Error from "./Components/Error";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [curUser, setCurUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  console.log("current user is", curUser);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/login"
            element={<Login updateUser={setCurUser} />}
          ></Route>
          <Route
            path="/home"
            element={
              curUser != null ? <Interior updateUser={setCurUser} /> : <Error />
            }
          ></Route>
          <Route
            path="/:path"
            element={<Error currentUser={curUser} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
