import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please Enter Name'],
        trim:true
    },
    email:{
        type:String,
        unique:true,
        match:[/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i],
        required:[true, 'Please Enter Email'],
        trim:true
        
    },
    password:{
        required:[true, 'Please Enter Password'],
        type:String,
        minlength:6,
        maxlength:32,
        trim:true
        
    }
},{versionKey:false, timestamps:true})

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
    next()
})

userSchema.methods.verifyPassword = async function(password){
    const isVerified = await bcrypt.compare(password,this.password)
    return isVerified
}

userSchema.methods.genAccessToken = async function(){
    const accessToken = await jwt.sign({id:this._id, name:this.name},process.env.ACCESS_URL,{expiresIn:'1d'} )
    return accessToken
}
userSchema.methods.genRefreshToken = async function(){
    const refreshToken = await jwt.sign({id:this._id, name:this.name},process.env.REFRESH_URL,{expiresIn:'1d'} )
    return refreshToken
}

const User = mongoose.model('User', userSchema)

export default User