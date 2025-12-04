import express from "express"
import mongoose from "mongoose"
import cors from "cors"
const port = 5000;
const app = express();
app.use(cors())
app.use(express.json())



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


app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})