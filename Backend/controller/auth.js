import User from "../models/user.js"
import {StatusCodes} from "http-status-codes"
import BadRequestError from "../errors/BadRequestError.js"
import NotFoundError from "../errors/NotFoundError.js"

export const login = async (req,res)=>{
    res.status(StatusCodes.OK).json('hi from login')
}
export const register = async (req,res)=>{
    res.status(StatusCodes.OK).json(req.body)
}