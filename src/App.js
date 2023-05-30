import React, { useState } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

import "./Style/Header.scss";
import "./Style/Home.scss";
import "./Style/animation.scss";
import "./Style/Work.scss";
import "./Style/Timeline.scss";
import "./Style/Services.scss";
import "./Style/Testimonial.scss";
import "./Style/Contact.scss";
import "./Style/Footer.scss";
import "./Style/mediaQuery.scss";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
