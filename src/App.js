import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Testimonials from "./components/Testimonials";
import Gallary from "./components/Gallary";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Choose />
      <Testimonials />
      <Gallary />
      <Contact />
    </div>
  );
}

export default App;
