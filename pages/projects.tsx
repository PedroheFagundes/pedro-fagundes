import type { NextPage } from 'next'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const Projects: NextPage = () => {
  return (
    <div className='container-fluid align-items-center p-0 w1400'>
    <div className="h150"></div>
    <SectionHeader
      tinyDesc="Awesome Portfolio"
      longDesc="My Complete Projects"
    />
    <div className="d-flex justify-content-around">
      <ProjectCard
        linkTo='projects'
        imgName='roller-calc'
        imgAlt='Rollercalc website'
        title='RollerCalc - a RollerCoin calculator'
      />
      <ProjectCard
        linkTo='projects'
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
