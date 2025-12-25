import express from "express"
import {login ,income,expense,getIncome,getExpense} from "../Controller/Controller.js"
const router = express.Router()
router.post("/login", login);
router.post("/income",income)
router.post("/expense",expense)
router.get("/getincome",getIncome)
router.get("/getexpense",getExpense)

export default router 