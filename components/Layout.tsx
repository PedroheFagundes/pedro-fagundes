import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="layout w100vw">
        <Head>
          <title>Pedro Fagundes - Fullstack Web Developer</title>
          <meta name="description" content="I am a web devolper and I can build for your project the right website or web application." />
          <meta name="keywords" content="website development, web developer, web application, fullstack developer, fullstack web developer"></meta>
        </Head>
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default Layout;
