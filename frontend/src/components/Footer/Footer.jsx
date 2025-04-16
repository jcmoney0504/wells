import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <ul class="footer-links">
          <li>
            <a href="#">About Wells Fargo</a>
          </li>
          <li>
            <a href="#">Online Access Agreement</a>
          </li>
          <li>
            <a href="#">Privacy, Cookies, Security & Legal</a>
          </li>
          <li>
            <a href="#">Do not sell or share my personal information</a>
          </li>
          <li>
            <a href="#">Notice of Data Collection</a>
          </li>
          <li>
            <a href="#">Report Email Fraud</a>
          </li>
          <li>
            <a href="#">Security Center</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Give Us Feedback</a>
          </li>
        </ul>
        <p>© 1999 - 2025 Wells Fargo. All rights reserved. NMLSR ID 399801</p>
      </div>
    </div>
  );
};

export default Footer;
