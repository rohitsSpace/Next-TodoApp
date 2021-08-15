import "bootstrap/dist/css/bootstrap.css"; // import bootstrap
import "../styles/index.scss"; // scss for the app

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
