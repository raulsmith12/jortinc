import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyAlert from '../components/PrivacyAlert';
import '../styles/owl.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col px-0">
          <main className="main">
            <Header />
            <Component {...pageProps} />
            <Footer />
            <PrivacyAlert />
          </main>
        </div>
      </div>
    </div>
  )
}

export default MyApp;
