/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


const ProjectCard = (props: {linkTo: string, imgName: string, imgAlt: string, title: string}) => {
    return (
        <Link href={`${props.linkTo}`} passHref>
            <div className="row d-flex bg-standart-light my-3 p-0 cursor col-md-11 col-lg-9 col-xl-8 col-xxl-6">
                <div className="m-0 p-0 d-flex justify-content-center">
                    <img src={`/${props.imgName}.png`} className='project-image mt-4' alt={props.imgAlt} />
                </div>
                <div className="fs-2 text-white p-0 m-4 d-flex justify-content-center">{props.title}</div>
            </div>
        </Link>
    )
}

export default ProjectCard;