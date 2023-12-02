import mongoose from "mongoose";

const connect = async (mongoURL) =>{
    await mongoose.connect(mongoURL)
}

export default connect