import "./App.css";
import Footer from "./footer";
import Form from "./Form";
import { ReactComponent as Logo } from "./img/logo.svg";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Footer></Footer>
      <Form />
      <div className="container">
        <Logo />
      </div>
    </div>
  );
}

export default App;
