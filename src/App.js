//Componenets
import Head from "./Components/Head";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

//styling
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Head />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
