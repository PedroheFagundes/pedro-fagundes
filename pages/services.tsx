import type { NextPage } from 'next'
import Link from 'next/link'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'

const Services: NextPage = () => {
  return (
    <>
        <div className="bg-standart-light w100vw">
        <div className='container-fluid align-items-center p-0 w1400'>
          <div className="h150"></div>
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
          <div className="h120"></div>

        </div>
      </div>
    </>
  )
}

export default Services
