import Carousel from "./Carousel";

const Home = () => {
    const user = "Shashwat Srivastava"

  return (
    <>
    <hr />
    <h1>Dashboard : {user}</h1>
    <hr />
    <div className="container-fluid">
      <Carousel/>
    </div>
     

      
    </>
  );
};

export default Home;
