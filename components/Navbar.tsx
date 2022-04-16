import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { useState } from 'react';

const Navbar = () => {

  const [openedNavBar, setOpenedNavBar] = useState(false);
  const [chosenPage, setChosenPage] = useState("Home");

  const setPage = (pageName: string) => {
    setChosenPage(pageName);
    toggleNavBar();
  }

  const toggleNavBar = () => {
    openedNavBar ? setOpenedNavBar(false) : setOpenedNavBar(true);
  }

  return (
    <div className="bg-standart navbar fixed-top p-0">
      <div className="container-fluid d-flex justify-content-between h120 align-items-center text-centerp-0 col-11 col-sm-11 col-md-11 col-lg-11 col-xl-10">
        <Link href="/" passHref>
          <Image
            src={logo}
            id='nav-bar-logo'
            className='col-md-3 text-white cursor img-white'
            alt="monogram"
            width={60}
            height={60}
          />
        </Link>
        {/* Desktop */}
        <div className='col-lg-6 col-xl-5 text-white-50 fs-5'>
          <div id='nav-bar-options' className="row">
            <Link href="/" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Home</div></Link>
            <Link href="/services" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Services</div></Link>
            <Link href="/projects" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Projects</div></Link>
            <Link href="/contact" passHref><div className='col cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>Contact</div></Link>
            <Link href="/about" passHref><div className='col-lg-3 col-xl-3 cursor hover-white hover-bg-string h120 d-flex align-items-center justify-content-center'>About Me</div></Link>
          </div>
        </div>
        <Link href="/contact" passHref><div id="nav-bar-hire-me" className="col-2 cursor text-white btn btn-outline-secondary rounded-pill p-3 fw-bold fs-5 d-flex align-items-center justify-content-center"><span className='pe-2'> Hire Me </span><i className="bi bi-caret-right"></i></div></Link>
        {/* Mobile */}
        <div id='nav-bar-selected' className='col p-0 fs-1 text-white d-flex align-items-center justify-content-center'>{chosenPage}</div>
        <div id='nav-bar-burguer-menu' onClick={() => toggleNavBar()} className='col-md-3 m-0 w40 h40 d-flex row justify-content-between'><div className='bg-white h10 rounded'></div><div className='bg-white h10 rounded'></div><div className='bg-white h10 rounded'></div></div>
      </div>
      {openedNavBar?
      <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 text-white-50 fs-1'>
        <Link href="/" passHref><div onClick={() => setPage(("Home"))} className='col cursor hover-white hover-bg-string h70 d-flex align-items-center justify-content-center'>Home</div></Link>
        <Link href="/services" passHref><div onClick={() => setPage(("Services"))} className='cursor hover-white hover-bg-string h70 d-flex align-items-center justify-content-center'>Services</div></Link>
        <Link href="/projects" passHref><div onClick={() => setPage(("Projects"))} className='cursor hover-white hover-bg-string h70 d-flex align-items-center justify-content-center'>Projects</div></Link>
        <Link href="/contact" passHref><div onClick={() => setPage(("Contact"))} className='cursor hover-white hover-bg-string h70 d-flex align-items-center justify-content-center'>Contact</div></Link>
        <Link href="/about" passHref><div onClick={() => setPage(("About Me"))} className='cursor hover-white hover-bg-string h70 d-flex align-items-center justify-content-center'>About Me</div></Link>
        <Link href="/contact" passHref><div onClick={() => setPage(("Contact"))} className="cursor d-flex align-items-center justify-content-center"><span className='px-5 text-white btn btn-outline-secondary rounded-pill fw-bold fs-1'> Hire Me <i className="bi bi-caret-right"></i></span></div></Link>
        <div className="h30"></div>
        
      </div> : null}
    </div>
  )
}

export default Navbar;
