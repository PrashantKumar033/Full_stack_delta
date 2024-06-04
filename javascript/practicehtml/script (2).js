// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
//     alert(ans);
// }
// three();

let h1=document.querySelector("h1");

function changeColor(color, delay, nextcolor){
   
    setTimeout(() => {
        h1.style.color=color;
        if(nextcolor) nextcolor();
    }, delay);
}

changeColor("red" ,1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("blue",1000);
    })
})