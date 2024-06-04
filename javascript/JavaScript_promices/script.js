// function savetoDb(data){
//     return new Promise((resolve,reject)=> {
//     let connection=Math.floor(Math.random()*10)+1;
//     if(connection>4){
//         resolve("Success: data is saved");
//     }
//     else{
//         reject("error: weak connection");
//     }});
// }

// savetoDb("data 1")
// .then((result)=>{
//     console.log("data1 is saved", ",", result);
//     return savetoDb("data 2, saved");
// }).then((result)=>{
//     console.log("data 2 is saved",",", result);
//     return savetoDb("data 3");
// })
// .then((result)=>{
//     console.log("data 3 is saved",",",result);
// })
// .catch((error)=>{
//     console.log("some promise are not resolved",error);
// });


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

let h1=document.querySelector("h1");

function colorchange(color,delay){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>2){
            setTimeout(() => {
                    h1.style.color=color;
                    resolve("color changed");
            }, delay);
        }
        else{
            reject("connection weak");
        }
    });
}

async function delay(){
    await colorchange("yellow",2000);
    await colorchange("blue",2000);
    await colorchange("green",2000);
    await colorchange("orange",2000);
    await colorchange("red",2000);
}
delay();

// let suppose we have to do much more work after the await but if await fail the that wil not 
// execute so to resolve it we ise of the try and cathch

async function delay1(){
    try{
        await colorchange("yellow",2000);
        await colorchange("blue",2000);
        await colorchange("green",2000);
        await colorchange("orange",2000);
        await colorchange("red",2000);

    }
    catch(error){
        console.log("erroe counght:",error);
    }

    let num=89;
    alert(num);
}
delay1();