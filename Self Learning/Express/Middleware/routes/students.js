const express = require('express')
const router = express.Router();
const pool = require('../db/pool');
const result = require('../utils/result')

router.get('/',async(req,res)=>{
      const sql = 'select * from students'

      try{
        const data = await pool.query(sql);

        const[users]=data

        res.send(result.result(users))
      }
      catch(error){
        res.send(result.result(null,error))
      }
})

router.post('/',async(req,res)=>{
      const{stdName,mobNo,age,emailAddress,password}=req.body
      const sql = 'insert into students(stdName,mobNo,age,emailAddress,password)values(?,?,?,?,?)'

      try{
        const data = await pool.query(sql,[stdName,mobNo,age,emailAddress,password])
        const [student]=data;

        res.send(result.result(student))

      }
      catch(error){
        console.log(error);
        
         res.send(result.result(null,error))       
      }
}) 
router.put('/', async (req, res) => {
    const {age, emailAddress ,mobNo} = req.body
    try {
        const sql = 'UPDATE students SET age = ? , emailAddress = ? WHERE mobNo = ?'
        const data = await pool.query(sql, [age, emailAddress, mobNo])
        res.send(result.result(data[0]))
    } catch (error) {
        res.send(result.result(null, error))
    }
})

router.delete('/:std_id', async(req,res)=>{
    const std_id= req.params.std_id
    const sql = 'delete from students where std_id=?'
    
    try{
      const data = await pool.query(sql,[std_id])
      res.send(result.result(data[0]))
    }
    catch(error){
      res.send(result.result(null,error))
    }
})

module.exports = router;