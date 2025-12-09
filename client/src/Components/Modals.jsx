import React from 'react'
import axios from 'axios'

const Modals = ({id,setValue,value,title,addincome}) => {
   const [income,setincome] = useState(0);
    const [why,setWhy] = useState("")
  const addincome =async()=>{
 try{
    const response = await axios.post("http:localhost:5000/income",{income,why})
    console.log(response.data)
  }catch(err){
console.log(err)
  }
  }
 
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
                <input type="number" placeholder="Amount" className="form-control" onChange={(e)=>{setincome(e.target.value)}} value={value}/>
                <input type="text" placeholder="Why" className="form-control" onChange={(e)=>{setWhy(e.target.value)}} value={value}/>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={addincome}>
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