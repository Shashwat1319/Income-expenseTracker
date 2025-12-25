
import { IncomeModal,ExpenseModal,userModal } from "../DbModals/DbModals.js";
import jwt from "jsonwebtoken"

const Secret = "hello"
const login = async(req, res) => {
  try{
  const { email, password } = req.body;
  // Email and password Not Pass
  if(!email || !password){
    return res.status(400).json({
      msg:"Email and password required",
      success:false
    })
  }

  const user = await userModal.findOne({email})
  //User Not Found
  if (!user) {
    return res.status(404).json({ msg: "User not Found!", error: true });
  } 
  const token = jwt.sign({email},Secret,{expiresIn:"7d"})
  res.status(200).json({msg:"Login Successfull",success:true,token})
  }catch(err){
    res.status(500).json({msg:"Internal Server Error",error:err.message})
  }
}


const income = async(req,res)=>{
  try{
  const {amount,Why} = req.body;
  const data = await IncomeModal.create({
    userId:req.user._id,
    Income:amount,Why:Why
  })
  res.status(201).json({msg:"Income Added",data})

  }catch(error){
    res.status(500).json({msg:"Internal Server Error",error:error.message})
  }
  
}



const expense = async(req,res)=>{
  try {
    const {amount,Why} = req.body;
    const data =await ExpenseModal.create({
      userId:req.user._id,
      Expense:amount,
      Why:Why
    })

  res.status(201).json({msg:"Expense Added",data})
  } catch (error) {
     res.status(500).json({msg:"Error",error:error.message})
  }
}

const getIncome = async(req,res)=>{
  try{
    const {month,year} = req.query;
    const filter = {userId:req.user._id};
     if (month !== undefined && year !== undefined) {
      const startDate = new Date(Number(year), Number(month), 1);
      const endDate = new Date(Number(year), Number(month) + 1, 1);

      filter.createdAt = {
        $gte: startDate,
        $lt: endDate
      };
    }
    const data = await IncomeModal.find(filter).sort({createdAt:-1});
    res.status(200).json({
      data:data
    })
  }catch(err)
  {
    res.status(500).json({msg:"Internal Server Error",error:err.message})
  }
}

const getExpense =  async(req,res)=>{
  try{
     const {month,year} = req.query;
     const filter = {userId:req.user._id};
     if (month !== undefined && year !== undefined) {
      const startDate = new Date(Number(year), Number(month), 1);
      const endDate = new Date(Number(year), Number(month) + 1, 1);

      filter.createdAt = {
        $gte: startDate,
        $lt: endDate
      };
    }
    const data = await ExpenseModal.find(filter).sort({createdAt:-1});
    res.status(200).json({
      data:data
    })
  }catch(err)
  {
    console.log(err)
    res.status(500).json({msg:"Internal Server Error",error:err.message})
  }
}

export {login,income ,expense , getIncome , getExpense}