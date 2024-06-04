
import Rupees from "./Rupees";


// const style = {
//     border: "2px solid white",
//     borderRadius: "14px",
// };

export default function Template({title,discription,idx}){
    let style = {
        justifyContent: "center",
        alignItems: "center",
        margin:"7px",
        border:"2px solid white",
        borderRadius:"14px",
    };
    let oldprice=["235","5,236","23,512","2,625"];
    let newprice=["343","3,34","33,211","4,311"];
    return(
        <>
            <div style={style}>
                <h4>{title[idx]}</h4>
                <p>{discription[idx][0]}</p>
                <p>{discription[idx][1]}</p>
                <Rupees oldprice={oldprice[idx]} newprice={newprice[idx]}></Rupees>
            </div>
        </>
    )
}