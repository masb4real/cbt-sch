import React from 'react';

import Navigation from '../Navbar/Navigation';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <header className="jumbotron text-center">
        <h1>Welcome to CBT</h1>
        <p>An online platform where user can practice a computer base text</p>
      </header>
    </div>
  );
}

export default HomePage;