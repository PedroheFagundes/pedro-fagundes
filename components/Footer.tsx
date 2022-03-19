import Image from 'next/image'
import Link from 'next/link';
import logo from '../public/logo.png'

const Footer = () => {
  return (
    <div className="h100 bg-standart text-white-50 d-flex container-fluid align-items-center p-0 w1400 justify-content-between ">
      <div className='text-center'>© 2022 Creted by Pedro Fagundes - <Link href="/" passHref>pedrofagundes.com</Link></div>
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
