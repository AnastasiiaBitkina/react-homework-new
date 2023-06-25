import React from "react";
import "../styles/qa.css";
import Accordion from "../components/Accordion";

const QA: React.FC = () => {
  const items = [
    "Что такое Билетопоиск?",
    "Какой компании принадлежит Билетопоиск?",
    "Как купить билет на Билетопоиск?",
    "Как оставить отзыв на Билетопоиск?"
  ];
  const content = [
    "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.",
    " ",
    " ",
    " "
  ];

  return (
    <div className="main">
      <div className="qa-content">
        <div className="qa-title-item">
          <label className="qa-title">Вопросы-Ответы</label>
        </div>
        <Accordion items={items} content={content} />
      </div>
    </div>
  );
};

export default QA;
