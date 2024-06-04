// let n=21;
// let fact=1;
// for(let i=n;i>=1;i--){
//     fact=fact*i;
// }
// console.log(fact);

// let para=document.createElement("p");
// para.innerText="hey I am red!";
// document.querySelector("body").append(para);

// para.classList.add("red");


// let h3=document.createElement("h3");
// h3.innerText="HEY I am Blue with H3!";
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// document.createElement
// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("p");

// h1.innerText="I am in a div!";
// para2.innerText="ME TOO!";

// div.append(h1);
// div.append(para2);

// div.classList.add("div1");
// document.querySelector("body").append(div);


let img=document.getElementById("mainImg");// selecting the image
console.dir(img);
console.log(img.tagName);
img.tagName="tagname1";
console.log(img.tagName);
img.id="myimg";
console.dir(img);
