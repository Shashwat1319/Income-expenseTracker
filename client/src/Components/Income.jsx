import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Income = () => {
    const [incomedata,setIncomeData] = useState([]);
    const [month,setMonth] = useState(0)
    const [year,setYear] = useState(2026)
    const token = localStorage.getItem("token")
    useEffect(()=>{
const allIncome=async()=>{
        try{
            const response = await axios.get(`http://localhost:5000/getincome?month=${month}&year=${year}`,{headers:{Authorization: `Bearer ${token}`}})
            setIncomeData(response.data.data)
        }catch(err){
            console.log("Error:",err.message)
        }
    }
    if (month !== null && year !== null) {
   allIncome()
  }

    },[month,year])

  const totalIncome = incomedata.reduce((sum,item)=>{
       return sum + Number(item.Income || 0)
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
<div className="div d-flex gap-3 mb-3">
<select onChange={(e)=>setMonth(Number(e.target.value))} className='form-select shadow-sm rounded-3' value={month}>
  <option value="" disabled>-- Select Month --</option>
  <option value="0">January</option>
  <option value="1">Febuary</option>
  <option value="2">March</option>
  <option value="3">April</option>
  <option value="4">May</option>
  <option value="5">June</option>
  <option value="6">July</option>
  <option value="7">August</option>
  <option value="8">September</option>
  <option value="9">October</option>
  <option value="10">November</option>
  <option value="11">December</option>
</select>
<select onChange={(e)=>setYear(Number(e.target.value))} className='form-select shadow-sm rounded-3' value={year}>
  <option value="" disabled>Year</option>
  <option value="2026">2026</option>
  <option value="2025">2025</option>
  <option value="2024">2024</option>
  <option value="2023">2023</option>
</select>
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
            {incomedata.length>0 ?(incomedata.map((item,index)=>{
                return (
                        <tr key={item._id}>
                            <td >{index+1}</td>
                            <td>{item.createdAt.split("T")[0]}</td>
                            <td>{item.Why}</td>
                            <td>{item.Income}</td>
                        </tr>
                )
            })):<td colSpan={4} className='text-lg-center'> No Data Found</td>}
            
          </tbody>
        </table>
      </div></>
  )
}

export default Income