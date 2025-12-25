import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
const userModal = new mongoose.model("users",UserSchema)

const IncomeSchema =new mongoose.Schema({
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:"users",
    required:true
  },
  Income:{
    type:Number,
    required:true
  },
  Why:{
    type:String,
    required:true
  }
},{timestamps:true})

const IncomeModal = mongoose.model("incomes",IncomeSchema)


const ExpenseSchema = new mongoose.Schema({
   userId:{
    type:mongoose.Schema.ObjectId,
    ref:"users",
    required:true
  },
  Expense:{
    type:Number,
    required:true
  },
  Why:{
    type:String,
    required:true
  }
},{timestamps:true})

const ExpenseModal = mongoose.model("expense",ExpenseSchema)

export {IncomeModal,ExpenseModal,userModal}

