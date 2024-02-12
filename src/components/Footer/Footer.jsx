import React from 'react';
import classes from './Footer.module.css';
import FooterImg from './FooterImg';

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <FooterImg style={{padding: '100px'}}/>
        <hr style={{border: '1px solid #3C3F44' , marginTop: '100px'}} />
        <div className={classes.footerLinks}>
          <span className={classes.footerLink}>Made with ❤️</span>
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
