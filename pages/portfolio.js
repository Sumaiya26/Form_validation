import PortfolioForm from "../components/portfolio";

const PortfolioNew = () => {

  const handleRegister = data => {
    alert("FORM SUBMITTED SUCESSFULLY");
  }

  return (
    <div className="bwm-form mt-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1 className="page-title">Create New Portfolio</h1>
          
          <PortfolioForm
            onSubmit={handleRegister}
            
          />
        </div>
      </div>
    </div>
  )
}
export default PortfolioNew;