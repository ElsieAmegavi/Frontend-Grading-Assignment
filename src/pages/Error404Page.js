import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import '../assets/css/home.css';



const Error404Page = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <nav>
        <Link to="/">Go home</Link>
      </nav>
    </div>
  );
};

export default Error404Page;