import React, { useEffect, useState } from "react";
import axios from "axios";
const Expense = () => {
  const [expensedata, setExpenseData] = useState([]);
  const [month,setMonth] = useState(null)
  const [year,setYear] = useState(null)


  useEffect(() => {
    const allExpense = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getexpense?month=${month}&year=${year}`);
        setExpenseData(response.data.data);
      } catch (err) {
        console.log("Error:", err.message);
      }
    };
    if(month !== null && year !== null){
   allExpense();
    }
 
  }, [month,year]);

  const totalExpense = expensedata.reduce((sum, item) => {
    return sum + item.Expense;
  }, 0);
  return (
    <>
      <div className="table w-75 mt-5 mx-auto">
        <div
          className="totalincome bg-light border border-success rounded-4 shadow-sm p-4 my-3 d-flex justify-content-between align-items-center"
          style={{ maxWidth: "350px" }}
        >
          <div className="fw-bold text-success" style={{ fontSize: "20px" }}>
            Total Expense
          </div>

          <div className="fw-bold text-success" style={{ fontSize: "24px" }}>
            ₹{totalExpense}
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
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
            {expensedata.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.createdAt.split("T")[0]}</td>
                    <td>{item.Why}</td>
                    <td>{item.Expense}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Expense;
