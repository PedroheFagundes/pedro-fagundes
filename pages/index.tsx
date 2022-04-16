import React from "react";
import type { NextPage } from 'next'
import Link from 'next/link'
import CounterSection from '../components/CounterSection'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import SkillCard from '../components/SkillCard'
import SocialCard from '../components/socialCard'
import TestimonialCard from '../components/TestimonialCard'
import { saveAs } from "file-saver";

function resumeDownload() {
  const saveFile = () => {
    saveAs(
      "/pedro-fagundes-resume.pdf",
      "Pedro-Fagundes-esume.pdf"
    );
  };
  return (
    <div className=" mt-5 cursor d-flex justify-content-start" onClick={saveFile}>
      <span className='col-md-5 col-lg-4 p-4 btn btn-outline-secondary rounded-pill text-white fs-3 fw-bold'> Get Resume <i className="px-1 fs-5 bi bi-download"></i> </span>
      
    </div>
  );
}

const Home: NextPage = () => {

  return (
    <>
    {/* Home */}
      <div className='container-fluid align-items-center p-0 col-11 col-sm-11 col-md-11 col-xl-10'>
        <div className="h120"></div>
        <div className='text-white home-cover d-flex align-items-center justify-content-around'>
          <div className="row m-0">
            <div className="col-md-12 col-lg-10 p-0">
              <div className="row m-0">
                <h3 id="home-hello" className="text-white secondary-font p-0">Hello! I{"'"}m</h3>
                <h1 id='home-name' className="text-white main-font overflow-hidden mb-5 p-0">Pedro Fagundes</h1>
                <p className='text-white-50 fs-2 m-0 p-0'>Fullstack Web Developer</p>
                <p className='text-white-50 fs-4 mb-5 p-0'>I create websites and web applications for your projects!</p>
                {resumeDownload()}
              </div>
            </div>
            <div className="col-md-12 col-lg-2 d-flex align-items-center text-white-50 pt-5">
              <div id="home-socials-desktop" className="row col-12 col-sm-12 col-md-12 d-flex align-items-center justify-content-around">
                <SocialCard
                icon='linkedin'
                  link='https://www.linkedin.com/in/pedrofagundes/'
                  name='LinkedIn'
                />
                <SocialCard
                  icon='github'
                  link='https://github.com/PedroheFagundes'
                  name='Github'
                />
                <SocialCard
                  icon='envelope-fill'
                  link='mailto:pedrohefagundes@gmail.com'
                  name='E-Mail'
                />
                <SocialCard
                  link='https://www.upwork.com/freelancers/~0189cabd19217d74f9'
                  icon='code-slash'
                  name='UpWork'
                />
              </div>
              <div id="home-socials-mobile" className="col-12 col-sm-12 col-md-12 d-flex align-items-center justify-content-around">
                <SocialCard
                icon='linkedin'
                  link='https://www.linkedin.com/in/pedrofagundes/'
                  name='LinkedIn'
                />
                <SocialCard
                  icon='github'
                  link='https://github.com/PedroheFagundes'
                  name='Github'
                />
                <SocialCard
                  icon='envelope-fill'
                  link='mailto:pedrohefagundes@gmail.com'
                  name='E-Mail'
                />
                <SocialCard
                  link='https://www.upwork.com/freelancers/~0189cabd19217d74f9'
                  icon='code-slash'
                  name='UpWork'
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden col text-white h100 row hover-arrow"><span className='d-flex justify-content-center align-items-end'>Services</span><i className="d-flex justify-content-center bi bi-arrow-down stretched-text"></i></div>
      </div>

      {/* Services */}
      <div className="bg-standart-light w100vw">
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
              desc3='Content Pages'
              desc4='Clean Design'
              desc5='Good SEO'
            />
            <ServiceCard
              icon='bi-calendar-check'
              title='Self-scheduling System'
              desc1='Great client experience'
              desc2='Easy online schedule'
              desc3='Online services managment'
              desc4='Good SEO'
              desc5='Time saver'
            />
            <ServiceCard
              icon='bi-bag-check'
              title='Online Menu'
              desc1='Home Page'
              desc2='Easy browsing'
              desc3='Great Client Experience'
              desc4='Fast content management'
              desc5='Time saver'
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
      <div className="bg-standart-light w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
          <div className="h120"></div>
          <div className="d-flex justify-content-between">
            <div className="col-7 row align-items-center m-0 p-0">
            <div className='col-8'>
              <SectionHeader
              tinyDesc="Special Skills"
              longDesc="My Special Skill Field Here"
              />
              </div>
            <div className='col-12'>
              {resumeDownload()}
            </div>
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
      <div className="bg-standart-medium w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
          <CounterSection />
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className='container-fluid align-items-center p-0 w1400'>
        <div className="h120"></div>
        <div className="d-flex justify-content-around">
          <TestimonialCard
            description='Lorem ipsum dolor sit amet. Offis iure esse possimus nobis sit officia voluptates, rem vero minus consectetur.'
            name='Jhonny B. Good'
            role='CEO'
            company='B.Businness'
          />
          <div className='align-items-center column'>
            <SectionHeader
              tinyDesc="Testimonials"
              longDesc="Satisfied Clients Say"
            />
            <TestimonialCard
              description='Lorem ipsum dolor sit amet. Offis iure esse possimus nobis sit officia voluptates, rem vero minus consectetur.'
              name='Jhonny B. Good'
              role='CEO'
              company='B.Businness'
            />
          </div>
        </div>
        <div className="h120"></div>
      </div> */}

      {/* Clients */}
      <div className="bg-standart-light w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
        <div className="h120"></div>
        <div className="column justify-content-center align-items-center">
          <SectionHeader
            tinyDesc="Stay in touch"
            longDesc="Let's talk about a solution for you project!"
          />
          <Link href="/contact" passHref><div className="col-3 cursor text-white btn btn-outline-secondary rounded-pill p-3 fw-bold fs-5 d-flex align-items-center justify-content-center"><span className='pe-2'> Start Conversation </span><i className="bi bi-caret-right"></i></div></Link>
        </div>
        <div className="d-flex justify-content-center align-items-center text-white-50">
          <SocialCard
            link='https://www.linkedin.com/in/pedrofagundes/'
            margin={5}
            icon='linkedin'
            name='LinkedIn'
          />
          <SocialCard
            link='https://github.com/PedroheFagundes'
            margin={5}
            icon='github'
            name='Github'
          />
          <SocialCard
            link='mailto:pedrohefagundes@gmail.com'
            margin={5}
            icon='envelope-fill'
            name='E-Mail'
          />
          <SocialCard
            link='https://www.upwork.com/freelancers/~0189cabd19217d74f9'
            margin={5}
            icon='code-slash'
            name='UpWork'
          />
        </div>
        <div className="h30"></div>
        </div>
      </div>
    </>
  )
}

export default Home
