
// import {Paragraph,Paragraph2} from "./Paragraph.jsx";here we importing the many funtion form ..
import  Paragraph  from "./Paragraph.jsx";// If we Exporting the 2 and import only then its not possible
function ProductTab(){
    let argu=[<li>"hey "</li>,<li>"man "</li>,"what's ","in ","your ","mind."];
    //here is the first way to send the array element in form of arraylist
    return(
        <>
        <Paragraph para={argu}></Paragraph>
        <Paragraph para2={["hello ","boy "]}/> {/*here is passing the argument array with inline */}
        {/* <Paragraph2 /> this will also create problem if it is not in use */}
        </>
    );
}
export default ProductTab;