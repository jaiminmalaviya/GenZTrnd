import express from 'express'
import connect from "./utils/connect.js"


const app = express()

app.get('/',(req,res)=>{
    res.json('hi')
})


app.listen(8000, ()=>{
    console.log('listening on port');
})


