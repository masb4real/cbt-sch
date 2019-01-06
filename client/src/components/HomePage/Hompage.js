import React from 'react';

import Navigation from '../Navbar/Navigation';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <header className="jumbotron text-center">
        <h1>Welcome to Harmony International School CBT</h1>
        <br />
        <h4>An online platform where user can practice a Computer Base Test</h4>
      </header>
    </div>
  );
}

export default HomePage;