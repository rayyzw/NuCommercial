import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import styles from "../styles/Search.module.css";
import { useAppContext } from "../components/Context";
import { formatCurrency } from "../components/Utilities";
import { Link } from "react-router-dom";

declare const window: any;

export default function Search() {
  const appContext = useAppContext();
  const [loading, setLoading] = React.useState(true);
  const [map, setMap] = React.useState();
  const [properties, setProperties] = React.useState([]);
  const [showFilters, setShowFilters] = React.useState(false);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const bingMap = document.getElementById("bingMap");
      if (bingMap) {
        const center =
          appContext.province === "BC"
            ? new window.Microsoft.Maps.Location(49.26038, -123.1134)
            : new window.Microsoft.Maps.Location(43.6487, -79.38544);

        const map = new window.Microsoft.Maps.Map(bingMap, {
          enableClickableLogo: false,
          enableSearchLogo: false,
          mapTypeId: window.Microsoft.Maps.MapTypeId.road,
          center: center,
          zoom: 12,
          showMapTypeSelector: false,
        });
        setMap(map);
      }
    }
  }, [loading, appContext]);

  React.useEffect(() => {
    if (map) {
      window.Microsoft.Maps.Events.addHandler(
        map,
        "viewchangeend",
        (e: any) => {
          console.log(e);
        }
      );
    }
  }, [map]);

  React.useEffect(() => {
    fetch("https://java-api.johome.com/api/Commercial/List", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        page: 1,
        perPage: 4,
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
          console.log(data.data[0]);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Layout>
      <>
        <Header />
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.title}>329 PROPERTIES</div>
            <div className={styles.row}>
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
              <button
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
              >
                Filters
              </button>
            </div>
            <div className={styles.row}>
              <div>Sort by:</div>
              <button>Date</button>
              <button>Price</button>
              <button>Size</button>
            </div>
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
            <div className={styles.footer}>
              <Link to="/">
                <div className={styles.logo}>&nbsp;</div>
              </Link>
              <div className={styles.row}>
                <div>
                  <h3>CONTACT US</h3>
                  <div className={styles.row}>
                    <div>
                      <h4>Burnaby (Headquarters)</h4>
                      #100-4555 Kingsway, Burnaby,
                      <br />
                      BC v5H 4T8
                      <br />
                      Office: 604 899 9999
                      <br />
                      Fax: 778 379 0785
                    </div>
                    <div>
                      <h4>Richmond</h4>
                      #1550 - 4380 No.3 Rd Richmond,
                      <br />
                      BC V6X 3V7
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div>
                      <h4>Toronto</h4>
                      140 York Boulevard, Richmond Hill, <br />
                      ON L4B 3J6
                      <br />
                      Office: 416 333 1111
                      <br />
                      Phone: 647 695 1188
                    </div>
                    <div>
                      <h4>Mississauga</h4>
                      Suite 22 Burnhamthorpe Rd W,
                      <br />
                      ON L5C 4G4
                    </div>
                  </div>
                </div>
                <div>
                  <h3>OUR AFFILIATIONS</h3>
                  <h4>
                    <a href="Johome.com" style={{ color: "#ffffff" }}>
                      Johome.com
                    </a>
                  </h4>
                  <h4>
                    <a href="Nustreamrealty.com" style={{ color: "#ffffff" }}>
                      Nustreamrealty.com
                    </a>
                  </h4>
                </div>
              </div>
              <div style={{height:"15px"}}></div>
              <div>
                *Nu Stream Commercial is a division of Nu Stream Realty INC.
              </div>
              <div>
                brokerages: British Columbia - NU STREAM REALTY INC., ontario -
                NU STREAM REALTY TORONTO INC.
              </div>
              <div>© 2023 nU STREAM REALTY INC. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
          <div className={styles.column}>
            <div
              style={{ height: "1500px", width: "860px", position: "relative" }}
            >
              <div id="bingMap"></div>
              {showFilters && (
                <div
                  style={{
                    height: "500px",
                    width: "500px",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backgroundColor: "#FBFBFB",
                    border: "1px solid #DEDEDE",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
                    padding: "10px",
                  }}
                >
                  sssssssssssssss
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
