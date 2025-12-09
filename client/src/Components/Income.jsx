import React, { useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose';
const Income = () => {
    const [incomedata,setIncomeData] = useState([]);
   
    const allIncome=async()=>{
        try{
            const response = await axios.get("http://localhost:3000/income")
            console.log(response.data)
            // setIncomeData(response.data)
        }catch(err){
            console.log("Error:",err.message)
        }
    }
  return (
    <>
    <div className="table w-75 mt-5 mx-auto">
       
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
            {allIncome.map((item,index)=>{
                return (
                    <>
                        <tr>
                            <td>{index}</td>
                            <td>{incomedata.date}</td>
                            <td>{incomedata.why}</td>
                            <td>{incomedata.Income}</td>
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