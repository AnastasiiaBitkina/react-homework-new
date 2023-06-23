import React from 'react';
import Header from '../app/components/Header';
import MainPart from '../app/components/MainPart'
import Footer from './components/Footer';

interface Props {
  name: string;
  age: number;
}

const HomePage: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <Header title="Билетопоиск" />
      <MainPart />
      <Footer />
    </div>
  );
};

export default HomePage;