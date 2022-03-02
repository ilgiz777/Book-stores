import React from "react";
// import "./SectionFirs.module.css";
import "./SectionFirst.css";
import icons1 from "../assets/imghome/icons1.png";
import icons2 from "../assets/imghome/icons2.png";
import icons3 from "../assets/imghome/icons3.png";

const SectionFirst = () => {
  return (
    <>
      <div className="container">
        <div className="parallax">
          <div className="parallax_body">
            <div className="parallax_header">
              <h1 className="text">Будем знакомы!</h1>
              <p>
                Кни́га — один из видов печатной продукции: непериодическое
                издание, состоящее из сброшюрованных или отдельных бумажных
                листов (страниц) или тетрадей, на которых нанесена типографским
                или рукописным способом текстовая и графическая (иллюстрации)
                информация, имеющее, как правило, твёрдый переплёт
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="advertising">
        <div className="advertising_item">
          <img className="advertising_img" src={icons1} />
          <h3>26 000</h3>
          <p>
            26 000 сотрудников по всему миру работают над созданием печенья,
            шоколада и кексов
          </p>
        </div>
        <div className="advertising_item">
          <img className="advertising_img" src={icons2} />
          <h3>26 000</h3>
          <p>
            26 000 сотрудников по всему миру работают над созданием печенья,
            шоколада и кексов
          </p>
        </div>
        <div className="advertising_item">
          <img className="advertising_img" src={icons3} />
          <h3>26 000</h3>
          <p>
            26 000 сотрудников по всему миру работают над созданием печенья,
            шоколада и кексов
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionFirst;
