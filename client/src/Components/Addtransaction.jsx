import React from 'react'
import Modals from "./Modals";
const Addtransaction = () => {
  return (
    <>
    <div className="button  flex-column felx-md-row w-50 mt-5 mx-auto d-flex gap-2 px-2">

        {/* Income Button */}
        <button
          type="button"
          className="btn btn-success p-5 flex-fill w-100 form-control mt-3 py-4"
          data-bs-toggle="modal"
          data-bs-target="#incomeModal"
        >
          Income
        </button>

        {/* Income Modal */}
       <Modals
        id="incomeModal"
        title="Income"
        mode={"income"}
      />

        {/* Expense Button */}
        <button
          type="button"
          className="btn btn-danger flex-fill p-5 w-100 form-control mt-3 py-4"
          data-bs-toggle="modal"
          data-bs-target="#expenseModal"
        >
          Expense
        </button>

        {/* Expense Modal */}
        <Modals
        id="expenseModal"
        title="Expense"
        mode={"expense"}
      />
      </div>
      </>
  )
}

export default Addtransaction