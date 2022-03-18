/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


const ProjectCard = (props: {linkTo: string, imgName: string, imgAlt: string, title: string}) => {
    return (
        <Link href={`/${props.linkTo}`} passHref>
            <div className="row w650 d-flex bg-standart2 m-0 p-0 cursor">
                <div className="m-0 p-0 d-flex justify-content-center w650">
                    <img src={`/${props.imgName}.png`} className='project-image mt-4' alt={props.imgAlt} />
                </div>
                <div className="fs-2 text-white p-0 m-4">{props.title}</div>
            </div>
        </Link>
    )
}

export default ProjectCard;