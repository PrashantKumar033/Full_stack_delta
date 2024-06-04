import "./Paragraph.css";

function Paragraph({para2,para}){
    let arr=["hello ","man ","what's ","you ","doing."];
    // let mapPara=para2.map((pa)=>{<li>{pa}</li>});
    const mapArr=arr.map((ar)=><li>{ar}</li>);
    return (
    <div className="Paragraph">
        <h1>hello,Miss { "priya"}</h1>
        <h2>this is{para2}</h2>
        <h3>you know {para}</h3>
        <p>here is array:{mapArr}</p>

    </div>
    );
};

function Paragraph2(){
    return(
    <>
        <h3>Here is the 2nd Paragraph we can also export multi vlaue</h3>
        <h2>{/* <>this is only used to return multi things and not want to create any 
        extra tag or component cause by default we can return single vaule only</> */}</h2>
    </>
    );
}

// here we are exporting the multi function 
// export {Paragraph,Paragraph2}

export default Paragraph;
