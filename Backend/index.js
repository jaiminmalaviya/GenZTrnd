import express from 'express'
import connect from "./utils/connect.js"
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'


dotenv.config()



const app = express()


// Endpoints
    // app.get('/',(req,res)=>{
    //     res.json('hi')
    // })
app.use('/auth',authRouter)



// Middlewares









// Connection
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



