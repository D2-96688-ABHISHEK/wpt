const express = require('express')
const router = express.Router();
const pool = require('../db/pool')
const result = require('../utils/result')
router.get('/',async(req,res)=>{
    const sql = 'select * from courses'

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
      const{courseName}=req.body
      const sql = 'insert into courses(courseName)values(?)'

      try{
        const data = await pool.query(sql,[courseName])
        const [course]=data;

        res.send(result.result(course))

      }
      catch(error){
        console.log(error);
         res.send(result.result(null,error)) 

      }
})
router.put('/', async (req, res) => {
    const {courseName,course_id}= req.body
    try{
        const sql = 'UPDATE courses SET coursename=? WHERE course_id = ?'
        const data = await pool.query(sql, [courseName,course_id])
        res.send(result.result(data[0]))
    } catch (error) {
        res.send(result.result(null, error))
    }
}) 


module.exports = router;

