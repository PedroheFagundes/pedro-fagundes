import Link from "next/link";

const SocialCard = (props: { link: string, margin?: number, icon: string, name: string }) => {
    return (
        <Link href={props.link} passHref>
            <a target="_blank" className={`text-white-50 d-flex justify-content-end align-items-center mb-3 m-${props.margin}`}>
                <i className={`fs70 cursor hover-white bi bi-${props.icon} show-on-hover text-center`}>
                    <div className="white-text fs-5 opacity-0 p-0 fst-normal mn20">{props.name}</div>
                </i>
            </a>
        </Link>
    )
  }
  
  export default SocialCard;

