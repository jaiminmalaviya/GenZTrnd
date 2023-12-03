import CustomAPIError from "../errors/CustomAPIError.js"
import { StatusCodes } from "http-status-codes"

const errorHandlerMiddleware = (err,req,res,next) =>{
    const customError = {
        message:err.message || 'Something went wrong, Please try agin later...',
        statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    return res.status(customError.statusCode).json(customError.message)
}

export default errorHandlerMiddleware