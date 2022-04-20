import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'

const Footer = () => {
  return (
    <div className="h100 bg-standart text-white-50 d-flex container-fluid align-items-center p-0 justify-content-between col-11 col-sm-11 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
      <div className='text-center'>© 2022 Created by Pedro Fagundes - <Link href="/" passHref>pedrofagundes.com</Link></div>
      <Image
          src={logo}
          className='col-1 text-white cursor img-white'
          alt="monogram"
          width={60}
          height={60}
        />
    </div>
  )
}

export default Footer;
