import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import './Principal.scss';

function Principal() {
  return (
    <div className='principal'>
      <Header />
      <div className='principal__movie-area' />
      <div className='principal__serie-area' />
      <Footer />
    </div>

  );
}

export default Principal;
