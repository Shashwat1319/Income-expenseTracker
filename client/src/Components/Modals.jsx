import React from 'react'

const Modals = ({id,setValue,value,title,onSubmit}) => {
  return (
    <>
           <div
          className="modal fade"
          id={id}
          tabIndex="-1"
          aria-labelledby={`${id}Label`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id={`${id}Label`}>
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <input type="number" placeholder="Amount" className="form-control"  onChange={(e)=>setValue(Number(e.target.value))} value={value}/>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={onSubmit}>
                  Add Income
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Modals