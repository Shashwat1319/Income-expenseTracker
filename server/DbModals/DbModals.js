import mongoose from "mongoose";

const IncomeSchema =new mongoose.Schema({
  Date :{
    type:String,
    default:()=>{
      const d = new Date()
       return d.toISOString().split("T")[0]; // YYYY-MM-DD
    }
  },
  Income:{
    type:Number,
    required:true
  },
  Why:{
    type:String,
    required:true
  }
})

const IncomeModal = mongoose.model("incomes",IncomeSchema)


const ExpenseSchema = new mongoose.Schema({
  Date :{
    type:String,
    default:()=>{
      const d = new Date()
       return d.toISOString().split("T")[0]; // YYYY-MM-DD
    }
  },
  Expense:{
    type:Number,
    required:true
  },
  Why:{
    type:String,
    required:true
  }
})

const ExpenseModal = mongoose.model("expense",ExpenseSchema)

export {IncomeModal,ExpenseModal}

