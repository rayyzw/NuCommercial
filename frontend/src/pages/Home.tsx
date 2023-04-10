import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { formatCurrency } from "../components/Utilities";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useAppContext } from "../components/Context";

export default function Home() {
  const appContext = useAppContext();
  const [properties, setProperties] = React.useState([]);

  React.useEffect(() => {
    fetch("https://java-api.johome.com/api/Commercial/List", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        page: 1,
        perPage: 10,
        columns: {
          language: "cn",
          source: "2",
          ListPrice: "0",
          commercialmode: "0",
          Bedrooms: "0",
          TotalArea: "0",
          Area: "",
          start_listprice: "",
          end_listprice: "",
          parkingspaces: "",
          businesstype: "",
          type: "",
          start_totalarea: "",
          end_totalarea: "",
        },
        orderby: "lastupdated DESC",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.isError) {
          setProperties(data.data);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Layout>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logo}>&nbsp;</div>
        </Link>
        <div className={styles.links}>
          <Link to="/" className={styles.navMenu}>
            Home
          </Link>
          <Link to="/search" className={styles.navMenu}>
            Property Search
          </Link>
          <Link to="/seller" className={styles.navMenu}>
            For Seller
          </Link>
          <Link to="/about" className={styles.navMenu}>
            About Us
          </Link>
        </div>
        <div className={styles.search}>
          <select defaultValue={appContext.province}>
            <option disabled>Province</option>
            <option>BC</option>
            <option>ON</option>
          </select>
          <select>
            <option disabled>City</option>
            <option>Vancouver</option>
            <option>Burnaby</option>
          </select>
          <select>
            <option disabled>Area</option>
            <option>BC</option>
            <option>ON</option>
          </select>
          <select>
            <option disabled>Listing Type</option>
            <option>For Sale</option>
            <option>For Lease</option>
          </select>
          <select>
            <option disabled>Property Type</option>
            <option>BC</option>
            <option>ON</option>
          </select>
          <button>Search</button>
        </div>
      </div>
      <div className={styles.title}>Our Featured Listing</div>
      <div className={styles.flexWraper}>
        {properties.map((p) => (
          <div key={`property-${p["id"]}`} className={styles.paper}>
            <img
              src={String(p["pic"]).replace("@!sm", "")}
              alt=""
              className={styles.image}
            ></img>
            <div className={styles.row}>
              {p["islease"] ? (
                <div
                  className={styles.label}
                  style={{ backgroundColor: "#4260CC" }}
                >
                  For Sale
                </div>
              ) : (
                <div
                  className={styles.label}
                  style={{ backgroundColor: "#47AC3A" }}
                >
                  For Lease
                </div>
              )}
              <div
                className={styles.label}
                style={{ backgroundColor: "#B3B8E6" }}
              >
                {p["businesstype"]}
              </div>
            </div>
            <div className={styles.price}>
              {Number(p["listPrice"]) === 1
                ? "询价"
                : formatCurrency(Number(p["listPrice"]))}
            </div>
            <div className={styles.address}>
              {p["address"]}
              <br />
              {p["areaName"]}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}
