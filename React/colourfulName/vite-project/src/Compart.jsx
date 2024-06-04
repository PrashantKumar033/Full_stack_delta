function Compart({heading,discription,price}){
    let style={marginRight:"15px",border:"2px solid white" ,padding:"10px"};
    return (
        <>
        <div style={style}>
        <div style={{marginBottom:"50px"}}>
            <h3>{heading}</h3>
            <p>{discription}</p>
        </div>
        <div>Price range:{price}</div>
        </div>
        </>
    )
}

// function Compart(props) {
//     return (
//     <>
//         <div>
//             <h3>{props.heading}</h3>
//             <p>{props.discription}</p>
//         </div>
//         <div>Price range: {props.price}</div>
//         </>
//     );
// }

export default Compart;