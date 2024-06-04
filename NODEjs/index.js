// const fruit=require("./Fruits/index");
import {veg} from "./Fruits/index.js";

// console.log(fruit);


// we can also use the import export for the use of the file inside the other file 
// so to use the import export first we have to make the json file inside the working dorectory
// and add ("type":"module") inside the json file 
// json file make by npm init of npme init -y
// so let's export something form Fruits/index file then use it {note here we use the export 
//not exports}  generaly you are not able to use the both import and require in same file 
// they will give conflict so sither we use the import of require


console.log(veg);
