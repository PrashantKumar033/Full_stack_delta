import { faker } from '@faker-js/faker';
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Delta_user',
    password:''
});

let getRandomUser =()=>{ 
    return [
        faker.datatype.uuid(),  // this package we should install to manuculate with user in DB
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// let data = [];
// for(let i=0;i<15;i++){
//     data.push(getRandomUser());
// }
// this array pass as like [data] inside the connection.query(q,[data],(err,result)=>{})

// module.exports = { getRandomUser };  // Export using CommonJS syntax

// let q="INSERT INTO users (id , username , email, password) VALUES ?";
let q="SELECT COUNT{*} FROM users";
// let user=["12","jack","jack@gmail.com","jack123"];  // for this use (?,?,?,?); and pass simple 

// or we can use the multiple value dierctly (for this directly use values ?) pass as [users]
// let users=[["13","Mad","mad@gmail.com","mad123"],["14","leon","leon@gmail.com","leon123"]];


// try {
//     connection.query(q,(err, results)=> {
//         if(err){throw err};
//         console.log(results); // results contains rows returned by server
//     }); 
// } catch (err) {
//     console.log(err);
// }

try {
    connection.query(q, (err, results) => {
        if (err) {
            throw err; 
        }
        console.log(results); // results contains rows returned by the server
    }); 
} catch (err) {
    console.log(err);
}

connection.end();


// let getRandomUser=()=>{ 
//     return {
//         id: faker.datatype.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }