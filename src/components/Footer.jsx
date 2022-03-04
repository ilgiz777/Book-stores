import React from "react";
import "./Footer.css";
import Facebook from "../components/assets/imagefooter/Facebook.png";
import Github from "../components/assets/imagefooter/GitHub.png";
import Google from "../components/assets/imagefooter/Google.png";
import YouTube from "../components/assets/imagefooter/YouTube.png";
import Instagram from "../components/assets/imagefooter/Instagram.png";
import Telegram from "../components/assets/imagefooter/Telegram.png";
import WhatsApp from "../components/assets/imagefooter/WhatsApp.png";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <ul className="lis_unstyled">
              <h4>Book_Stores</h4>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col2">
            <ul className="lis_unstyled">
              <h4>Partners</h4>
              <li>Books Land </li>
              <li>Raritet</li>
              <li>Robin Sharma</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col3">
            <ul className="lis_unstyled">
              <h4>Booksellers</h4>
              <li>Bookseller Account Home</li>
              <li>Bookseller FAQ</li>
              <li>Bookseller information</li>
            </ul>
          </div>
          {/* column4 */}
          <div className="col4">
            <ul className="lis_unstyled">
              <h4>Contact</h4>
              <li>+99670854637</li>
              <li>Email: book_stores@gmail.com </li>
              <li>Address: г.Бишкек ул.Масалиева 46 </li>
            </ul>
          </div>
        </div>
      </div>
      {/* // ICONS */}
      <div className="icons">
        <a target="_blank" href="https://www.instagram.com/" className="card">
          <i className="fab fa-instagram"></i>
          <img src={Instagram} alt="" />
        </a>
        <a target="_blank" href="https://ru-ru.facebook.com/" className="card1">
          <i className="fab fa-facebook"></i>
          <img src={Facebook} alt="" />
        </a>
        <a target="_blank" href="https://www.google.com/" className="card3">
          <i className="fab fa-google"></i>
          <img src={Google} alt="" />
        </a>
        <a target="_blank" href="https://github.com/" className="card2">
          <i className="fab fa-git"></i>
          <img src={Github} alt="" />
        </a>
        <a target="_blank" href="https://web.telegram.org/k/" className="card4">
          <i className="fab fa-telegram"></i>
          <img src={Telegram} alt="" />
        </a>
        <a target="_blank" href="https://www.whatsapp.com/" className="card5">
          <i className="fab fa-whatsApp"></i>
          <img src={WhatsApp} alt="" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" className="card6">
          <i className="fab fa-youTube"></i>
          <img src={YouTube} alt="" />
        </a>
      </div>
      <hr />
      <div className="row2">
        <p className="col-sm">
          © {new Date().getFullYear()} Book Stores | All right reserved | Terms
          Off Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
