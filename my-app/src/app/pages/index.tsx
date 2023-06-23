import React from 'react';

interface Props {
  name: string;
  age: number;
}

const HomePage: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is the homepage of your Next.js app.</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default HomePage;
