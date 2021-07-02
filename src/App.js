import react,{ useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Service from './components/Services/Service.js';
import Banner from './components/Banner/Banner.js';
import Product from './components/Products/Products.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import Share from './components/Subsidiaries/Subsidiaries.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
function FadeInSection(props) {
  const [isVisible, setVisible] = react.useState(false);
  const domRef = react.useRef();
  react.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
function App() {
  return (
    <div className="App d-flex d-coloum">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Banner/>
      <Product/>
      <Testimonials/>
      <Share/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
