import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';
import Course from './components/Course';

function App () {
  return (
    <div>
<Navbar/>
<Home/>
<Blog/>
<Contact/>
<Course/>
<Footer/>
    </div>
    
  );
}

export default App;

