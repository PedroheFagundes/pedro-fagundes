const SectionHeader = (props: { tinyDesc: string, longDesc: string }) => {
    return (
      <div className="row m-0">
        <div className="text-white-50 d-flex h30 align-item-center p-0">
          <div className="me-3">| |</div>
          <div className="">{props.tinyDesc}</div>
        </div>
        <div id="section-header-long-desc" className="fs70 cormorant bold text-white mt-3 mb-5 p-0">{props.longDesc}</div>
      </div>
    )
  }
  
  export default SectionHeader;