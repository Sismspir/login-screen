import Register from "./Components/Register";
import Login from "./Components/Login";
import Interior from "./Components/Interior";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  console.log(localStorage.getItem("currentUser") === undefined);
  let homeProp =
    localStorage.getItem("currentUser") === ""
      ? ""
      : JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<div>Hello World</div>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/home"
            element={homeProp != "" ? <Interior /> : <div>Error</div>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
