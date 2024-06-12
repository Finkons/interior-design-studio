import { Suspense } from "react";
import { GlobalStyle } from "../styles/globalStyle";

function App() {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <GlobalStyle />
      <h1>Hello world</h1>
    </Suspense>
  );
}

export default App;
