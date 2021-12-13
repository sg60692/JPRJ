import react, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Service from "./components/Services/Service.js";
import CarouselContainer from "./components/Carousel/caros.js";
import Banner from "./components/Banner/Banner.js";
import Product from "./components/Products/Products.js";
import Ourteam from "./components/Ourteam/Ourteam";
import Moto from "./components/Moto/Moto";
import Facilities from "./components/Facilities/Facilities";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Features from "./components/Features/Feature";
function App() {
  return (
    <div className="App d-flex d-coloum">
      <Header />
      <Banner />
      <Service />
      <Moto />
      <Product />
      <CarouselContainer />
      <Ourteam />
      <Facilities />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
