const CounterSection = () => {
    return (
        <div className="m-5 text-white d-flex justify-content-around">
            <div className="m-5 w225 d-flex justify-content-between align-items-center">
                <div className="w-fit-content h-fit-content text-white grey-border br20 padding-icon"><i className="fs-3 bi bi-person-heart opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-3">10+</div>
                    <div className="text-white-50 text-center">Happy Clients</div>
                </div>
            </div>
            <div className="m-5 w225 d-flex justify-content-between align-items-center">
                <div className="w-fit-content h-fit-content text-white grey-border br20 padding-icon"><i className="fs-3 bi bi-gear-fill opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-3">60+</div>
                    <div className="text-white-50 text-center">Project Complete</div>
                </div>
            </div>
            <div className="m-5 w225 d-flex justify-content-between align-items-center">
                <div className="w-fit-content h-fit-content text-white grey-border br20 padding-icon"><i className="fs-3 bi bi-calendar-check-fill opacity-75"></i></div>
                <div>
                    <div className="text-white fs56 text-center mb-3">1+</div>
                    <div className="text-white-50 text-center">Years of Experience</div>
                </div>
            </div>
        </div>
    )
  }
  
  export default CounterSection;