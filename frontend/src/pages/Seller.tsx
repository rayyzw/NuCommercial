import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import styles from "../styles/Seller.module.css";

export default function Seller() {
  return (
    <Layout>
      <>
        <Header />
        <h4>Home / For Seller</h4>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.banner}>
              <div className={styles.bannerText}>
                THINKING OF SELLING YOUR
                <br />
                COMMERCIAL PROPERTY?
                <br />
                WE WOULD LOVE TO HELP
              </div>
            </div>
            <div className={styles.title}>SELLING YOUR COMMERCIAL PROPERTY</div>
            <div>
              If you're looking to sell your commercial property, NU Commercial
              is the place to be. Our experienced team of brokers has a wealth
              of knowledge in real estate sales and can assist you in selling
              your property swiftly and at a great price. When you opt for NU
              Commercial, you'll be put in touch with a specialist immediately
              who will provide you with expert advice and support throughout the
              process. Don't settle for less--let NU Commercial handle all of
              your commercial real estate requirements!
            </div>
            <div className={styles.title}>OUR SERVICES</div>
          </div>
          <Contact />
        </div>
        <Footer />
      </>
    </Layout>
  );
}
