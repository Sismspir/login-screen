import opened from '/opened.jpg';

function Interior(props) {
        const logOut = () => {
            props.setLogin(false);
    };
    return(
        <>
        <div className="flex flex-col  h-screen box-border [ui-sans-serif] text-lg bg-center text-center" style={{backgroundImage: `url(${opened})`,  backgroundSize:"cover", backgroundRepeat: "no-repeat",backgroundColor: "black"}}>
            <h2 className='mb-2 text-5xl bg-slate-200'>Hello {props.username} !!</h2>
            <button onClick={logOut} className='bg-slate-200 border-2 border-slate-950'>Log Out</button>
        </div>
        </>
);
}

export default Interior;