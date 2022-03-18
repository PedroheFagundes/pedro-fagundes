import type { NextPage } from 'next'
import Link from 'next/link'
import CounterSection from '../components/CounterSection'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import SkillCard from '../components/SkillCard'


const Home: NextPage = () => {


  return (
    <>
    {/* Home */}
      <div className='container-fluid h100vh align-items-center p-0 w1400'>
        <div className="h120"></div>
        <div className='text-white home-cover d-flex align-items-center justify-content-around'>
          <div className="row m-0">
            <div className="col-9 p-0">
              <div className="row m-0">
                <h3 className="text-white secondary-font  p-0">Hello! I{"'"}m</h3>
                <h2 className="text-white main-font overflow-hidden mb-5  p-0">Pedro Fagundes</h2>
                <p className='text-white-50 fs-2 m-0  p-0'>Fullstack Web Developer</p>
                <p className='text-white-50 fs-4 mb-5  p-0'>I create websites and web applications for your projects!</p>
                <Link href="/contact" passHref><div className="col-3 mt-5 cursor text-white btn btn-outline-secondary rounded-pill p-4 fs-5 d-flex align-items-center justify-content-center"><span className='pe-2'> Get Resume </span><i className="fs-5 bi bi-download"></i></div></Link>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center text-white-50">
              <div className="row text-end">
                <Link href="https://www.linkedin.com/in/pedrofagundes/" passHref><a target="_blank" className='text-white-50'><i className="fs70 cursor hover-white bi bi-linkedin"></i></a></Link>
                <Link href="https://github.com/PedroheFagundes" passHref><a target="_blank" className='text-white-50'><i className="fs70 cursor hover-white bi bi-github"></i></a></Link>
                <Link href="/contact" passHref><i className="fs70 cursor hover-white bi bi-envelope-fill"></i></Link>
                <Link href="https://twitter.com/pedrohefagundes" passHref><a target="_blank" className='text-white-50'><i className="fs70 cursor hover-white bi bi-twitter"></i></a></Link>
                <Link href="https://www.instagram.com/pedrohefagundes/" passHref><a target="_blank" className='text-white-50'><i className="fs70 cursor hover-white bi bi-instagram"></i></a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden col text-white h100 row hover-arrow"><span className='d-flex justify-content-center align-items-end'>Services</span><i className="d-flex justify-content-center bi bi-arrow-down stretched-text"></i></div>
      </div>

      {/* Services */}
      <div className="bg-standart2 w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
          <div className="h120"></div>
          <SectionHeader
            tinyDesc="My Services"
            longDesc="Service Provide For My Clients"
          />
          <div className="d-flex justify-content-around">
            <ServiceCard
              icon='bi-blockquote-left'
              title='Landing Page'
              desc1='Home Page'
              desc2='Contact Form'
              desc3='Blabla'
              desc4='Home Page'
              desc5='Home Page'
            />
            <ServiceCard
              icon='bi-calendar-check'
              title='Self-scheduling System'
              desc1='Home Page'
              desc2='Contact Form'
              desc3='Blabla'
              desc4='Home Page'
              desc5='Home Page'
            />
            <ServiceCard
              icon='bi-bag-check'
              title='E-Commerce Page'
              desc1='Home Page'
              desc2='Contact Form'
              desc3='Blabla'
              desc4='Home Page'
              desc5='Home Page'
            />
          </div>
          <div className="d-flex justify-content-center m-5">
            <Link href="/services" passHref><div className="col-2 cursor text-white btn btn-outline-secondary rounded-pill p-3 fw-bold fs-5 d-flex align-items-center justify-content-center"><span>All Services</span></div></Link>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className='container-fluid align-items-center p-0 w1400'>
        <div className="h120"></div>
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

      {/* Skills */}
      <div className="bg-standart2 w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
          <div className="h120"></div>
          <div className="d-flex justify-content-between">
            <div className='col-5 row align-items-center m-0 p-0'>
              <SectionHeader
              tinyDesc="Special Skills"
              longDesc="My Special Skill Field Here"
              />
              <Link href="/contact" passHref><div className="col-5 cursor text-white btn btn-outline-secondary rounded-pill p-4 fs-5 d-flex align-items-center justify-content-center"><span className='pe-2'> Get Resume </span><i className="fs-5 bi bi-download"></i></div></Link>
            </div>
            <div className='text-white col-6'>
              <SkillCard
                description='Communication'
                percentage={75}
              />
              <SkillCard
                description='Leadership'
                percentage={70}
              />
                            <SkillCard
                description='Problem Solving'
                percentage={90}
              />
              <SkillCard
                description='Flexibility'
                percentage={80}
              />
            </div>
          </div>
          <div className="h120"></div>
        </div>
      </div>

      {/* Counter */}
      <div className='container-fluid align-items-center p-0 w1400'>
        <CounterSection />
      </div>
    </>
  )
}

export default Home
