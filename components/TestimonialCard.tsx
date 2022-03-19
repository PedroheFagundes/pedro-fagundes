const TestimonialCard = (props: { description: string, name: string, role: string, company: string }) => {
    return (
        <div className="w500 h550 bg-standart-light padding-testimonial row">
            <i className="text-white-50 fs70 bi bi-quote p-0"></i>
            <div className="text-white cormorant fs-2">{props.description}</div>
            <div className="text-white fs-3 bold">{props.name}</div>
            <div className="text-white-50 fs-6">{props.role}, {props.company}</div>
        </div>
    )
  }
  
  export default TestimonialCard;