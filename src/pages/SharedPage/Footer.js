import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo-white-01.png";
import fb from "../../img/facebook-brands.svg";


const Footer = () => {
  return (
    <footer className="footer items-center px-4 py-4 lg:px-24 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <Link to="/" className="">
          <img className="w-12" src={Logo} alt="" />
        </Link>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://web.facebook.com/ashrafalisimon" target='_blank'>
        <i className="fa-brands fa-facebook text-white text-3xl hover:text-primary"></i>
        </a>
        <a href="https://github.com/ashrafalisimon" target='_blank'>
        <i className="fa-brands fa-github text-white text-3xl hover:text-primary"></i>
        </a>
        <a href="https://www.linkedin.com/in/ashrafalisimon/" target='_blank'>
        <i className="fa-brands fa-linkedin text-white text-3xl hover:text-primary"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
