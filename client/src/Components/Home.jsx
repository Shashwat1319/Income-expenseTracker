import { useState } from "react";
import Modals from "./Modals";
const Home = () => {
  const [amount,setAmount] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [incomeList, setIncomeList] = useState([]);

  const [examount,setExAmount] = useState(0);
  const [totalExpense,setTotalExpense] = useState(0);
  const [expenseList,setExpenseList] = useState([])

  
  

 const handleIncome = () => {
  if (!amount) return;  // empty amount ignore

  setTotalIncome(prev => prev + amount);

  setIncomeList(prev => [
    ...prev,
    { amount }
  ]);

  setAmount(0);

};

const handleExpense = () =>{
  if (!examount) return ;

  setTotalExpense(prev => prev+examount);

  setExpenseList(prev => [
    ...prev,
    {examount}
  ])
  setExAmount(0)
}


  return (
    <>
      <div className="button w-25 mx-auto d-flex gap-2">

        {/* Income Button */}
        <button
          type="button"
          className="btn btn-success form-control mt-3"
          data-bs-toggle="modal"
          data-bs-target="#incomeModal"
        >
          Income
        </button>

        {/* Income Modal */}
       <Modals
        id="incomeModal"
        title="Income"
        value={amount}
        setValue={setAmount}
        onSubmit={handleIncome}
      />

        {/* Expense Button */}
        <button
          type="button"
          className="btn btn-danger form-control mt-3"
          data-bs-toggle="modal"
          data-bs-target="#expenseModal"
        >
          Expense
        </button>

        {/* Expense Modal */}
        <Modals
        id="expenseModal"
        title="Expense"
        value={examount}
        setValue={setExAmount}
        onSubmit={handleExpense}
      />
      </div>

      <div className="table w-75 mt-5 mx-auto">
        <hr />
        <h2 className="text-center text-success">My Finance</h2>
        <hr />
        <h3 className="text-center mt-3">Total Income: ₹{totalIncome}</h3>
        <h3 className="text-center mt-3 text-danger">Total Expense: ₹{totalExpense}</h3>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Income</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>

            {Array.from({length: Math.max(incomeList.length, expenseList.length)}).map((_, index) => (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{incomeList[index]?.amount || ""}</td>
        <td>{expenseList[index]?.examount || ""}</td>
      </tr>
    ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
