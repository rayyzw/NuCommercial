import React from "react";
import styles from "../styles/Contact.module.css";
import { API_URL } from "./CONSTS";

export default function Contact() {
  const [mail, setMail] = React.useState<{ [key: string]: string }>({});
  return (
    <div className={styles.container}>
      <div className={styles.title}>CONTACT US</div>
      <div className={styles.form}>
        <div>OFFICE</div>
        <select placeholder="Select Our Office">
          <option disabled>Select Our Office</option>
          <option value="B.C. Office">B.C. Office</option>
          <option value="O.N. Office">O.N. Office</option>
        </select>
        <div>FIRST NAME</div>
        <input
          type="text"
          name="firstname"
          placeholder="Please enter your first name"
          onChange={(e) => {
            setMail({ ...mail, firstname: e.target.value });
          }}
        />
        <div>LAST NAME</div>
        <input
          type="text"
          name="lastname"
          placeholder="Please enter your last name"
          onChange={(e) => {
            setMail({ ...mail, lastname: e.target.value });
          }}
        />
        <div>EMAIL</div>
        <input
          type="text"
          name="email"
          placeholder="Your email address"
          onChange={(e) => {
            setMail({ ...mail, email: e.target.value });
          }}
        />
        <div>PHONE</div>
        <input
          type="text"
          name="phone"
          placeholder="Your contact phone"
          onChange={(e) => {
            setMail({ ...mail, phone: e.target.value });
          }}
        />
        <div>COMPANY</div>
        <input
          type="text"
          name="company"
          placeholder="Your company"
          onChange={(e) => {
            setMail({ ...mail, company: e.target.value });
          }}
        />
        <div>MESSAGE</div>
        <textarea
          name="message"
          placeholder="Please enter your question here"
          onChange={(e) => {
            setMail({ ...mail, message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            console.log(JSON.stringify(mail));
            const to = "zewei.yang@nustreamrealty.com";
            const from = "zewei.yang@nustreamrealty.com";
            const cc = undefined; //"zewei.yang@nustreamrealty.com";
            const bcc = undefined; //"zewei.yang@nustreamrealty.com";
            const subject = "Contact Us From NuCommercial";
            const text = JSON.stringify(mail);
            let html =
              '<table style="width:100%;border: 1px solid;border-collapse: collapse;">';

            for (const key of Object.keys(mail)) {
              if (mail[key]) {
                html =
                  html +
                  '<tr><td style="width:40%;border: 1px solid;border-collapse: collapse;">' +
                  key +
                  '</td><td style="width:60%;border: 1px solid;border-collapse: collapse;">' +
                  mail[key] +
                  "</td></tr>";
              }
            }

            html = html + "</table>";
            fetch(`${API_URL}/mail`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Token: String(localStorage.getItem("userToken")),
              },
              body: JSON.stringify({ from, to, cc, bcc, subject, text, html }),
            })
              .then((res) => res.json())
              .then((json) => {
                if (json.error) {
                  console.log("failed");
                } else {
                  console.log("sent");
                }
              });
          }}
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}
