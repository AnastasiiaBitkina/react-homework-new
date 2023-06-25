import React from "react";
import Link from 'next/link'
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="qa">Вопросы-ответы</div>
        <Link href="/about">
          <label className="about">О нас</label>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;


