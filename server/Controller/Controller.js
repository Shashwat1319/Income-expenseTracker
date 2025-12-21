
const user = {
  email: "test@example.com",
  password: "123456"
};
import { IncomeModal,ExpenseModal } from "../DbModals/DbModals.js";

const login = async(req, res) => {
  const { email, password } = req.body;
  if (email === user.email) {
    res.status(200).json({ msg: "Login Successful!", error: false });
  } else {
    res.status(400).json({ msg: "Email Not Found!", error: true });
  }
}


const income = async(req,res)=>{
  try{
  const {amount,Why} = req.body;
  const data = await IncomeModal.create({
    Income:amount,Why:Why
  })
  res.status(201).json({msg:"Income Added",data})

  }catch(error){
    res.status(500).json({msg:"Error",error:error.message})
  }
  
}



const expense = async(req,res)=>{
  try {
    const {amount,Why} = req.body;
    const data =await ExpenseModal.create({
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
    const data = await IncomeModal.find();
    res.status(200).json({
      data:data
    })
  }catch(err)
  {
    console.log(err)
  }
}

const getExpense =  async(req,res)=>{
  try{
    const data = await ExpenseModal.find();
    res.status(200).json({
      data:data
    })
  }catch(err)
  {
    console.log(err)
  }
}

export {login,income ,expense , getIncome , getExpense}