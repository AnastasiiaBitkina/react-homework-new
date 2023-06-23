import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="qa">Вопросы-ответы</div>
        <div className="about">О нас</div>
      </div>
    </footer>
  );
};

export default Footer;
