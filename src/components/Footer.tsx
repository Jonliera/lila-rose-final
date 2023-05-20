import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-base-content">
      <div>
        <span className="footer__title footer-title">Lila & Rose </span>
        <a href="/about" className="footer_link link link-hover">
          About us
        </a>
        <a className="footer__link link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer__title footer-title">Legal</span>
        <a className="footer__link link link-hover">Terms of use</a>
      </div>
      <div>
        <span className="footer__title footer-title">Newsletter</span>
        <div className="footer__form form-control w-80">
          <label className="footer__form- label">
            <span className="footer__form-text label-text">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="footer__input input input-bordered w-full pr-16"
            />
            <button className="footer__btn btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
