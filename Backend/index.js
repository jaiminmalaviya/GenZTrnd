import express from 'express'
import connect from "./utils/connect.js"
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.get('/',(req,res)=>{
    res.json('hi')
})


const connection = async () =>{
    try {
        await connect(process.env.MONGO_URL)
        app.listen(process.env.PORT, ()=>{
        console.log(`Connected to DB and listening on port ${process.env.PORT}`);
    })
    } catch (error) {
        console.log(error);
    }
}
connection()



