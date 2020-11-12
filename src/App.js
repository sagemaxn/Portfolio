import React from "react";

import NavigationBar from "./components/NavigationBar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

import Layout from "./components/Layout"
//import Layout2 from "./components/Layout2"


function App() {
  return (
    <div>
      <div className="App">
        <NavigationBar />

        <Home />
        
        <Layout>
        <About />
        </Layout>
        <Layout>
        <Projects />
        </Layout>
        <Contact />
        
      </div>
    </div>
  );
}

export default App;
