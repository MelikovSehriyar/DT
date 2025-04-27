import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.
          </p>

          <div className={styles.subscribe}>
            <h3>Subscribe</h3>
            <div className={styles.subscribeForm}>
              <input type="email" placeholder="Email" />
              <button>SEND</button>
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <div className={styles.linksColumns}>
            <ul>
              <li>Sell online</li>
              <li>Features</li>
              <li>Shopping cart</li>
              <li>Store builder</li>
            </ul>
            <ul>
              <li>Mobile commerce</li>
              <li>Dropshipping</li>
              <li>Website development</li>
              <li>Point of sale</li>
              <li>Hardware</li>
              <li>Software</li>
            </ul>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <ul>
            <li><FaMapMarkerAlt className={styles.icon}/> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li><FaPhoneAlt className={styles.icon}/> +2 392 3929 210</li>
            <li><FaEnvelope className={styles.icon}/> emailaddress@domain.com</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
