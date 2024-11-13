import React from 'react';
import Header from './components/Header';
import './components/Style.css';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';

const App = () => {
  return (
    <div>
      <Header />
      <ContentSection/>
      <Footer />
    </div>
  );
};

export default App;
