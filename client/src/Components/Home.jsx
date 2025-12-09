
import Modals from "./Modals";


const Home = ({}) => {
    const user = "Shashwat Srivastava"

  return (
    <>
    <hr />
    <h1>Dashboard : {user}</h1>
    <hr />
      <div className="button w-50 mt-5 mx-auto d-flex gap-2">

        {/* Income Button */}
        <button
          type="button"
          className="btn btn-success p-5  w-100 form-control mt-3"
          data-bs-toggle="modal"
          data-bs-target="#incomeModal"
        >
          Income
        </button>

        {/* Income Modal */}
       <Modals
        id="incomeModal"
        title="Income"
        value={""}
        setValue={""}
        onSubmit={""}
      />

        {/* Expense Button */}
        <button
          type="button"
          className="btn btn-danger p-5 w-100 form-control mt-3"
          data-bs-toggle="modal"
          data-bs-target="#expenseModal"
        >
          Expense
        </button>

        {/* Expense Modal */}
        <Modals
        id="expenseModal"
        title="Expense"
        value={""}
        setValue={""}
        onSubmit={""}
      />
      </div>

      
    </>
  );
};

export default Home;
