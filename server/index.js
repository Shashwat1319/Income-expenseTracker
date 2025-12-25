import express from "express"
import cors from "cors"

import DBConnect from "./DbConfig/DbConfig.js";
import router from "./Routes/Routes.js";

const port = 5000;
const app = express();
app.use(cors())
app.use(express.json())
app.use("/",router)


DBConnect() 

app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})