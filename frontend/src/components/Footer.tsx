import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (    
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo}>&nbsp;</div>
      </Link>
      <div className={styles.row}>
        <div>
          <h3>CONTACT US</h3>
          <div className={styles.row} style={{ width: "1000px" }}>
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
      <div>*Nu Stream Commercial is a division of Nu Stream Realty INC.</div>
      <div>
        brokerages: British Columbia - NU STREAM REALTY INC., ontario - NU
        STREAM REALTY TORONTO INC.
      </div>
      <div>© 2023 nU STREAM REALTY INC. ALL RIGHTS RESERVED.</div>
    </div>
  );
}
