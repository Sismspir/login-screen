import { GrDiamond as Diamond } from "react-icons/gr";
import doorImage from "/doors.jpg";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const fbClass = "text-white h-5 mt-4 mb-14 ml-28";
  const fbPath =
    "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z";
  const twitterClass = "text-white h-5 mt-4 mb-14";
  const twitterPath =
    "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z";
  const pintClass = "text-white h-5 mt-4 mb-14";
  const pintPath =
    "M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const [successfullRegister, setSuccessfulRegister] = useState("no message");
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      e.target.userRegister.value == "" ||
      e.target.passRegister.value == "" ||
      e.target.passAgain.value == ""
    ) {
      console.log("Please enter both username and password!");
      setSuccessfulRegister("error");
      setErrorMessage("Please enter both username and password!");
    } else if (e.target.passRegister.value != e.target.passAgain.value) {
      console.log("Wrong password is given..");
      setSuccessfulRegister("error");
      setErrorMessage("Wrong password is given..");
    } else {
      //if at least one user exists
      let temp =
        localStorage.getItem("userInfo") != ""
          ? JSON.parse(localStorage.getItem("userInfo"))
          : [];
      let existingUsernames =
        temp === null ? [] : temp.map((user) => user.userRegister);
      //register the user if the username is unique
      if (existingUsernames.includes(e.target.userRegister.value)) {
        console.log("username already exists");
        setSuccessfulRegister("error");
        setErrorMessage("username already exists");
      } else {
        //create an empty object to store the users
        const newUsers = temp === null ? [] : temp;
        newUsers.push({
          userRegister: e.target.userRegister.value,
          passRegister: e.target.passRegister.value,
        });
        //save user info on the local storage
        localStorage.setItem("userInfo", JSON.stringify(newUsers));
        setErrorMessage("");
        console.log("user is registered successfully");
        console.log("existing users:", newUsers);
        setSuccessfulRegister("success");
      }
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div
      className="h-full flex flex-col items-center justify-center box-border [ui-sans-serif] text-lg bg-center text-center px-20"
      style={{
        backgroundImage: `url('${doorImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <h1 className="mt-10 mb-14 text-5xl text-white">
        STUNNING SIGN UP & LOGIN FORM
      </h1>
      <div className="pl-10 pr-10 pt-4 pb-12 max-w-4xl relative shadow-btn-shadow rounded-md flex justify-center m-2">
        <div className="absolute inset-0 opacity-40 bg-white"></div>
        <form className="relative z-10" onSubmit={handleRegister}>
          <div className="flex justify-center mt-4">
            <Diamond onClick={() => handleNavigate()} size={52} className="" />
          </div>
          <div className="text-2xl font-medium m-2 text-white"> Sign Up </div>
          <input
            placeholder="  Username"
            className="outline-none h-10 w-80 flex justify-center my-8 placeholder-gray-500"
            type="text"
            name="userRegister"
            key="register-input"
          />
          <input
            placeholder="  Password"
            className="outline-none h-10 w-80 flex justify-center my-8 placeholder-gray-500"
            type="password"
            name="passRegister"
            key="register-pass"
          />
          <input
            placeholder="  Password Again"
            className="outline-none h-10 w-80 flex justify-center my-8 placeholder-gray-500"
            type="password"
            name="passAgain"
            key="pass-again"
          />
          <input
            className="text-white w-80 border-2 border-white bg-pink-btn pt-1.5 pb-1.5 mt-2 mb-6"
            type="submit"
            value="SIGN UP"
          />
          <div className="text-2xl font-medium m-2 text-white">
            {" "}
            Or Log In With{" "}
          </div>
          <div className="flex space-x-4">
            <Svg className={fbClass} path={fbPath}></Svg>
            <Svg className={twitterClass} path={twitterPath}></Svg>
            <Svg className={pintClass} path={pintPath}></Svg>
          </div>
          {successfullRegister === "error" ? (
            <div className="absolute border rounded-2xl  -mt-12 pt-2 pb-5 bg-[#ff4f4b] text-2xl font-medium text-white opacity-80">
              {errorMessage}
            </div>
          ) : successfullRegister === "success" ? (
            <div className="absolute border rounded-2xl -mt-12 pt-2 pb-5 h-22 bg-[#85ff7a] text-2xl font-medium text-white opacity-80">
              You have registered successfully!
            </div>
          ) : (
            <div></div>
          )}
        </form>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
export default Register;
