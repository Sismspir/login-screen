import opened from '/opened.jpg';
import {useNavigate} from 'react-router-dom';

function Interior(props) {
    const navigate = useNavigate();
    console.log("Intirior rendered")
    const logOut = () => {
        localStorage.setItem("currentUser", JSON.stringify([]))
        // console.log(JSON.parse(localStorage.getItem("currentUser"))[0])
        navigate('/login');

    };

    return(
        <>
        <div className="max-h-full flex flex-row h-screen box-border [ui-sans-serif] text-lg" style={{backgroundImage: `url(${opened})`,  backgroundSize:"cover", backgroundRepeat: "no-repeat",backgroundColor: "black"}}>
        <   button onClick={logOut} className='w-[15%] bg-sky-100 border-2 border-slate-600 max-h-[5%]'>Log Out</button>
            <p className='mx-auto border border-slate-800 opacity-70 p-2 max-h-[8%] max-w-[50%] text-5xl bg-slate-300'>Hello {props.username} !!</p>
        </div>
        </>
);
}

export default Interior;