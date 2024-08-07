import Navbar from '../components/Navbar/Navbar';
import '../components/Citas/citas.module.css'
import '../components/Form/form.module.css'
import '../styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
