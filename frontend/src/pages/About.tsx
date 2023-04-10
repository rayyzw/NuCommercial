import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";
import Contact from "../components/Contact";
import Modal from "../components/Modal";

export default function About() {
  const [modal, setModal] = React.useState<React.ReactNode | null>(null);

  React.useEffect(() => {
    if(modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <Layout>
      <>
        <Header />
        <h4>Home / About Us</h4>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.banner}></div>
            <div className={styles.title}>ABOUT US</div>
            <div>
              Nu Commercial is the ultimate destination for all your commercial
              real estate needs. Our online platform makes it simple to find the
              ideal commercial property for your business needs. We have a vast
              array of commercial listings, including MLS and off-market
              properties. Our user-friendly For Seller and For Buyer sections
              cater to anyone seeking to buy, sell, or lease commercial
              properties. With our experienced team, you won't miss out on any
              opportunities to maximize your commercial real estate investments.
              Contact us now to start your search and take your business to new
              heights!
            </div>
            <div className={styles.title}>OUR TEAM</div>
            <div className={styles.row}>
              <img
                src={require("../images/wells.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Wells Peng</div>
                <div>Founder & CEO</div>
                <div className={styles.description}>
                  Wells Peng graduated from a prestigious university in China
                  with a degree in Mathematics and later obtained an EMBA from
                  the Cheung Kong Graduate School of Business. He worked for 11
                  years at Lenovo, serving as department general manager for 8
                  years, and participated in investment and acquisition
                  projects.
                  <br />
                  In 2006, he immigrated to Vancouver, Canada and became one of
                  the ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/wells.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Wells Peng</div>
                        <div>Founder & CEO</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Wells Peng graduated from a prestigious university in
                          China with a degree in Mathematics and later obtained
                          an EMBA from the Cheung Kong Graduate School of
                          Business. He worked for 11 years at Lenovo, serving as
                          department general manager for 8 years, and
                          participated in investment and acquisition projects.
                          <br />
                          In 2006, he immigrated to Vancouver, Canada and became
                          one of the earliest real estate brokers to focus on
                          West Vancouver since 2007.
                          <br />
                          He has sold properties worth over CAD 500 million and
                          is a recipient of the Vancouver Real Estate Board's
                          Gold Award in Medallion Club.
                          <br />
                          In 2015, he founded "Nu Stream Realty" in Vancouver,
                          which attracted investments from Lenovo, IDG Capital,
                          Xiaomi, and many well-known IT and investment
                          investors.
                          <br />
                          With a team model, the company opened up the Greater
                          Vancouver area market and replicated the model in
                          Toronto. Currently, the company has over 700
                          practicing realtors and more than 30 teams, with
                          cumulative sales volume of CAD 16.7 billion, covering
                          various markets.
                          <br />
                          The company's biggest feature is to make talented
                          people even better through a close-knit large team
                          model, and to help clients buy and sell properties
                          quickly and effectively with strong support.
                          <br />
                          With powerful marketing tools, Nu Stream Realty aims
                          to become the most innovative and fastest-growing real
                          estate brokerage company in the Greater Vancouver
                          area.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/sonya.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Sonya Jakovickos</div>
                <div>Manager Broker , Vancouver</div>
                <div className={styles.description}>
                  Sonya has extensive experience in the real estate industry and
                  has been licensed since 1994. Sonya has worked as a Chief
                  Compliance Officer and Managing Broker at Nu Stream Realty
                  Inc. since May 2018. In this role, she manages over 500
                  REALTORS® and 25 support staff while ensuring compliance with
                  regulatory bodies such as BCFSA the Greater Vancouver Real
                  Estate, FINTRAC, etc. Prior to her current position, Sonya
                  spent six years as a Legislative Investigator ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/sonya.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Sonya Jakovickos</div>
                        <div>Manager Broker , Vancouver</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Sonya has extensive experience in the real estate
                          industry and has been licensed since 1994. Sonya has
                          worked as a Chief Compliance Officer and Managing
                          Broker at Nu Stream Realty Inc. since May 2018. In
                          this role, she manages over 500 REALTORS® and 25
                          support staff while ensuring compliance with
                          regulatory bodies such as BCFSA the Greater Vancouver
                          Real Estate, FINTRAC, etc. Prior to her current
                          position, Sonya spent six years as a Legislative
                          Investigator at the Real Estate Council of BC (now
                          BCFSA), where she gained valuable knowledge and
                          expertise in the industry. In 2021, Sonya also
                          completed an Executive MBA program at the Beedie
                          School of Business at Simon Fraser University. Her
                          experience, education, and expertise make her a
                          valuable asset to any real estate team.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/walter.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Walter Lui</div>
                <div>Manager Broker , Toronto</div>
                <div className={styles.description}>
                  Walter Lui, CCIM is a specialist in Commercial Real Estate,
                  and licensed as a Real Estate Broker in Ontario Canada. Walter
                  is also a Certified International Property Specialist,
                  Certified Property Manager, Fellow of Real Estate Institute,
                  Seniors Real Estate Specialist and Certified Real Estate
                  Specialist. Walter has been licensed 38 years in real estate
                  sales, leasing and management in both commercial and
                  residential real estate. ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/walter.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Walter Lui</div>
                        <div>Manager Broker , Toronto</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Walter Lui, CCIM is a specialist in Commercial Real
                          Estate, and licensed as a Real Estate Broker in
                          Ontario Canada. Walter is also a Certified
                          International Property Specialist, Certified Property
                          Manager, Fellow of Real Estate Institute, Seniors Real
                          Estate Specialist and Certified Real Estate
                          Specialist. Walter has been licensed 38 years in real
                          estate sales, leasing and management in both
                          commercial and residential real estate.
                          <ul>
                            <li>
                              Certified International Property Specialist (CIPS)
                              November 2017
                            </li>
                            <li>
                              CCIM JWL Graduate 2014 • Certified Property
                              Manager (CPM®) December 2013 • Institute of Real
                              Estate Management (IREM) Member since November
                              2012 • Certified Commercial Investment Member
                              (CCIM) October 2011 • Fellow of Real Estate
                              Institute (FRI) designation in 2008 • Certified
                              Real Estate Specialist (CRES) designation in 2008
                              • Real Estate Broker License in 1990 • Real Estate
                              Sales Representative License in 1984 Specialties:
                              Industrial, Commercial, Investment Sales Leasing
                              and Management • CCIM Region 12 Vice-President
                              2018 & 2019
                            </li>
                            <li>CCIM Institute Director-at-large 2020-2021</li>
                            <li>CCIM Governance Committee member 2020-2021</li>
                            <li>
                              CCIM Foundation Treasurer and Director-at-large
                              2020-2021 • Real Estate Institute of Canada
                              National Board of Director 2020-2021 • Canadian
                              Real Estate Association Commercial Council Member
                              • Toronto Real Estate Board Commercial Council
                              Member 2020-2021 • Toronto Real Estate Board
                              Arbitration Committee Panel 202020-2021 • Toronto
                              Real Estate Board Arbitration Committee Mediator
                              2020-2021
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/grace.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Grace Li</div>
                <div>Senior Vice President Commercial , Vancouver</div>
                <div className={styles.description}>
                  Very cultured, well travelled, intelligent and positive
                  professional with a varied backgrounds in Real Estate,
                  Architecture, Sales and Business.
                  <br />
                  With over 10 years' sales experience and business stretching
                  from Architecture to Real Estate, Grace has been blessed to
                  learn numerous aspects of home | commercial development,
                  including Design, Sales & Marketing, Interior Decoration and
                  Leasing. Now she has built a professional team ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/grace.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Grace Li</div>
                        <div>Senior Vice President Commercial , Vancouver</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Very cultured, well travelled, intelligent and
                          positive professional with a varied backgrounds in
                          Real Estate, Architecture, Sales and Business.
                          <br />
                          With over 10 years' sales experience and business
                          stretching from Architecture to Real Estate, Grace has
                          been blessed to learn numerous aspects of home |
                          commercial development, including Design, Sales &
                          Marketing, Interior Decoration and Leasing. Now she
                          has built a professional team specializes in
                          Commercial | Industrial Sales, such as Land Assembly /
                          Acquisition, Development Site, Warehouse,
                          Multi-family, LP investment, Retail and Project
                          Marketing.
                          <br />
                          She is familiar with OCP, City Plan, Drawings, Land
                          Use Strategy, Proforma, Development Application,
                          Financing and Land Assembly Procedures, has extensive
                          connections with developers, investors and city
                          planners, most of her listings sold with highest
                          price.
                          <br />
                          Her numerous commercial listings cover large
                          development project sales, industrial, warehouse, LP
                          and retail space, etc. With our unbeatable marketing &
                          media resources and massive client's database, she is
                          delighted to help clients manage investment portfolio
                          to increase fortune and achieve their Real Estate
                          goals.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/anna.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Anna Zhang</div>
                <div>VP Commercial I Founding Partner , Vancouver</div>
                <div className={styles.description}>
                  Anna Zhang joined Nu Stream Realty since the beginning as one
                  of the Founding Partners. As VP Commercial, Anna Zhang and her
                  commercial team had successfully conducted deals in differ
                  sectors, including construction developments, large offices,
                  warehouse buildings, farms, winery, hotels, and business
                  transactions etc.
                  <br />
                  Prior to Nu Stream, Anna was working in one of the biggest
                  banks in ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/anna.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Anna Zhang</div>
                        <div>VP Commercial I Founding Partner , Vancouver</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Anna Zhang joined Nu Stream Realty since the beginning
                          as one of the Founding Partners. As VP Commercial,
                          Anna Zhang and her commercial team had successfully
                          conducted deals in differ sectors, including
                          construction developments, large offices, warehouse
                          buildings, farms, winery, hotels, and business
                          transactions etc.
                          <br />
                          Prior to Nu Stream, Anna was working in one of the
                          biggest banks in Canada for over 10 years, and running
                          her consulting business for many years as well.
                          Combining over 20 years of experiences in financing
                          and business consulting, which bring necessary
                          background for her to successfully complete large and
                          sophisticated commercial transactions.
                          <br />
                          Today Anna Zhang Commercial Team had also grouped a
                          team of young and ambitions members that are also
                          willing to develop in commercial transaction areas.
                          With the more diverse background of our members, our
                          team will be able to serve our clients’ needs in a
                          more efficient and professional way.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/nelson.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Nelson Zhao</div>
                <div>Commercial Broker , Toronto</div>
                <div className={styles.description}>
                  Nelson Zhao, Broker, MBA, FRI, are professionals who help
                  businesses, investors, and developers buy, sell, lease, or
                  manage commercial properties. Focus on real estate that is
                  used for business purposes, such as office buildings, retail
                  spaces, warehouses, industrial facilities, and land.
                  <br />
                  Nelson Zhao and his team typically specialize in a particular
                  type of property, location, or industry, and they use their
                  knowledge and expertise to ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/nelson.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Nelson Zhao</div>
                        <div>Commercial Broker , Toronto</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Nelson Zhao, Broker, MBA, FRI, are professionals who
                          help businesses, investors, and developers buy, sell,
                          lease, or manage commercial properties. Focus on real
                          estate that is used for business purposes, such as
                          office buildings, retail spaces, warehouses,
                          industrial facilities, and land.
                          <br />
                          Nelson Zhao and his team typically specialize in a
                          particular type of property, location, or industry,
                          and they use their knowledge and expertise to assist
                          clients with their real estate needs. They help
                          clients find suitable properties that meet their
                          specific requirements, negotiate deals, and provide
                          guidance throughout the transaction process.
                          <br />
                          Nelson Team also provide advisory services to clients,
                          such as market analysis, property valuation, and
                          feasibility studies. They stay up-to-date with market
                          trends and conditions, and they use this knowledge to
                          advise clients on the best course of action to take.
                          <br />
                          If you're a business owner, investor, or developer who
                          needs assistance with commercial real estate, Nelson
                          Team can help you navigate the complex world of
                          commercial real estate and help you achieve your
                          goals.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/nevin.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Nevin L. Low</div>
                <div>Commercial Broker , Vancouver</div>
                <div>Nevin L. Low Personal Real Estate Corporation</div>
                <div className={styles.description}>
                  Since 2016, Nevin Low joined NU Stream Realty Inc. as
                  Executive Vice President, Commercial Division and Associate
                  Broker. Nevin has been a Realtor and/or Associate Broker since
                  1989 and is involved in all areas of commercial and
                  residential real estate for both individual properties and
                  portfolios ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/nevin.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Nevin L. Low</div>
                        <div>Commercial Broker , Vancouver</div>
                        <div>Nevin L. Low Personal Real Estate Corporation</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Since 2016, Nevin Low joined NU Stream Realty Inc. as
                          Executive Vice President, Commercial Division and
                          Associate Broker. Nevin has been a Realtor and/or
                          Associate Broker since 1989 and is involved in all
                          areas of commercial and residential real estate for
                          both individual properties and portfolios – including
                          land sales and assembly, land development projects,
                          commercial & industrial sales and leasing, commercial
                          & industrial investment and consulting, residential
                          sales, residential/commercial/mixed use development
                          projects and international client representation.
                          Depending on the work assignment in representing the
                          Vendor or Purchaser / Landlord or Tenant, Nevin
                          collaborates together with his industry colleagues to
                          best maximize service for clients in the listing and
                          sale and/or purchase or leasing of properties.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <img
                src={require("../images/noah.png")}
                alt=""
                className={styles.image}
              />
              <div className={styles.column}>
                <div className={styles.title}>Noah Zhang</div>
                <div>Commercial Broker , Toronto</div>
                <div className={styles.description}>
                  Noah Zhang is an accomplished Commercial Real Estate
                  professional with over 12 years of experience serving clients
                  in the Toronto Real Estate market. He is widely recognized as
                  a trusted and respected name in the industry, owing to his
                  unwavering commitment to professionalism and his exceptional
                  ability to understand and cater to his clients' business
                  needs.
                  <br />
                  Specializing in Commercial properties and retail sales and
                  leasing ...
                </div>
                <div
                  className={styles.more}
                  onClick={() => {
                    setModal(
                      <div
                        className={styles.column}
                        style={{ alignItems: "center" }}
                      >
                        <img
                          src={require("../images/noah.png")}
                          alt=""
                          className={styles.image}
                        />
                        <div className={styles.title}>Noah Zhang</div>
                        <div>Commercial Broker , Toronto</div>
                        <div
                          className={styles.description}
                          style={{ width: "800px" }}
                        >
                          Noah Zhang is an accomplished Commercial Real Estate
                          professional with over 12 years of experience serving
                          clients in the Toronto Real Estate market. He is
                          widely recognized as a trusted and respected name in
                          the industry, owing to his unwavering commitment to
                          professionalism and his exceptional ability to
                          understand and cater to his clients' business needs.
                          <br />
                          Specializing in Commercial properties and retail sales
                          and leasing in the Greater Toronto Area (GTA), Noah is
                          renowned for his commitment to transparency,
                          enthusiasm, and in-depth market research. He is
                          dedicated to understanding his clients' unique
                          objectives and tailors his approach to every
                          transaction to ensure their success.
                          <br />
                          Additionally, Noah has an extensive portfolio of
                          active commercial listings, ranging from office spaces
                          to restaurants, as well as a highly sought-after
                          exclusive listing valued at over millions. With his
                          keen market insight and astute understanding of the
                          unique requirements of his clients, Noah is
                          well-equipped to facilitate successful transactions
                          for a diverse range of commercial properties in the
                          Greater Toronto Area. His exceptional track record of
                          results and reputation for excellence make him a
                          highly sought-after professional in the commercial
                          real estate industry.
                          <br />
                          Noah's resourcefulness in finding innovative
                          solutions, his tireless efforts in navigating the
                          complexities of the real estate transaction, and his
                          unyielding patience have earned him a reputation for
                          excellence among his clients. He values building
                          strong and friendly relationships with clients over
                          just securing a sale, resulting in repeat business and
                          unwavering client trust.
                        </div>
                      </div>
                    );
                  }}
                >
                  Show More
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </div>
        {modal && (
          <Modal
            onClick={() => {
              setModal(null);
            }}
          >
            {modal}
          </Modal>
        )}
        <Footer />
      </>
    </Layout>
  );
}
