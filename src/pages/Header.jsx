import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2 className={styles.logos}>DEALERS</h2>
      </div>

      
      <div className={styles.burgerIcon} onClick={toggleMenu}>
        <FaBars className={styles.burger} />
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/collection">COLLECTION ▼</Link></li>
        <li><Link to="/shop">SHOP</Link></li>
        <li><Link to="/catalogs">CATALOGS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <div className={styles.icons}>
        <FaSearch className={styles.icon} />
        <FaHeart className={styles.iconh} />
        <div className={styles.cartWrapper}>
          <FaShoppingCart className={styles.icon} />
          <span className={styles.cartCount}>2</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
