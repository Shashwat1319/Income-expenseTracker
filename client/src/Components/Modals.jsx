import React, { useState } from 'react';
import axios from 'axios';

const Modals = ({ id, title, mode }) => {
  const [amount, setAmount] = useState(0);
  const [Why, setWhy] = useState("");
  const token = localStorage.getItem("token")

  const addEntry = async () => {
    try {
      const url = `http://localhost:5000/${mode}`;
      const response = await axios.post(url, { amount:Number(amount), Why },{headers:{
        Authorization: `Bearer ${token}`
      }});
      console.log(response.data);

      // Reset after submit
      setAmount(0);
      setWhy("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <input
              type="number"
              placeholder="Amount"
              className="form-control mb-2"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Why"
              className="form-control"
              value={Why}
              onChange={(e) => setWhy(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={addEntry}
            >
              Add {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modals;
