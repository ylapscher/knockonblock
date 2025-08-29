import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import PrivacyPolicy from './components/sections/PrivacyPolicy';
import TermsConditions from './components/sections/TermsConditions';
import ComingSoon from './components/sections/ComingSoon';
import FloatingQuoteButton from './components/ui/FloatingQuoteButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/original" element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Testimonials />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={
            <>
              <Header />
              <main>
                <PrivacyPolicy />
              </main>
              <Footer />
            </>
          } />
          <Route path="/terms-conditions" element={
            <>
              <Header />
              <main>
                <TermsConditions />
              </main>
              <Footer />
            </>
          } />
        </Routes>
        <FloatingQuoteButton />
      </div>
    </Router>
  );
}

export default App;
