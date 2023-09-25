import opened from "/opened.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit as Edit } from "react-icons/Ai";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";
import { PiKeyReturnLight as Return } from "react-icons/pi";
import axios from "axios";

function Interior(props) {
  const navigate = useNavigate();
  // get the saved table
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const existingUsers = JSON.parse(localStorage.getItem("userInfo"));
  const [resetIsShown, setResetIsShown] = useState(false);
  const indexToUpdate = existingUsers.findIndex(
    (item) => item.userRegister === currentUser
  );
  const { updateUser } = props;
  const buttonStyle =
    "m-2 rounded-full text-slate-800 text-xl font-medium w-[8rem] h-[3.5rem] hover:bg-green-100 bg-[#D9F2FD] border-[0.15rem] border-slate-400";

  // Case: table does not exist. Create table for user and store into storage.
  if (!("table" in existingUsers[indexToUpdate])) {
    existingUsers[indexToUpdate].table = [
      {
        typnatcode: undefined,
        makname: undefined,
        modname: undefined,
        makvehtype: undefined,
      },
    ];
    console.log("that goes in the local storage", existingUsers.indexToUpdate);
    localStorage.setItem("userInfo", JSON.stringify([...existingUsers]));
  }
  // create a state variable which keeps the table AND is mapped on the screen
  const [fetchedData, setFetchedData] = useState(
    "table" in existingUsers[indexToUpdate]
      ? existingUsers[indexToUpdate].table
      : []
  );

  useEffect(() => {
    console.log("fetchedData right now", fetchedData);
    existingUsers[indexToUpdate].table = fetchedData;
    localStorage.setItem("userInfo", JSON.stringify([...existingUsers]));
  }, [fetchedData]);

  const dataKeysList = [];
  for (let keys in fetchedData[0]) {
    dataKeysList.push(keys);
  }

  const logOut = () => {
    localStorage.setItem("currentUser", JSON.stringify(null));
    updateUser(null);
    navigate("/login");
  };

  const Reset = () => {
    setResetIsShown(!resetIsShown);
  };

  //remove duplicates function
  const removeDuplicates = (arrOfObjs) => {
    const newSet = new Set();

    return arrOfObjs.filter((obj) => {
      const key = JSON.stringify(obj);

      if (!newSet.has(key)) {
        newSet.add(key);
        return true;
      }
      return false;
    });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("./src/data/MOCK_DATA.json");
      let tempData = [...fetchedData, ...response.data];
      setFetchedData(removeDuplicates(tempData));
    } catch (error) {
      console.log(error);
    }
  };

  const addData = () => {
    navigate("/add");
  };

  const clearData = async () => {
    setFetchedData([]);
  };

  const handleDelete = (position) => {
    //update the table
    const updatedArray = [...fetchedData];
    const filteredArray = updatedArray.filter((_, index) => index !== position);
    setFetchedData(filteredArray);
    existingUsers[indexToUpdate].table = filteredArray;
    localStorage.setItem("userInfo", JSON.stringify(existingUsers));
  };

  const handleEdit = (position) => {
    navigate(`/edit/${position}`);
    console.log("edited item in position:", fetchedData[position]);
  };

  const handleReset = (event) => {
    event.preventDefault();
    if (event.target.resetPass.value !== event.target.newPass.value) {
      alert("Passwords are different.");
      return;
    }

    if (event.target.resetPass.value.length < 3) {
      alert("Password too short!");
      return;
    }

    existingUsers[indexToUpdate].passRegister = event.target.newPass.value;

    localStorage.setItem("userInfo", JSON.stringify(existingUsers));
    setResetIsShown(!resetIsShown);
    alert("Password changed successfully!");
  };

  return (
    <>
      <div
        className="max-h-full flex flex-col h-screen box-border [ui-sans-serif] text-lg"
        style={{
          backgroundImage: `url(${opened})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
      >
        <div className="shadow-btn-shadow text-center w-full self-end border border-b-2 bg-[#f3f6f7] opacity-95">
          <button onClick={addData} className={buttonStyle}>
            Add data
          </button>
          <button onClick={fetchData} className={buttonStyle}>
            Fetch Data
          </button>
          <button onClick={clearData} className={buttonStyle}>
            Clear Data
          </button>
          <button onClick={Reset} className={buttonStyle}>
            Reset Pass
          </button>
          <button onClick={logOut} className={buttonStyle}>
            Log Out
          </button>
        </div>
        <div className="text-center rounded-full self-center border-2 border-slate-400 font-sm opacity-90 p-6 mt-4 text-4xl bg-stone-100">
          Hello {JSON.parse(localStorage.getItem("currentUser"))} !!
        </div>
        {!resetIsShown ? (
          <table className="m-10 opacity-95">
            <thead>
              <tr className="text-center border border-slate-600 table-auto bg-slate-200">
                {dataKeysList.map((key) => (
                  <th
                    className=" border border-spacing-2 border-slate-600"
                    key={key}
                  >
                    {key}
                  </th>
                ))}
                <th className="border border-lines border-slate-600">edit</th>
                <th className="border border-lines border-slate-600">delete</th>
              </tr>
            </thead>
            <tbody>
              {fetchedData.map((car, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 == 0
                      ? "text-center border border-slate-600  bg-slate-100"
                      : "text-center border border-slate-600  bg-stone-200"
                  }
                >
                  {dataKeysList.map((key) => (
                    <td
                      key={key}
                      className="border border-lines border-slate-600"
                    >
                      {car[key]}
                    </td>
                  ))}
                  <td className="border border-lines border-slate-600">
                    <button
                      className="border  text-[#5dd8f7]"
                      onClick={() => handleEdit(index)}
                    >
                      <Edit />
                    </button>
                  </td>
                  <td>
                    <button
                      className="text-[#ff0000]"
                      onClick={() => handleDelete(index)}
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <form
            onSubmit={handleReset}
            className="shadow-btn-shadow flex items-center flex-col my-20 border-2 border-[#344A53] bg-[#79AEC1]"
          >
            <div
              onClick={() => {
                setResetIsShown(!resetIsShown);
              }}
              className="text-5xl text-[#ce4343] hover:rotate-12 ml-[82vw] mr-[0vw] justify-end"
            >
              <Return />
            </div>
            <div className="mb-4 text-slate-800 text-xl font-medium">
              Type your new password here
            </div>
            <input
              className="outline-none h-10 w-80 my-4 placeholder-gray-500"
              name="newPass"
              placeholder="  Password"
              type="password"
            ></input>
            <input
              className="outline-none h-10 w-80 my-4 placeholder-gray-500"
              name="resetPass"
              placeholder="  Password again"
              type="password"
            ></input>
            <button type="submit" className={buttonStyle}>
              Reset
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Interior;
