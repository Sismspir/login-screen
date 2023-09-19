import opened from "/opened.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line as Delete } from "react-icons/ri";
import axios from "axios";

function Interior(props) {
  const navigate = useNavigate();
  // get the saved table
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const existingUsers = JSON.parse(localStorage.getItem("userInfo"));
  const indexToUpdate = existingUsers.findIndex(
    (item) => item.userRegister === currentUser
  );
  const [fetchedData, setFetchedData] = useState([
    "table" in JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate]
      ? JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate].table
      : [],
  ]);
  const { updateUser } = props;
  const buttonStyle =
    "m-2 rounded-full text-slate-800 text-xl font-medium w-[8rem] h-[3.5rem] hover:bg-violet-100 bg-sky-100 border-[0.15rem] border-slate-400";

  console.log(
    "Intirior rendered",
    "afto pou kanei map o kodikas => ",
    fetchedData
  );
  const logOut = () => {
    localStorage.setItem("currentUser", JSON.stringify(null));
    updateUser(null);
    navigate("/login");
  };

  const Register = () => {
    navigate("/register");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("./src/data/MOCK_DATA.json");
      setFetchedData(response.data);
      console.log(
        "ta data pou odws fenode apo to request",
        response.data,
        "ta data pou den fenode apo to local storage",
        JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate].table
      );
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = async () => {
    setFetchedData([]);
  };

  const handleDelete = (position) => {
    //update the table
    const updatedArray = [...fetchedData];
    const filteredArray = updatedArray.filter((_, index) => index !== position);
    setFetchedData(filteredArray);
    // update the local storage
    // let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // let existingUsers = JSON.parse(localStorage.getItem("userInfo"));
    // const indexToUpdate = existingUsers.findIndex(
    //   (item) => item.userRegister === currentUser
    // );
    existingUsers[indexToUpdate].table = fetchedData;
    localStorage.setItem("userInfo", JSON.stringify(existingUsers));
    console.log("aaaa", existingUsers);
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
        <div className="text-center w-full self-end border border-b-2 bg-slate-100 opacity-95">
          <button onClick={Register} className={buttonStyle}>
            Register
          </button>
          <button onClick={fetchData} className={buttonStyle}>
            Fetch Data
          </button>
          <button onClick={clearData} className={buttonStyle}>
            Clear Data
          </button>
          <button onClick={logOut} className={buttonStyle}>
            Log Out
          </button>
        </div>
        <p className="text-center rounded-full self-center w-[30%] h-[4rem] border-2 border-slate-400 font-sm opacity-90 p-2 mt-4 text-4xl bg-sky-100">
          Hello {JSON.parse(localStorage.getItem("currentUser"))} !!
        </p>
        <table className="m-10 opacity-95">
          <thead>
            <tr className="text-center border border-spacing-2 border-slate-600 table-auto bg-slate-200  ml-8 mr-8 mt-40">
              <th className="border border-lines border-slate-600">makname</th>
              <th className="border border-lines border-slate-600">
                typnatcode
              </th>
              <th className="border border-lines border-slate-600">modname</th>
              <th className="border border-lines border-slate-600">delete</th>
            </tr>
          </thead>
          <tbody>
            {fetchedData.map((car, index) => (
              <tr
                className="text-center border border-spacing-2 border-slate-600 table-auto bg-slate-100  ml-8 mr-8 mt-40"
                key={car.id}
              >
                <td className="border border-lines border-slate-600">
                  {car.makname}
                </td>
                <td className="border border-lines border-slate-600">
                  {car.typnatcode}
                </td>
                <td className="border border-lines border-slate-600">
                  {car.modname}
                </td>
                <button
                  className="text-[#ff0000]"
                  onClick={() => handleDelete(index)}
                >
                  <Delete />
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Interior;
