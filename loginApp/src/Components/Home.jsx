import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickHome = () => {
    navigate("/home");
  };

  const handleClickRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <div
        className="flex flex-col h-[100vh]"
        style={{
          backgroundImage:
            "linear-gradient(79deg, #7439db, #282a91 48%, #f3cfb6)",
        }}
      >
        {/* put your self including your border in the center and flex everything inside you*/}
        <div
          onClick={handleClickLogin}
          className="shadow-btn-shadow font-medium opacity-60 bg-sky-300 p-10 mt-10 border-4 border-sky-200 flex-1 self-center flex items-center
        text-2xl text-slate-900 -rotate-12 transition-opacity duration-200 hover:opacity-75
        transition-transform hover:rotate-12"
        >
          Login
        </div>
        <div
          onClick={handleClickHome}
          className="shadow-btn-shadow font-medium opacity-60 bg-pink-bg p-10 ml-40 border-4 border-sky-200 flex-1 self-start flex items-center
        text-2xl text-sky-900 rotate-6 transition-opacity duration-200 hover:opacity-75
        transition-transform hover:-rotate-12"
        >
          Home
        </div>
        <div
          onClick={handleClickRegister}
          className="shadow-btn-shadow font-medium opacity-60 bg-sky-900 p-10 mb-24 mr-40 border-4 border-sky-200 flex-1 self-end flex items-center
        text-2xl text-sky-100 -rotate-12 transition-opacity duration-200 hover:opacity-75
        transition-transform hover:rotate-12"
        >
          Register
        </div>
      </div>
    </>
  );
}
export default Home;
