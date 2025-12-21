import express from "express"
import cors from "cors"

import DBConnect from "./DbConfig/DbConfig.js";
import {login ,income,expense,getIncome,getExpense} from "./Controller/Controller.js"

const port = 5000;
const app = express();
app.use(cors())
app.use(express.json())



DBConnect() 



app.post("/login", login);
app.post("/income",income)
app.post("/expense",expense)
app.get("/getincome",getIncome)
app.get("/getexpense",getExpense)


app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})