import express from "express"
import {login ,income,expense,getIncome,getExpense} from "../Controller/Controller.js"
import auth from "../Middleware/token.js"
const router = express.Router()

router.post("/login",login);
router.post("/income",auth,income)
router.post("/expense",auth,expense)
router.get("/getincome",auth,getIncome)
router.get("/getexpense",auth,getExpense)

export default router 