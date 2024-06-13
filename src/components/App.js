import { Suspense, useState } from "react";
import { GlobalStyle } from "../styles/globalStyle";
import Header from "./Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [loading, setLoading] = useState(true);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };

 return (
    <main>
      {loading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <Suspense fallback={<p>...loading</p>}>
          <GlobalStyle />
          <Header />
          <Hero />
          <AboutUs />
          <Portfolio />
          <Services />
          <Team />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}

export default App;
