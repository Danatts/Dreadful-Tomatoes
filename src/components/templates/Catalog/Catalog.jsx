import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import './Catalog.scss';

function Catalog() {
  return (
    <div className='catalog'>
      <Header />
      <div className='catalog__searcher' />
      <div className='catalog__cards' />
      <Footer />
    </div>

  );
}

export default Catalog;
