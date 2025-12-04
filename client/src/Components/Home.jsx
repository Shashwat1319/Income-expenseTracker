import { useState } from "react";

const Home = () => {
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
        <div
          className="modal fade"
          id="incomeModal"
          tabIndex="-1"
          aria-labelledby="incomeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="incomeModalLabel">
                  Income
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <input type="number" placeholder="Amount" className="form-control" />
                <input
                  type="text"
                  placeholder="Description"
                  className="form-control mt-2"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-success">
                  Add Income
                </button>
              </div>
            </div>
          </div>
        </div>

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
        <div
          className="modal fade"
          id="expenseModal"
          tabIndex="-1"
          aria-labelledby="expenseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="expenseModalLabel">
                  Expense
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <input type="number" placeholder="Amount" className="form-control" />
                <input
                  type="text"
                  placeholder="Description"
                  className="form-control mt-2"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add Expense
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="table w-75 mt-5 mx-auto">
        <hr />
        <h2 className="text-center text-success">My Finance</h2>
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Income</th>
              <th>Expense</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
