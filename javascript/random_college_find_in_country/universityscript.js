let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let list=document.querySelector("ul");
    let input=document.querySelector("input");
    console.log(input.value);
    let college=await getcollege(url+input.value);
    listofcollege(college);
});

function listofcollege(college){
    let ul=document.querySelector("ul");
    ul.innerText="";
    for(collarr of college){
        let li=document.createElement("li");
        li.innerText=collarr.name;
        ul.appendChild(li);
    }
}

async function getcollege(value){
    try{
        let res=await axios.get(value);
        return res.data;
    }catch(err){
        console.log("erroe occur",err);
        return "Not Found";
    }
}