import { Suspense, useState } from "react";
import { GlobalStyle } from "../styles/globalStyle";
import { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import SmoothScroll from "smooth-scroll";



function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Suspense fallback={<p>...loading</p>}>
          <GlobalStyle/ >
          {/* <Header />
          <Hero /> */}
          <AboutUs />
          {/* <Portfolio />
          <Services />
          <Team />
          <Footer /> */}
        </Suspense>
      )}
    </>
  );
}

export default App;
