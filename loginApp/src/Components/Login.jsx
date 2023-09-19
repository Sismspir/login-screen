import doorImage from "/doors.jpg";
import { GrDiamond as Diamond } from "react-icons/gr";
import Svg from "./Svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(props) {
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
  const { updateUser } = props;

  useEffect(() => {
    console.log("first time");
    return () => {
      console.log("leaving login");
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    //checks if both username and pass are provided
    if (event.target.logUser.value == "" || event.target.logPass.value == "") {
      console.log("Please enter both username and password!");
    } else {
      //gets users from local storage
      let temp = JSON.parse(localStorage.getItem("userInfo"));
      //checks if users are empty (null)
      let existingUsernames =
        temp === null ? [] : temp.map((user) => user.userRegister);
      let registeredUsers = JSON.parse(localStorage.getItem("userInfo"));
      //if the username exists in users
      if (existingUsernames.includes(event.target.logUser.value)) {
        //find his pass and check if it matches
        let target = registeredUsers.find(
          (propers) => propers.userRegister === event.target.logUser.value
        );
        if (target.passRegister === event.target.logPass.value) {
          console.log("user is logged in successfully");
          localStorage.setItem(
            "currentUser",
            JSON.stringify(event.target.logUser.value)
          );
          updateUser(event.target.logUser.value);
          handleNavigateHome();
        } else {
          console.log("wrong password");
        }
      } else {
        console.log("Username does not exist");
      }
    }
  };

  const handleNavigateHome = () => {
    navigate("/home");
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <>
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
          <form className="z-10" onSubmit={handleLogin}>
            <div
              className="flex justify-center mt-10"
              style={{ color: "blue" }}
            >
              <Diamond onClick={() => handleNavigate()} size={52} />
            </div>
            <div className="text-2xl font-medium m-2 text-white"> Login </div>
            <input
              placeholder="  Username"
              className="h-10 w-80 flex justify-center my-8 placeholder-gray-500"
              type="text"
              name="logUser"
              key="login-input"
            />
            <input
              placeholder="  Password"
              className="h-10 w-80 flex justify-center my-8 placeholder-gray-500"
              type="text"
              name="logPass"
              key="login-passwrd"
            />
            <input
              className="text-white w-80 border-2 border-white bg-pink-btn pt-1.5 pb-1.5 mt-2 mb-6"
              type="submit"
              value="LOGIN"
            />
            <div className="mt-2 mb-8 text-xs font-medium m-2 text-white">
              {" "}
              FORGOT PASSWORD...?{" "}
            </div>
            <div className="text-2xl font-medium m-2 text-white">
              {" "}
              Or Sign Up With{" "}
            </div>
            <div className="flex space-x-4">
              <Svg className={fbClass} path={fbPath}></Svg>
              <Svg className={twitterClass} path={twitterPath}></Svg>
              <Svg className={pintClass} path={pintPath}></Svg>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
