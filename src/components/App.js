import { Suspense } from "react";
import { GlobalStyle } from "../styles/globalStyle";

function App() {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <GlobalStyle />
      <h1
        style={{
          textAlign: "start",
          marginTop: 32,
          marginLeft: 40,
          color: "white",
          margin: 0,
        }}
      >
        NUDE
      </h1>
    </Suspense>
  );
}

export default App;
