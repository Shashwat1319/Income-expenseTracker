import mongoose from "mongoose";

const DBConnect =()=>{
    const con = mongoose.connect("mongodb+srv://shaswatsrivastava1319_db_user:IVtKFMaSIoUX4AP5@cluster0.ohne2te.mongodb.net/tracker")
    if(con){
        return console.log("Mongo DB is Connected !!")
    }
    return console.log("Mongo DB is Connected !!")
}
  
export  default DBConnect