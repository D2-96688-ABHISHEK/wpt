const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
  host:'localhost',
  user:'d2_96688_Abhishek',
  password:"Abhi@007",
  database:'express',
})

module.exports=pool;
