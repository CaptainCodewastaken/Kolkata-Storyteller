import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Story from './components/Story/Story';
import About from './components/About/About'; 
import Features from './components/Features/Features';
import Login from './components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Hero />
          <Story />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: '/features',
      element: (
        <>
          <Navbar />
          <Features />
        </>
      ),
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
