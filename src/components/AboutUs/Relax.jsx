import React from "react";
import "./Relax.css";

const Relax = () => {
  return (
    <div>
      <header className="relax">
        <div className="relax-header4">
          <div className="relax-img">
            <h1 className="thema4">Relax</h1>
          </div>
        </div>
      </header>

      <div className="step">
        <video autoPlay loop muted>
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/sipfsby7laoh8pmhvzyq"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Relax;
