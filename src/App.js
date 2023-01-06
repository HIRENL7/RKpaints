
import './App.css';
import './rk.css'
import HomeNav from './Components/HomePage/HomeNav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import Client from './Pages/Clientss/Client';
import Contact from './Pages/ContactUs/Contact';
import Team from '../src/Pages/Team/Team';
import TailFooter from './Components/FooterMain/TailFooter';
import Services from './Pages/Servicess/Services';


function App() {
  return (

    <>
      <Router>
        <HomeNav />
        {/* <Home/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/client" element={<Client/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/team" element={<Team/>} />
        </Routes>
        <TailFooter />
      </Router>
    </>
  );
}

export default App;
