import React from 'react';
import styles from './Sectionh1.module.css';

const Sectionh1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>MADEWELL</h1>
          <p className={styles.subtitle}>Summer Collection</p>
          <div className={styles.priceWrapper}>
            <span className={styles.newPrice}>1,499</span>
            <span className={styles.oldPrice}>$1,999</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.outlinedButton}>SHOP NOW</button>
            <button className={styles.filledButton}>SHOP NOW</button>
          </div>
        </div>
        <div className={styles.right}>
          <img
            className={styles.image}
            src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png.webp"
            alt="Woman with coffee"
          />
        </div>
      </div>
    </section>
  );
};

export default Sectionh1;
