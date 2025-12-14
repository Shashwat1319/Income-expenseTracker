import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const port = 5000;
const app = express();
app.use(cors())
app.use(express.json())


// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/tracker")
  .then(() => console.log("MongoDB is Connected !!"))
  .catch(() => console.log("MongoDB is Not Connected !!"));


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






const user = {
  email: "test@example.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === user.email) {
    res.status(200).json({ msg: "Login Successful!", error: false });
  } else {
    res.status(400).json({ msg: "Email Not Found!", error: true });
  }
});


app.post("/income",async(req,res)=>{
  try{
  const {amount,Why} = req.body;
  const data = await IncomeModal.create({
    Income:amount,Why:Why
  })
  console.log(data)
  res.status(201).json({msg:"Income Added",data})

  }catch(error){
    res.status(500).json({msg:"Error",error:error.message})
  }
  
})



app.post("/expense",async(req,res)=>{
  try {
    const {amount,Why} = req.body;
    const data =await ExpenseModal.create({
      Expense:amount,
      Why:Why
    })
     console.log(data)
  res.status(201).json({msg:"Expense Added",data})
  } catch (error) {
     res.status(500).json({msg:"Error",error:error.message})
  }
})
app.get("/getincome",async(req,res)=>{
  try{
    const data = await IncomeModal.find();
    res.status(200).json({
      data:data
    })
  }catch(err)
  {
    console.log(err)
  }
})
app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})