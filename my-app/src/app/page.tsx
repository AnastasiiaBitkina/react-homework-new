import React from 'react';
import HomePages from './pages/index';

const Page: React.FC = () => {
  return (
    <div>
      <HomePages />
    </div>
  );
};

export default Page;



/*ReactDOM.render(<Page />, document.getElementById('root'));*/


/*import Header from '../app/components/Header';
import MainPart from '../app/components/MainPart'
import Footer from './components/Footer';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header title="Билетопоиск" />
      <MainPart />
      <Footer />
    </div>
  );
};

export default HomePage;*/