import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PiKeyReturnLight as Return } from "react-icons/pi";

function EditData() {
  const newCarObject = {};
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const existingUsers = JSON.parse(localStorage.getItem("userInfo"));

  const indexToUpdate = existingUsers.findIndex(
    (item) => item.userRegister === currentUser
  );
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const currentTableKeys = Object.keys(userInfo[0].table[0]);

  const { itemIndex } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < currentTableKeys.length; i++) {
      if (event.target[currentTableKeys[i]].value.trim() === "") {
        alert("No empty values please...");
        return;
      }
      newCarObject[currentTableKeys[i]] =
        event.target[currentTableKeys[i]].value.trim();
    }
    // edit the item and save it to the local storage
    existingUsers[indexToUpdate].table[itemIndex] = newCarObject;

    localStorage.setItem("userInfo", JSON.stringify([...existingUsers]));

    alert("Your item edited successfully!");

    goHome();
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="bg-[#FEF7FF] text-center p-4 text-[3vh]  text-[#9B89B3] min-h-screen">
        <div
          onClick={goHome}
          className="text-5xl text-[#eba743] hover:bg-[#fefffb] hover:rotate-12 ml-[82vw] mr-[10vw] justify-end"
        >
          <Return />
        </div>
        <h2 className="font-bold">Edit Data</h2>
        <div className="font-semibold flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="shadow-btn-shadow rounded-md border-2 border-[#845EC2] pr-5 m-2 max-w-[60vw] min-w-[40vw]"
          >
            {currentTableKeys.map((tableLabel, index) => (
              <div
                className="rounded-md text-center m-2 flex flex-col"
                key={index}
              >
                {tableLabel}
                <input
                  className="font-normal m-2 w-full h-[6vh] border-[#9B89B3] bg-[#FEFEDF] outline-none"
                  type="text"
                  name={tableLabel}
                  placeholder={`  ${existingUsers[indexToUpdate].table[itemIndex][tableLabel]}`}
                ></input>
              </div>
            ))}
            <input
              className="rounded-md m-2 p-2 border-2 border-[#9B89B3] bg-[#f5f5eb] hover:bg-[#FEFEDF]"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default EditData;
