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

  existingUsers[0].table = [{}];

  if (
    !("table" in JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate])
  ) {
    localStorage.setItem("userInfo", JSON.stringify([...existingUsers]));
  }

  const [fetchedData, setFetchedData] = useState(
    "table" in JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate]
      ? JSON.parse(localStorage.getItem("userInfo"))[indexToUpdate].table
      : []
  );

  // prints the keys of the 1st object
  const dataKeysList = [];
  for (let keys in fetchedData[0]) {
    dataKeysList.push(keys);
    console.log(keys);
  }
  // prints the values of the 4th object
  for (let values in fetchedData[0]) {
    console.log("these are the values :", values, fetchedData[4][values]);
  }

  const { updateUser } = props;
  const buttonStyle =
    "m-2 rounded-full text-slate-800 text-xl font-medium w-[8rem] h-[3.5rem] hover:bg-green-100 bg-slate-100 border-[0.15rem] border-slate-400";

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
        <div className="text-center w-full self-end border border-b-2 bg-stone-200 opacity-95">
          <button onClick={addData} className={buttonStyle}>
            Add data
          </button>
          <button onClick={fetchData} className={buttonStyle}>
            Fetch Data
          </button>
          <button onClick={clearData} className={buttonStyle}>
            Clear Data
          </button>
          <button onClick={Register} className={buttonStyle}>
            Register
          </button>
          <button onClick={logOut} className={buttonStyle}>
            Log Out
          </button>
        </div>
        <div className="text-center rounded-full self-center border-2 border-slate-400 font-sm opacity-90 p-6 mt-4 text-4xl bg-stone-100">
          Hello {JSON.parse(localStorage.getItem("currentUser"))} !!
        </div>
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
      </div>
    </>
  );
}

export default Interior;
