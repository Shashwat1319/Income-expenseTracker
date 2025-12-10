import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Income = () => {
    const [incomedata,setIncomeData] = useState([]);
   
    
    useEffect(()=>{
const allIncome=async()=>{
        try{
            const response = await axios.get("http://localhost:5000/getincome")
            // console.log(response.data.data)
            setIncomeData(response.data.data)
        }catch(err){
            console.log("Error:",err.message)
        }
    }
allIncome()
    },[])
console.log("Income : ",incomedata)
  const totalIncome = incomedata.reduce((sum,item)=>{
       return sum + item.Income
    },0)
  return (
    <>
    <div className="table w-75 mt-5 mx-auto">
      <div 
  className="totalincome bg-light border border-success rounded-4 shadow-sm p-4 my-3 d-flex justify-content-between align-items-center"
  style={{ maxWidth: "350px" }}
>
  <div className="fw-bold text-success" style={{ fontSize: "20px" }}>
    Total Income
  </div>
  
  <div 
    className="fw-bold text-success"
    style={{ fontSize: "24px" }}
  >
    ₹{totalIncome}
  </div>
</div>

        <table className="table">
          <thead>
            
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Why</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {incomedata.map((item,index)=>{
                return (
                    <>
                        <tr key={index}>
                            <td >{index+1}</td>
                            <td>{item.Date}</td>
                            <td>{item.Why}</td>
                            <td>{item.Income}</td>
                        </tr>
                    </>
                )
            })}
            
          </tbody>
        </table>
      </div></>
  )
}

export default Income