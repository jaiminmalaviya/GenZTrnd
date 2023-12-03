import CustomAPIError from "../errors/CustomAPIError.js"
import { StatusCodes } from "http-status-codes"

const errorHandlerMiddleware = (err,req,res,next) =>{
    const customError = {
        msg:err.message || 'Something went wrong, Please try agin later...',
        statusCode:err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }

    if (err.code === 11000){
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyPattern)}`
        customError.statusCode=StatusCodes.BAD_REQUEST
    }
    
    if (err.name == 'ValidationError'){
        customError.msg = `${Object.values(err.errors).map((item)=>item.message).join(' ,')}`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if( err.name==="CastError"){
        customError.statusCode = StatusCodes.BAD_REQUEST,
        customError.msg=`Enter valid value ${err.value}`
    }
    return res.status(customError.statusCode).json({msg:customError.msg})
}

export default errorHandlerMiddleware