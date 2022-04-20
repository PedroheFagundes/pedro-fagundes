import type { NextPage } from 'next'
import Link from 'next/link'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'

const Services: NextPage = () => {
  return (
    <>
        <div className="bg-standart-light">
        <div className='container-fluid align-items-center p-0 col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 col-xxl-10'>
          <div className="h150"></div>
          <SectionHeader
            tinyDesc="My Services"
            longDesc="Service Provide For My Clients"
          />
          <div id="services-card-container" className="d-flex m-0 col-12 row justify-content-between align-items-center">
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
              title='Scheduling System'
              desc1='Great client experience'
              desc2='Easy online schedule'
              desc3='Services management'
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
