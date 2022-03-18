import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: FC = ({ children }) => {
  return (
    <div className="layout w100vw">
        <Head>
          <title>Pedro Fagundes</title>
        </Head>
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default Layout;
