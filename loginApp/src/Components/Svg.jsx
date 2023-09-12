
function Svg(props) {
    return(
    <>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        fill="currentColor"
        viewBox="0 0 24 24">
        <path
        d={props.path}/>
    </svg>
    </>
)}
export default Svg;