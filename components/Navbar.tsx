import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const Navbar = () => {
  return (
    <div className="h120 bg-standart navbar fixed-top p-0">
      <div className="container-fluid d-flex justify-content-between h120 align-items-center text-center p-0 w1400">
        <Link href="/" passHref>
          <Image
            src={logo}
            className='col-1 text-white cursor img-white'
            alt="monogram"
            width={60}
            height={60}
          />
        </Link>
        <div className='col-5 text-white-50 fs-5'>
          <div className="row md-5">
            <Link href="/" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Home</div></Link>
            <Link href="/services" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Services</div></Link>
            <Link href="/projects" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Projects</div></Link>
            <Link href="/about" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>About Me</div></Link>
            <Link href="/contact" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Contact</div></Link>
          </div>
        </div>
        <Link href="/contact" passHref><div className="col-2 cursor text-white btn btn-outline-secondary rounded-pill p-3 fw-bold fs-5 d-flex align-items-center justify-content-center"><span className='pe-2'> Hire Me </span><i className="bi bi-caret-right"></i></div></Link>
      </div>
    </div>
  )
}

export default Navbar;
