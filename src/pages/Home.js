import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';
import FeaturedPropertyties from '../components/FeaturedPropertyties';
import MailList from '../components/MailList'
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedPropertyties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home