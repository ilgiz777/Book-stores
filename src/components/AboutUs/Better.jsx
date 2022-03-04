import React from "react";
import { Link } from "react-router-dom";
import "./Better.css";

const Better = () => {
  return (
    <div>
      <header className="better">
        <div className="better-header2">
          <div className="better-img">
            <h1 className="thema2">We believe in the power of knowledge.</h1>
          </div>
        </div>
      </header>
      <section>
        <div className=" BDN-1">
          <div className="BDN">
            <Link to="/aboutus">
              <button className="btn-better">Book Donations</button>
            </Link>
          </div>
          <div className="VTN">
            <Link to="/aboutus">
              <button className="btn-better">Volunteering</button>
            </Link>
          </div>
        </div>
        <div className="BDN-1">
          <div className="SPN">
            <Link to="/aboutus">
              <button className="btn-better">Special Projects</button>
            </Link>
          </div>
          <div className="LPN">
            <Link to="/aboutus">
              <button className="btn-better">Literacy Partners</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Better;
