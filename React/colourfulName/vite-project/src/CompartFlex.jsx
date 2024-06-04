import Compart from "./Compart"
function CompartFlex(){
    let discription1="This is the fruits compartment."
    let discription2="This is the vegetable compartment."
    let discription3="This is the Flowers compartment."
    return(
        <div style={{display:"flex" }}>
            <Compart heading="Fruits" discription={discription1} price="200-400"/>
            <Compart heading="Vegetable" discription={discription2} price="40-250"/>
            <Compart heading="Flowers" discription={discription3} price="200-800"/>
        </div>
    )
}

export default CompartFlex;