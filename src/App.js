import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Menu from "./pages/Menu"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" Component={Home}/>
          <Route exact path="/menu" Component={Menu}/>
          <Route exact path="/about" Component={About}/>
          <Route exact path="/contact" Component={Contact}/>
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
