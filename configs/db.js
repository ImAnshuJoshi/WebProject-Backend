// const { Client } = require('pg')
// const client = new Client(
// //     {
// //     user:process.env.PQSL_user ,
// //     host: process.env.PQSL_HOST,
// //     database: process.env.PQSL_db,
// //     password: process.env.PQSL_PASS,
// //     port: 5432,
// `postgres://ewvigfib:zNSZKU-xYteuOjORRpilYOIhpkrExWhA@tiny.db.elephantsql.com/ewvigfib`
//   )

// module.exports=client;


const { Client } = require("pg");

console.log(process.env.SECRET_KEY);
const client = new Client(
  `postgres://zomwxlar:LozhklxQH-iBc9Guw3PAdtiQPtVe7zDR@john.db.elephantsql.com/zomwxlar`
);

module.exports = client;