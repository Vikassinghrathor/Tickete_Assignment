import React from 'react';
import classes from './Footer.module.css';
import Logo from '../../assets/Company_Logo.svg';

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <img src={Logo} alt='error' className={classes.logo} />
        <hr />
        <div className={classes.footerLinks}>
          <span className={classes.footerLink}>Made in heart</span>
          <span className={classes.footerLink}>Privacy policy</span>
          <span className={classes.footerLink}>Terms of usage</span>
          <span className={classes.footerLink}>Cancellation policy</span>
          <span className={classes.footerLink}>Sitemap</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
