import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return( 
        <div >
          <Header />
          <Component {...pageProps} /> 
          <Footer />
        </div>
  )
}
