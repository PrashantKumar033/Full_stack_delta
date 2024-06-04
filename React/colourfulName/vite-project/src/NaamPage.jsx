import "./NaamPage.jsx";

function NaamPage({name,color}){
    // let style={color: (name=="pizza")?"blue":"green"};
    //or we get color name as paramenter
    let style={color}
    return (
        <>
            <h1 style={style}>This is :{name}</h1>
        </>
    );
};

export default NaamPage;