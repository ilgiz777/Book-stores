import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <header className="aboutUs">
        <div className="header-content">
          <h1>Readit </h1>
          <div className="line"></div>
          <h3>
            The best time to plan a book is
            <br />
            while you're doing the dishes.
          </h3>
          <p>
            We believe profit is not the only way to measure business success.
          </p>
          <div className="arrow-bounce"></div>
        </div>
      </header>

      {/* Events */}
      <section className="events">
        <div className="events_col">
          <div className="aboutus-col1">
            <Link to="/history">
              <button className="btn_aboutus">History</button>
            </Link>
          </div>

          <div className="aboutus-col2">
            <Link to="/better">
              <button className="btn_aboutus">Better world books care</button>
            </Link>
          </div>
        </div>
        <div className="events_col">
          <div className="aboutus-col3">
            <Link to="/purpose">
              <button className="btn_aboutus">Purpose&Values</button>
            </Link>
          </div>
          <div className="aboutus-col4">
            <Link to="/relax">
              <button className="btn_aboutus">Relax</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
