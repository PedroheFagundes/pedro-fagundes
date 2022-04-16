const ServiceCard = (props: { icon: string, title: string, desc1: string, desc2: string, desc3: string, desc4: string, desc5: string}) => {
    return (
      <div id="service-card" className="row text-white h515 mb-4 col-md-7 col-lg-6 col-xl-4 col-xxl-4 bg-standart p70 d-flex justify-content-between">
        <i className={`bi ${props.icon} fs56 p-0`}></i>
        <div className="fs-2 p-0">{props.title}</div>
        <ol className="m-0 p-0 text-white-50 d-flex flex-column justify-content-end">
          <li className="mb-3"><i className="bi bi-chevron-double-right pe-4 fs12"></i>{props.desc1}</li>
          <li className="mb-3"><i className="bi bi-chevron-double-right pe-4 fs12"></i>{props.desc2}</li>
          <li className="mb-3"><i className="bi bi-chevron-double-right pe-4 fs12"></i>{props.desc3}</li>
          <li className="mb-3"><i className="bi bi-chevron-double-right pe-4 fs12"></i>{props.desc4}</li>
          <li><i className="bi bi-chevron-double-right pe-4 fs12"></i>{props.desc5}</li>
        </ol>
      </div>
    )
  }
  
  export default ServiceCard;