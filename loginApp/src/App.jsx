import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Interior from "./Components/Interior";
import Error from "./Components/Error";
import Home from "./Components/Home";
import AddData from "./Components/AddData";
import EditData from "./Components/EditData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [curUser, setCurUser] = useState(
    localStorage.getItem("currentUser") !== ""
      ? JSON.parse(localStorage.getItem("currentUser"))
      : ""
  );

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/edit/:itemIndex"
            element={
              curUser != null && curUser != "" ? <EditData /> : <Error />
            }
          ></Route>
          <Route
            path="/add"
            element={curUser != null && curUser != "" ? <AddData /> : <Error />}
          ></Route>
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
