import React from 'react';

import NavigationBar from './components/NavigationBar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {
  return (
    <div>
      <div className="App">
        <NavigationBar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
