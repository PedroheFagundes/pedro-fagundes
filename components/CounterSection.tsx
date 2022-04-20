const CounterSection = () => {
    return (
        <div id="counter-section-container" className="my-3 text-white d-flex justify-content-between row">
            <div className="my-3 col-9 col-sm-6 col-md-5 col-lg-4 d-flex align-items-center justify-content-center">
                <div className="text-white grey-border br20 padding-icon mx-2"><i className="fs-3 bi bi-person-heart opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-1">3+</div>
                    <div className="text-white-50 text-center">Happy Clients</div>
                </div>
            </div>
            <div className="my-3 col-9 col-sm-6 col-md-5 col-lg-4 d-flex align-items-center justify-content-center">
                <div className="text-white grey-border br20 padding-icon mx-2"><i className="fs-3 bi bi-gear-fill opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-1">10+</div>
                    <div className="text-white-50 text-center">Projects Complete</div>
                </div>
            </div>
            <div className="my-3 col-9 col-sm-6 col-md-5 col-lg-4 d-flex align-items-center justify-content-center">
                <div className="text-white grey-border br20 padding-icon mx-2"><i className="fs-3 bi bi-calendar-check-fill opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-1">1+</div>
                    <div className="text-white-50 text-center">Years of Experience</div>
                </div>
            </div>
        </div>
    )
  }
  
  export default CounterSection;