const SkillCard = (props: { description: string, percentage: number }) => {
    return (
        <div className=" h150 bg-standart p45 d-flex mb-4 col-12 row">
            <div className={`p-0 d-flex justify-content-between text-white-50 w${props.percentage}pc`}>
                <div>{props.description}</div>
                <div>{props.percentage}%</div>
            </div>
            <div className="bg-standart-light h7 p-0 mt20">
                <div className={`bg-light h7 w${props.percentage}pc`}></div>
            </div>
        </div>
    )
  }
  
  export default SkillCard;