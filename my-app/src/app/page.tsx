import React from 'react';
import Header from '../app/components/Header';

interface Props {
  name: string;
  age: number;
}

const HomePage: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <Header title="Билетопоиск" />
      <p>This is the homepage of your Next.js app.</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default HomePage;