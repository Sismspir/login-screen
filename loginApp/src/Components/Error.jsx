import error from "/error.jpg";
import { useParams } from "react-router-dom";

function Error(props) {
  const { path } = useParams();
  const { currentUser } = props;
  console.log("we are in error.jsx", currentUser);
  return (
    <>
      <div
        className=" text-white text-8xl h-full flex flex-col items-center justify-center box-border [ui-sans-serif] text-lg bg-center text-center px-20"
        style={{
          backgroundImage: `url('${error}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <div className="text-[6vh] font-medium mt-80 opacity-60 text-red-200">
          {currentUser !== undefined && path != "Error" ? (
            <h2>
              Path <br /> <br />
              {path} <br /> <br />
              does not exist!
            </h2>
          ) : currentUser === undefined || currentUser === null ? (
            <p>You have to log in first...</p>
          ) : (
            <p>What are you doing here?</p>
          )}
        </div>
      </div>
    </>
  );
}
export default Error;
