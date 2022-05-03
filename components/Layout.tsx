import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="layout w100vw">
        <Head>
          <title>Pedro Fagundes - Web solutions for your business.</title>
          <meta name="description" content="I am a web developer and I create web solution for you business." />
          <meta
            name="keywords"
            content="website development, web developer, web application, fullstack developer, fullstack web developer,
            website, site, online menu, menu, cardápio, web solution, online business, web system"
          />
        </Head>
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default Layout;
