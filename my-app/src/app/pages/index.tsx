import Header from '../components/Header';
import MainPart from '../components/MainPart'
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header title="Билетопоиск" />
      <MainPart />
      <Footer />
    </div>
  );
};

export default HomePage;


