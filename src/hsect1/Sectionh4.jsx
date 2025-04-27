import React from "react";
import styles from "./Sectionh4.module.css";

const Sectionh4 = () => {
  const bgImage = "https://preview.colorlib.com/theme/dealers/images/model_5.png.webp";

  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img src={bgImage} alt="Model Woman" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <h5>#NEW SUMMER COLLECTION 2019</h5>
        <h1>New Denim Coat</h1>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Sectionh4;
