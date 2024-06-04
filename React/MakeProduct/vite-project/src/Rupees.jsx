export default function Rupees({oldprice,newprice}){
    let oldstyle={
        textDecorationLine:"line-through"
    }
    let newstyle={
        fontWeight:"bold",
    }
    let style={
        heigt:"30px",
        backgroundColor:"brown",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
    return(
        <>
            <div style={style}>
            <span style={oldstyle}>{oldprice}</span>
            &nbsp;&nbsp;
            <span style={newstyle}>{newprice}</span>
            </div>
        </>
    )
}