import "./App.css";
import { Burger } from "./components/Header/Burger/Burger";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Burger />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
