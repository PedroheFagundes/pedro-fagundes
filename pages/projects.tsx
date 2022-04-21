import type { NextPage } from 'next'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const Projects: NextPage = () => {
  return (
    <div className='container-fluid align-items-center p-0 col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
    <div className="h150"></div>
    <SectionHeader
      tinyDesc="Awesome Portfolio"
      longDesc="My Complete Projects"
    />
    <div className="d-flex justify-content-around row">
      <ProjectCard
        linkTo='https://rollercalc.pedrofagundes.com/#/'
        imgName='roller-calc'
        imgAlt='Rollercalc website'
        title='RollerCalc - a RollerCoin calculator'
      />
      <ProjectCard
        linkTo='https://pedrofagundes-preco-campeao.netlify.app/'
        imgName='preco-campeao'
        imgAlt='Preço Campeão website'
        title='Preço Campeão - the best market sales!'
      />
    </div>
    <div className="h120"></div>
  </div>
  )
}

export default Projects
