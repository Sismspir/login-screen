import { useState, useEffect } from 'react';
import './App.css';

function App() {

  //login form
  const [openLogin, setOpenLogin] = useState(true);
  // register form
  const [userInfo, setUserInfo] = useState([]);
  // unique id
  const [userId, setUserId] = useState(0);
 
  const handleLogin = (event) => {
    event.preventDefault();
    if(event.target.logUser.value == "" || event.target.logPass.value == ""){
      console.log("Please enter both username and password!")
    } else {

      let temp =  JSON.parse(localStorage.getItem("userInfo"));
      let existingUsernames = temp === null ? [] : temp.map(user => user.userRegister);
      let registeredUsers = JSON.parse(localStorage.getItem("userInfo"));
      //if the username exists in users
      if(existingUsernames.includes(event.target.logUser.value)) {
        //find his pass and check if it matches
        let target = registeredUsers.find(props => props.userRegister === event.target.logUser.value);
        if(target.passRegister === event.target.logPass.value){
          console.log("user is logged in successfully")
        } else {
          console.log("wrong password")
        }
      } else {
        console.log("Username does not exists", );
      }
      
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(e.target.userRegister.value == "" || e.target.passRegister.value == "" || e.target.passAgain.value == ""){
      console.log("Please enter both username and password!");
    } 
    else if(e.target.passRegister.value != e.target.passAgain.value) {
      console.log("Wrong password is given..");
    } 
    else {
      //if at least one user exists
      let temp =  JSON.parse(localStorage.getItem("userInfo"));
      let existingUsernames = temp === null ? [] : temp.map(user => user.userRegister);
      //register the user if the username is unique
      if(existingUsernames.includes(e.target.userRegister.value)) {
        console.log("username already exists")
      } else {
        const newUsers = temp;

        newUsers.push({userRegister: e.target.userRegister.value,
          passRegister: e.target.passRegister.value,
          userId: userId
         })
        
        setUserInfo(newUsers);
        //save user info on the local storage
        localStorage.setItem("userInfo", JSON.stringify(newUsers));
        setOpenLogin(!openLogin);
        
        console.log("user is registered successfully");
         
        console.log("existing users:", newUsers)
      }
      //generates the next user id
      setUserId(userId+1);
    }
  }
  
  const handleClick = () => {
      setOpenLogin(!openLogin);
    }

  return (
    <div className="box-border [ui-sans-serif] text-lg">  
        {openLogin ? (
        <div className="rounded-md bg-slate-100 border-gray-400 border-2 flex flex-column items-center justify-center m-2">
          <form onSubmit={handleLogin}>
            <div className ="text-2xl font-medium"> Login </div>
            <div className="rounded-md border-2 border-slate-400 border-grey-800 column-3 m-2 p-2">
              <label >Login Username </label>
              <input className="rounded-md border-2 border-slate-500" type="text" name="logUser" key="login-input"/>
            </div>
            <div className="rounded-md border-2 border-slate-400 column-3 m-2 p-2">
              <label>Login Password </label>
              <input className="rounded-md border-2  border-gray-500" type="text" name="logPass" key= "login-passwrd"/>
            </div>
            <input className="hover:bg-sky-400 border-2 rounded-md border-gray-800 bg-blue-400 p-2 m-2" type="submit" value="Login"/>
          </form>
        </div> ) 
          :
        <div className="rounded-md bg-slate-100 border-gray-400 border-2 flex flex-column items-center justify-center m-2">
          <form onSubmit={handleRegister}>
              <div className="text-2xl font-medium"> Sign Up </div> 
              <div className="rounded-md border-2 border-slate-400 border-grey-800 column-3 m-2 p-2">
                <label>Username </label>
                <input className="rounded-md border-2 border-slate-500" type="text" name="userRegister" key="register-input"/>
              </div>
              <div className="rounded-md border-2 border-slate-400 column-3 m-2 p-2">
                <label>Password </label>
                <input className="rounded-md border-2 border-slate-500" type="text" name="passRegister" key="register-pass"/>
              </div>
              <div className="rounded-md border-2 border-slate-400 column-3 m-2 p-2">
                <label>Password again </label>
                <input className="rounded-md border-2 border-slate-500"  type="text" name="passAgain"/>
              </div>
              <input className="hover:bg-sky-400 border-2 rounded-md border-gray-800 bg-blue-400 p-2 m-2" type="submit" value="Register"/>
            </form>
        </div>}

        { openLogin ?<button onClick={handleClick} className="hover:bg-sky-200 border-2 rounded-md border-slate-500 bg-blue-200 p-1">Register</button> 
        : <button onClick={handleClick} className="hover:bg-sky-200 border-2 rounded-md border-slate-500 bg-blue-200 p-1">Log in</button> }
    </div> 
  )
}

export default App
