import mongoose from "mongoose";

const connecToMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("data connected")
    }catch(err){
        console.log("con't connect badabase")
    }
}
export default connecToMongoDb;