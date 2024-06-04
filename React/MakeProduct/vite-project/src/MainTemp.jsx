
import Template from "./Template";

export default function MainTemp(){
    let styles={
        // display: "flex",
        justifyContent:"center",
        height:"190px",
    }
    let title=["Book Store","Fruits Store","Phone Dept.","Kirana Store"];
    let discription=[
        ["This is book department","here you can compensate"],
        ["This is Fruits department","here you can Buy fruits"],
        ["This is Phone department","here you can buy Mobile"],
        ["This is Kirana store","here you can buy Domestic things"]];

    return(
        <>
            <div style={{display:"flex",margin:"auto"}}>
                <Template title={title} discription={discription} idx={0}></Template>
                <Template title={title} discription={discription} idx={1}></Template>
                <Template title={title} discription={discription} idx={2}></Template>
                <Template title={title} discription={discription} idx={3}></Template>
            </div>
        </>
    )
}