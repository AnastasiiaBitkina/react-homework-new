import React from "react";
import Link from 'next/link'
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link href="/qa">
          <label className="qa">Вопросы-ответы</label>
        </Link>
        <Link href="/about">
          <label className="about">О нас</label>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;


