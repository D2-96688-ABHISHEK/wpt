const express = require('express')
const studentRouter = require('./routes/students')
const coursesRouter = require('./routes/courses')

const app = express();

app.use(express.json());

app.use('/students',studentRouter)
app.use('/courses',coursesRouter)

app.listen(4001,'localhost')