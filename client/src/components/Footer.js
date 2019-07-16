import React from 'react';
import '../css/Footer.scss';

var Footer = props => {
  return (
    <div>
      <div className="footer">
        <ul className="footer__items">
          <li>Country</li>
          <li>Newsletter Signup</li>
          <li>Customer Care</li>
          <li>Locations</li>
          <li>Editorial Archive</li>
          <li>Careers</li>
          <li>Affiliates</li>
          <li>Sitemap</li>
        </ul>
        <ul className="footer__info">
          <li>2019 ssense.com</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="seperator"></div>
      <div className="small-footer">
        <div className="small-footer__header">Newsletter Signup</div>
        <div className="small-footer__subHeader">Sign up for email updates and promotions</div>
        <div className="small-footer__items">
          <form>
            <input type="email" name="email" placeholder="Email address"></input>
          </form>
        </div>
        <ul className="footer__info">
          <li>2019 ssense.com</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;