import User from "../models/user.js"
import {StatusCodes} from "http-status-codes"
import BadRequestError from "../errors/BadRequestError.js"
import NotFoundError from "../errors/NotFoundError.js"
import UnauthorizedError from "../errors/UnauthorizedError.js"

export const login = async (req,res)=>{
    const {email, password} =req.body
    if (!email || !password){
        throw new BadRequestError("Please provide all details")
    }
    const user = await User.findOne({email})

    if(!user){
        throw new NotFoundError("User not found")
    }

    const isVerified = await user.verifyPassword(password)
    if(!isVerified){
        throw new UnauthorizedError("Wrong password. Retry!")
    }
    
    const accessToken = await user.genAccessToken()
    const refreshToken = await user.genRefreshToken()

    res.status(StatusCodes.OK).json({accessToken, refreshToken})

}


export const register = async (req,res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        throw new BadRequestError("Please provide all details")
    }

    const user = await User.create(req.body)

    res.status(StatusCodes.CREATED).json('User registered successfully')
}