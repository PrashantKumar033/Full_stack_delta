let url="https://catfact.ninja/fact";

// here is the code for the get random fact 

let btn=document.getElementById("output");
btn.addEventListener("click",async()=>{
    let res= await getfact();
    let p=document.querySelector("p");
    p.innerText=res;
});
async function getfact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        return "Not found";
    }
}

// here is the code for the get random dog image 
let url2="https://dog.ceo/api/breeds/image/random";

let btn1=document.getElementById("image");
btn1.addEventListener("click",async()=>{
    let imgres=await getImage();
    let newimage=document.querySelector("img");
    newimage.setAttribute("src",imgres);
})

// here now we solving by using the axios for direct json format data
async function getImage(){
    try{
        let res= await axios.get(url2);
        return res.data.message;
    }
    catch(err){
        console.log(err);
        return "Not found";
    }
}






// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return data=res.json();
// })
// .then((data)=>{
//     console.log("data1:",data);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2:",data2);
// })
// .catch((err)=>{
//     console.log(err);
// });




// async function getfetch(){
//     try{
//         let res= await fetch(url);
//         console.log(res);
//         let data=await res.json();
//         console.log(data);

//         let res2= await fetch(url);
//         console.log(res2);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }
//     catch(err){
//         console.log(err);
//     }


// }





// let h1=document.querySelector("h1");

// function colorchange(color,delay){
//     return new Promise ((resolve,reject)=>{
//         let randomnum=Math.floor(Math.random()*5)+1;
//         if(randomnum>2){
//         setTimeout(() => {
//             h1.style.color=color;
//             resolve("color changed");
//         }, delay);
//     }else{
//         reject("weak connection");
//     }
//     })
// }

// colorchange("purple",2000)
// .then(()=>{
//     console.log("purple color was changed");
//     colorchange("green",2000);
// })
// .then(()=>{
//     console.log("green color was cahnged");
//     colorchange("blue",1000);
// })
// .then(()=>{
//     console.log("blue color is changed");
// });
//here no reuire to use of the catch because the funsction will definetaily execute

// let h1=document.querySelector("h1");

// function colorchange(color,delay){
//     return new Promise(resolve,reject)(()=>{
//         let num=Math.floor(Math.random()*5)+1;
//         setTimeout(() => {
//             if(num>2){
//                 h1.style.color=color;
//                 resolve("color changed");
//             }
//         }, delay);
//     })
// }

// async function delay(){
//     await colorchange("yellow",2000);
//     colorchange("blue",2000);
//     colorchange("green",2000);
//     colorchange("orange",2000);
// }